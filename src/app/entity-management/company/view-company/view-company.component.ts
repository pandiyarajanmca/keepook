import { Component, OnInit, ViewChild } from '@angular/core';
import { EntityService } from 'src/app/_serives/entity.service';

@Component({
  selector: 'app-view-company',
  templateUrl: './view-company.component.html',
  styleUrls: ['./view-company.component.css']
})
export class ViewCompanyComponent implements OnInit {
  companyList: any;
  editRecord: any;
  constructor(private entityService: EntityService) { }

  ngOnInit() {
    this.getCompany();
  }

  getCompany() {
    this.entityService.getAllCompany().subscribe(res => {
      if (res['statusCode'] == 202) {
        this.companyList = res['data']['companies'];
      }
    }, err => {

    });
  }
}
