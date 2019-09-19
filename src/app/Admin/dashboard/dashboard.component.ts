import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  count: any;
  list: any;
  isUndefined=false;

  constructor(private dashboardservice: DashboardService) { }

  ngOnInit() {
    this.getcount();
  }
  getcount() {
    this.dashboardservice.dashboarduser().subscribe(data => {
      console.log(data);
      this.count = data;
      this.list = this.count.body;
      this.isUndefined=true;

    })
  }


}
