


import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { throwError,Observable } from 'rxjs';
import {Router} from '@angular/router';

import { map , catchError} from 'rxjs/operators';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient, private router: Router, ) {
  }

  private static loginUrl: string = environment.userServiceBaseUrl + 'signin';
  // private static getUserUrl: string = environment.userServiceBaseUrl + 'user';
  private static changePasswordUrl: string = environment.userServiceBaseUrl + 'change-password';
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  public isAuthenticated(): boolean {
    return sessionStorage.getItem('token') ?  true : false;
  }

  public login(dataToSend: {usernameOrEmail: string, password: string}) {
    return this.http.post(AuthService.loginUrl, dataToSend).pipe(map(res => {
      const response = JSON.parse(JSON.stringify(res));

      console.log(response)
      if (response.data && response.data.jwt) {
        sessionStorage.setItem('token', JSON.stringify(response.data.jwt));  
        
              if (response.data && response.data.user) {
                sessionStorage.setItem('user', JSON.stringify(response.user.firstName));
                this.getLoggedInName.emit(response.user.firstName + ' ' + response.user.lastName);
              }
          }
      return response;
				}),
        catchError(this.handleError)
			);
  }

  public getUser() {
    return sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')) : null;
  }

  // private getUserFromService() {
  //   const token = JSON.parse(sessionStorage.getItem('token'));
  //   const Authorization = token.token_type + ' ' + token.access_token;
  //   const headers = new HttpHeaders({
  //     Authorization
  //   });
  //   return this.http.get(AuthService.getUserUrl, { headers }).pipe(map(res => {
  //         const response = JSON.parse(JSON.stringify(res));
  //         return response;
  //   }));
  // }
  public changePassword(dataToSend) {
    const token = JSON.parse(sessionStorage.getItem('token'));
    const Authorization = token.token_type + ' ' + token.access_token;
    const headers = new HttpHeaders({
      Authorization
    });
    return this.http.put(AuthService.changePasswordUrl, dataToSend, { headers }).pipe( map(res => {
      return JSON.parse(JSON.stringify(res));
    }) );


  }

  public logout() {
    sessionStorage.clear();
  }

  public handleError(error) {
    // check if user session is expired
    if ( error.status === 401 || error.status === 403) {
     return  this.router.navigate(['/login']);
    }
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
   // window.alert(errorMessage);
    return throwError(errorMessage);
  }


}
