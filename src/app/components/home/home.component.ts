import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
 
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Fname:string="Rishindra";
Lname:string = "Sharma";
Age:number = 21;
salary:number = 30000;
Gender:string="Male";

  constructor() { }

  ngOnInit(): void {
  }

}
