import { Component } from '@angular/core';
import { Observable, Subject, BehaviorSubject, ReplaySubject, Subscription, interval, pipe, of, fromEvent } from 'rxjs';
import { map, take, tap, filter, mergeMap, switchMap, debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoRxjs1';
  birthday = new Date(1990,2,15);
  searchString = '';
  
  ngOnInit() {
    const oneClickEvent = fromEvent(document,
      'click').pipe().subscribe(x => console.log(x));

    //numbers$.subscribe(x => console.log(x));
  }
  inputChanged($event) {
    console.log('input changed', $event);
  }
}
