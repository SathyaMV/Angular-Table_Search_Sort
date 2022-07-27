import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  users;
  values = "";
  sortedVal: string;
  reverse: boolean = false;


  constructor(service: ServiceService) { 
    this.users = service.getUsers();
  }

  ngOnInit(): void {
    console.log(this.users);
  }

  sort(key: string){
    this.sortedVal = key;
    this.reverse = !this.reverse;
  }
  
  
}
