import { Component, OnInit, } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-data-source',
  templateUrl: './add-data-source.component.html',
  styleUrls: ['./add-data-source.component.css']
})
export class AddDataSourceComponent implements OnInit {

  createCompanyForm: FormGroup;
  submitted: boolean= false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }
  vodafoneMarkets: Array<any> = [];
  CompanyIdExistError: boolean = false;

  ngOnInit() {
    this.createCompanyForm = this.formBuilder.group({
      companyNameCL: ['', Validators.required],
      TemplatesCountCL: ['', Validators.required],
      TemplatesPeriodCL: ['', Validators.required],
      ContractsCountCL: ['', Validators.required],
      ContractsPeriodCL: ['', Validators.required],
   
      companyNameOL: ['', Validators.required],
      TemplatesCountOL: ['', Validators.required],
      TemplatesPeriodOL: ['', Validators.required],
      ContractsCountOL: ['', Validators.required],      
      ContractsPeriodOL: ['', Validators.required],
    });

    this.createCompanyForm.controls['companyNameCL'].valueChanges.subscribe(val => {  
        // this.createCompanyForm.controls['location'].setValidators([Validators.required]);
        // this.createCompanyForm.controls['location1'].setValidators([Validators.required]);
       
  });

  }
  
  
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
  
}
