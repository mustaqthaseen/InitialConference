import { Inject, OnInit} from '@angular/core';
import { Component } from '@angular/core'
import { EventService } from '../shared/event.service';
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent, ISession } from '../shared';


@Component ({
    templateUrl: './event-details.component.html',
    styles: [`
    .container { padding-left:20px; padding-right:20px; }
    .event-image: { height:100px; }
    a {cursor:pointer; }
    `]
})

export class EventDetailsComponent implements OnInit{
events:IEvent
addMode:boolean
filterBy:string = 'all';
sortBy: string ='votes';

constructor( @Inject(EventService) private eventService: EventService,@Inject(ActivatedRoute) private route: ActivatedRoute)
{
}
ngOnInit(){
this.route.params.forEach((params: Params) => {
    this.events =this.eventService.getEvent(+params['id'])
    this.addMode=false
})

}
addSession(){
    this.addMode =true
}
saveNewSession(session:ISession){
    const nextId =Math.max.apply(null, this.events.sessions.map(s =>
        s.id));
        session.id = nextId + 1
        this.events.sessions.push(session)
        this.eventService.updateEvent(this.events)
        this.addMode = false
    
}
cancelAddSession(){
    this.addMode=false
}
}