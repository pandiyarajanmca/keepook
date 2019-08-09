import { Component, OnInit, ViewChild } from '@angular/core';
import { EntityService } from 'src/app/_serives/entity.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {
  usersList: any;
  editRecord: any;
  constructor(private entityService: EntityService) { }

  ngOnInit() {
    this.getusers();
  }

  getusers() {
    // this.entityService.getAllUsers().subscribe(res => {
    //   if (res['statusCode'] == 202) {
    //     this.usersList = res['data']['companies'];
    //   }
    // }, err => {

    // });
  }
}