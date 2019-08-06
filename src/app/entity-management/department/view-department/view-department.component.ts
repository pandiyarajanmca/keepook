import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-department',
  templateUrl: './view-department.component.html',
  styleUrls: ['./view-department.component.css']
})
export class ViewDepartmentComponent implements OnInit {
  records: any;
  constructor() { }

  ngOnInit() {
    this.records = {
      name: "pandi",
      age: 25
    }
  }

}
