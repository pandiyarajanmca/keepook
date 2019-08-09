import { Component, OnInit, ViewChild } from '@angular/core';
import { EntityService } from 'src/app/_serives/entity.service';

@Component({
  selector: 'app-view-roles',
  templateUrl: './view-roles.component.html',
  styleUrls: ['./view-roles.component.css']
})
export class ViewRolesComponent implements OnInit {
  RolesList: any;
  editRecord: any;
  constructor(private entityService: EntityService) { }

  ngOnInit() {
    this.getRoles();
  }

  getRoles() {
    // this.entityService.getAllRoles().subscribe(res => {
    //   if (res['statusCode'] == 202) {
    //     this.RolesList = res['data']['companies'];
    //   }
    // }, err => {

    // });
  }
}