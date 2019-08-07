import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { AuthService } from "../_serives/auth.service";
import { Router } from '@angular/router';
import { environment } from '../../environments/environment'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild("spinnerLoad", { static: false }) spinnerLoad;
	loginForm: FormGroup;
	submit: boolean = false;
	environment: any = environment;
	constructor(
		private formBuilder: FormBuilder,
		public toastrService: ToastrService,
		private authService: AuthService,
		private router: Router
	) { }

	ngOnInit() {
		this.loginForm = this.formBuilder.group({
			usernameOrEmail: ["", Validators.required],
			password: ["", Validators.required]
		});
	}
	login(data) {
		this.submit = true;
		// this.spinnerLoad.spinnerShow();
		this.authService.login(data)
		.subscribe(res => {
			this.submit = false;
			this.spinnerLoad.spinnerHide();
			this.router.navigate(['/dashboard'])
		}, err => {
			this.spinnerLoad.spinnerHide();
			this.toastrService.error("Incorrect Username or Password!");
			this.submit = false;
			this.spinnerLoad.spinnerHide();
		})
	}
}