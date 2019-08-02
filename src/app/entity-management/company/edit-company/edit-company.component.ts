import { Component, OnInit, Output, Input } from '@angular/core';


@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css']
})
export class EditCompanyComponent implements OnInit {

  @Input() editRecords: any;
  constructor() { }

  ngOnInit() {

    console.log(this.editRecords)
  }
   
}
