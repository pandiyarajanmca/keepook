import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-assign-roles',
  templateUrl: './assign-roles.component.html',
  styleUrls: ['./assign-roles.component.css']
})
export class AssignRolesComponent implements OnInit {

  constructor(
    private _location: Location
  ) { }

  ngOnInit() {
  }

  goBack() {
    this._location.back();
  }

}
