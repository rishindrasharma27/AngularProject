import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { AboutComponent } from './components/about/about.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { UserComponent } from './components/user/user.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { ClassdemoComponent } from './components/classdemo/classdemo.component';
// import { EdituserComponent } from './components/edituser/edituser.component';
import {TestComponent} from './components/test/test.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'about', component: AboutComponent},
  {path:'empList',component: EmployeeListComponent},
  {path:'reactive-form', component:ReactiveFormComponent},
  {path:'user',component:UserComponent},
  {path:'adduser',component:AdduserComponent},
  {path:'classdemo',component:ClassdemoComponent},
  {path:'test',component:TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
