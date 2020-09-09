import { Component, OnInit } from '@angular/core';
import{EventService} from 'src/app/services/event.service';
import{Event} from 'src/app/Model/event';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
 
  events:Event[] = [];
  constructor( private eventService : EventService) {

      
   }

  ngOnInit(): void {
    this.events = this.eventService.getEvent();
    
  }
del(event:Event)
{
     this.eventService.deleteEmp(event);
}
addEvent(eventName: string, desc: string, speaker: string) {
  this.eventService.addEvent(eventName, desc, speaker);
}

}
