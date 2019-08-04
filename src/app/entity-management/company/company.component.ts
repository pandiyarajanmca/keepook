import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { forkJoin, from } from 'rxjs';
import { EntityService } from '../../_serives/entity.service';
import { ViewChild } from '@angular/core';
import { AngularFileUploaderComponent } from "angular-file-uploader";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  
  createCompanyForm: FormGroup;
  submitted: boolean = false;

  afuConfig = {
    uploadAPI: {
      url:"https://example-file-upload-api"
    }
  };
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private entityService: EntityService
  ) { }




  ngOnInit() {
    this.createCompanyForm = this.formBuilder.group({
      companyName: ['', Validators.required],
      website: ['', Validators.required],
      logo: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      zipCode: ['', Validators.required],
      country: [''],
      phoneNumber: ['', Validators.required],
      contactPerson: ['', Validators.required],
    });

    this.createCompanyForm.controls['companyName'].valueChanges.subscribe(val => {
      // this.createCompanyForm.controls['location'].setValidators([Validators.required]);
      // this.createCompanyForm.controls['location1'].setValidators([Validators.required]);

    });
    // this.fileUpload1.resetFileUpload();
  }

  DocUpload(e) {
    console.log(e);    
  }


  createCompanySubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.createCompanyForm.invalid) {
      return;
    }

    else {
      this.entityService.saveNewCompany(this.createCompanyForm.value).subscribe(res => {
        console.log(res);
      }, err => {
        console.log(err);
      })
    }

  }

  get fConrols() { return this.createCompanyForm.controls; }

  checkCompanyIdExist() {
    if (this.createCompanyForm.value.CompanyId) {
      const CompanyId = this.createCompanyForm.value.CompanyId;
      //  this.dashboardService.checkExist(CompanyId).subscribe(data => {
      //     if (data['status']) {
      //       this.CompanyIdExistError = true;
      //     } else {
      //       this.CompanyIdExistError = false;
      //     }
      //     console.log("Hello "+this.CompanyIdExistError);
      //  }, err => {
      //   // TODO need to include generic handlerror method
      //  });
    }

  }
}
