import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl} from '@angular/forms'

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  //declare an variable for creating the form
  form: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl("", [Validators.required,Validators.pattern('[a-zA-Z][a-zA-Z]+')]),
      contact: new FormControl("", [Validators.required, Validators.pattern('[0-9]*')]),
      email: new FormControl("", [Validators.required, Validators.email])
    })
  }

  AddUser(form) {
    alert("Hello");
    console.log(form.value);
    alert(form.value);
  }

  
}