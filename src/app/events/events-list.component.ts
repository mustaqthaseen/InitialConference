import { Inject, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { EventService } from './shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared';

@Component({
    template: `
    <div>
        <h1>Upcoming Web Development Events</h1>
        <hr/>
        <div class="row">
            <div *ngFor= "let event of events" class="col-md-5">
                <event-thumbnail [event] ="event" ></event-thumbnail>
            </div>
        </div>
    </div>
    `
})

export class EventsListComponent implements OnInit {
    events:IEvent[]
        constructor(@Inject(EventService) private eventService: EventService, 
        @Inject(ActivatedRoute) private route:ActivatedRoute) {
        
        }
        ngOnInit() {
           // this.eventService.getEvents().subscribe(events =>{this.events =events})
                this.events = this.route.snapshot.data['events']
        }
        
}