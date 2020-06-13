import { Component } from '@angular/core';
import { Observable, Subject, BehaviorSubject, ReplaySubject, Subscription, interval, pipe, of, fromEvent } from 'rxjs';
import { map, take, tap, filter, mergeMap, switchMap, debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchSubject$ = new Subject<string>();
  searchString = '';
  
  ngOnInit() {    
    this.searchSubject$.pipe(debounceTime(500));
    //this.searchSubject$.pipe(debounceTime(500)).subscribe(x => console.log('subscribed data ',x));
  }
  inputChanged($event) {
    console.log('input changed', $event);
    this.searchSubject$.next($event);
  }
}
