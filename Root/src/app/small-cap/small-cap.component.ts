import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service'

@Component({
  selector: 'app-small-cap',
  templateUrl: './small-cap.component.html',
  styleUrls: ['./small-cap.component.css'],
  providers: [
    UserService
  ]
})
export class SmallCapComponent implements OnInit {
  title = "Small Cap";
  ngOnInit() {
  }

  constructor(private userService: UserService) {}
  profile = {};
  headers;

  loadUser() {
    this.userService.getData().subscribe(data => this.profile = data);
  }

  loadHeaders() {
    this.userService.getData().subscribe(data => this.profile = data.query.results.table.thead);
    this.headers = this.profile;
  }
}
