import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userData: any;

  constructor() { }

  ngOnInit(): void {
    // this.userData = localStorage.getItem('User');
    
    this.display();
  }
  display(){
    // this.userData = localStorage.getItem('User');
    // console.log(this.userData);
    let data: any = localStorage.getItem('User');
    this.userData = JSON.parse(data);
  }

}
