import { Component } from '@angular/core';
import { Observable, Subject, BehaviorSubject, ReplaySubject, Subscription, interval, pipe, of } from 'rxjs';
import { map, take, tap, filter, mergeMap, switchMap, debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoRxjs1';
  birthday = new Date(1990,2,15);
  
  ngOnInit() {
    const numbers$ = interval(1000).pipe(
      take(20),
      filter((x) => x>15),
      map((x) => x * x)      
    );

    numbers$.subscribe(x => console.log(x));
  }
}
