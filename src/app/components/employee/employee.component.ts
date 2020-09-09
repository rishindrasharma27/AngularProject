import { Component, OnInit } from '@angular/core';
import {Product} from  '../../Model/product';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {

  Subjects : string[] = ["c#","dotNET","Java"];
  ShowFaculty: boolean = true;
  FacultyName : string = "Rashmi";
  employees: any[] = [
   {
      code: 'emp101', name: 'Rashmi', gender: 'Female',
      annualSalary: 5500, dateOfBirth: '05/16/1988'
    },
    {
      code: 'emp101', name: 'Nisha', gender: 'Female',
      annualSalary: 5500, dateOfBirth: '05/16/1988'
    },
    {
      code: 'emp101', name: 'Abhay', gender: 'Male',
      annualSalary: 5500, dateOfBirth: '05/16/1988'
    } 
  ];
  //array
  Products:Product[]=[
    {id:11,name:"Note8",cost:43434,category:'Electronics'},
    {id:12,name:"Keyboard",cost:3434,category:'Electronics'},
    {id:13,name:"Chair",cost:4434,category:'Furniture'}
  ];

//event function

myFunction()
{
  alert("Yout clicked me");
}
//Function with parameters
deleteProduct(id: number) {
  alert("Product to be deleted" + id)
}
editProduct(id: number, name: string) {
  alert(`Product to be edited ${id} and ${name}`);
}
  constructor() { }

  ngOnInit(): void {
  }

}
