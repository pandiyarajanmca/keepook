import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-user-group',
  templateUrl: './view-user-group.component.html',
  styleUrls: ['./view-user-group.component.css']
})
export class ViewUserGroupComponent implements OnInit {
  records: any;
  constructor() { }

  ngOnInit() {
    this.records = {
      name: "pandi",
      age: 25
    }
  }

}
