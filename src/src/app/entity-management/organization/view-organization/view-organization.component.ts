import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-organization',
  templateUrl: './view-organization.component.html',
  styleUrls: ['./view-organization.component.css']
})
export class ViewOrganizationComponent implements OnInit {
  records: any;
  constructor() { }

  ngOnInit() {
    this.records = {
      name: "pandi",
      age: 25
    }
  }

}
