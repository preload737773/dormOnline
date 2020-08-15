import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public role: string;
  public username: string;
  public room: number;
  public group: string;
  public phone: string;
  public login: string;
  public roomType: string;

  constructor() {
  }

  ngOnInit(): void {
    this.role = 'ЖИТЕЛЬ';
    this.username = 'Пороткин Михаил Александрович';
    this.room = 405;
    this.group = '6203-090301D';
    this.phone = '+7 929 792 62 80';
    this.login = 'porotkin';
    this.roomType = 'мужская';
  }

}
