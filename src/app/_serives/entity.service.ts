

import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { environment } from '../../environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';

import 'rxjs/add/operator/catch';


@Injectable()
export class EntityService {
	constructor(
		private httpservice: HttpService,
		private httpClient: HttpClient,
		private router: Router
	) {
		this.env = environment;
		this.entityPath = this.env.entityPath;
	}
	env: any;
	entityPath: string;
	masterDbPath: string;
	serviceCreditPath: string;

	saveNewCompany(data: any, headers?: any) {
        console.log('data', data);
        
		return this.httpservice
			.post(this.entityPath + 'create-company', data, null, headers)
			.map((res) => res);
	}

	editCompany(data: any, headers?: any) {
		return this.httpservice
			.put(this.entityPath + 'agreement', data, null, headers)
			.map((res) => res);
	}

	getSavedContract(id) {
		return this.httpservice
			.get(this.entityPath + 'agreement/' + id)
			.map((res) => res);
	}

	submitPriceManagerContract(data: any, headers?: any) {
		return this.httpservice
			.post(this.entityPath + 'agreement/submit', data, null, headers)
			.map((res) => res);
	}

	updatePriceManagerContract(data: any, headers?: any) {
		return this.httpservice
			.post(this.entityPath + 'agreement/update', data, null, headers)
			.map((res) => res);
	}

	approvePriceManagerContract(data: any, headers?: any) {
		return this.httpservice
			.post(this.entityPath + 'agreement/approve', data, null, headers)
			.map((res) => res);
	}

	// approveServiceCreditContract(data: any, headers?: any) {
	// 	return this.httpservice
	// 		.post(this.serviceCreditPath + 'agreement/approve', data, null, headers)
	// 		.map((res) => res);
	// }


	getDetailFromContract(id: any, headers?: any) {
		return this.httpservice
			.get(this.entityPath + 'agreement/' + id, null, headers)
			.map((res) => res);
	}

	getHistoryFromContractId(id: any, headers?: any) {
		return this.httpservice
			.get(this.entityPath + 'agreement/chain/' + id, null, headers)
			.map((res) => res);
	}

    // getHistoryFromReportId(id: any, headers?: any) {
    //     return this.httpservice
    //         .get(this.serviceCreditPath + 'report/chain/' + id, null, headers)
    //         .map((res) => res);
    // }

	getHistoryStatusFromContractId(id: any, headers?: any) {
		return this.httpservice
			.get(this.entityPath + 'agreement/chain/status/' + id, null, headers)
			.map((res) => res);
	}


}