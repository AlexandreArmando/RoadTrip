import { Component, OnInit } from '@angular/core';
import { CalendarComponentOptions } from 'ion2-calendar';
import { HttpClient } from '@angular/common/http';
import { CalendarEvent } from 'src/app/models/calendar-event';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  filter: string = 'year';
  date: string;
  type: 'string';
  calendarOptions : CalendarComponentOptions = {
    monthFormat: 'MM / YYYY',
    weekdays: ['lun','mar','mer','jeu','ven','sam','dim']
  }

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    // this.httpClient.get('../../assets/json/yearEvents.json').pipe(map((events: CalendarEvent[]) => {
    //   events.forEach(event => {
    //     this.calendarOptions.daysConfig.push(
    //       {
    //         date: new Date(event.date),
    //         subTitle: event.subtitle,
    //         marked:true
    //       }
    //     )
    //   })
    // }));
  }

  onSelect($event: any) {
    console.log($event);
  }

}
