import { Component, OnInit } from '@angular/core';
import{UserTable} from 'src/app/Model/userTable';
import {UserService} from 'src/app/services/user.service'
import {Router} from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 //Variable of type UserTable 
 users: UserTable[];
  constructor(private _userService: UserService, private router:Router) { }

  ngOnInit(): void {
    this._userService.getAllUsers()
      .subscribe(data => {
        this.users = data;
        console.log(this.users);
      });
  }

  addUser()
  {
    this.router.navigate(['adduser']);
  }
  editUser()
  {
    this.router.navigate(['edituser']);
  }
 
deleteUser(object:UserTable)
{
  this._userService.deleteUser(object.id)
        .subscribe(response => {
          this.users = this.users.filter(item => item.id !== object.id);
        });
  // let index = this.users.indexOf(object);
  // this.users.splice(index,1);
  // return this._userService.deleteUser(index);
  
}

}
