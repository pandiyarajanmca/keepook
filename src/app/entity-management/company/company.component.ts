import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  createCompanyForm: FormGroup;
  submitted: boolean= false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    // public dataservice: DataService,
    // private messageService: MessageService,
    // private dashboardService: DashboardService
  ) { }
  vodafoneMarkets: Array<any> = [];
  CompanyIdExistError: boolean = false;

  ngOnInit() {
    this.createCompanyForm = this.formBuilder.group({
      companyName: ['', Validators.required],
      location: ['', Validators.required],
      location1: ['', Validators.required],
      logo: ['', Validators.required],
      companyAddress: ['', Validators.required],
      // position: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipcode: ['', Validators.required],
      // country: [''],
      phoneNumber: ['', Validators.required],      
      contactPerson: ['', Validators.required],
    });

    this.createCompanyForm.controls['companyName'].valueChanges.subscribe(val => {  
        // this.createCompanyForm.controls['location'].setValidators([Validators.required]);
        // this.createCompanyForm.controls['location1'].setValidators([Validators.required]);
        // this.createCompanyForm.controls['logo'].setValidators([Validators.required]);
        // this.createCompanyForm.controls['companyAddress'].setValidators([Validators.required]);
        // this.createCompanyForm.controls['position'].setValidators([Validators.required]);
        // this.createCompanyForm.controls['city'].setValidators(null);
        // this.createCompanyForm.controls['state'].setValidators(null);
        // this.createCompanyForm.controls['phoneNumber'].setValue(null);
        // this.createCompanyForm.controls['contactPerson'].setValue(null);
        // this.createCompanyForm.controls['country'].setValue(nu ll);
  });

  }
  // initMasterData() {
  //   forkJoin([
  //     // this.dataservice.agreementTypeMasterData(),
  //     // this.dataservice.catalogueTypeMasterData(),
  //     // this.dataservice.vendorTypeMasterData(),
  //     // this.dataservice.marketMasterData()
  //   ]).subscribe(([agreementTypes, catalogueTypes, vendorTypes, marketTypes]) => {
  //     this.agreementTypes = agreementTypes['result']['agreementType'];
  //     this.catalogueTypes = catalogueTypes['result']['catalogues'];
  //     this.vendorTypes = vendorTypes['result']['vendors'];
  //     this.vodafoneMarkets = marketTypes['result']['items'];
  //   }, err => {
  //     console.error('error from server : ', err);
  //   });
  // }

  // createCompanySubmit(data: { CompanyId: number, CompanyType: string, vendorCode: string, vendorName: string, agreementTemplate: string; }) {
  

  //   this.vendorTypes.map(x => {
  //     if (x.vendorId == data.vendorName) {
  //       data.vendorCode = x.vendorId;
  //       data.vendorName = x.vendorName;
  //     }
  //   });
  //   // this.messageService.setData(JSON.stringify(data));
  //   if(data.agreementTemplate === 'Service Credits') {
  //     this.router.navigate(['/agreements/create-service-credit-agreement/' +  data.CompanyId]);
  //   } else {
  //     this.router.navigate(['/agreements/create-price-manager-Company/' + data.CompanyId]);
  //   }

  
  createCompanySubmit() {
    this.submitted = true;
   
    console.log(this.createCompanyForm.controls);
    console.log(this.createCompanyForm.invalid);

    // stop here if form is invalid
    if (this.createCompanyForm.invalid) {
        return;
    }

    // display form values on success
    console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.createCompanyForm.value, null, 4));
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
