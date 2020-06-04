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
    const numbers$ = interval(1000).pipe(take(5));
    const alpha$ = of('a','b','c','d','e');

    alpha$.pipe(switchMap((x) => 
      numbers$.pipe(take(5),map(i => i+x)) // keep 0-4 alive for latest request
    )).subscribe(x => console.log(x));
    /*
    alpha$.pipe(mergeMap((x) => 
      numbers$.pipe(take(5),map(i => i+x)) // keep 0 alive untill we match with all abcde
    )).subscribe(x => console.log(x));
    */

    //numbers$.subscribe(x => console.log(x));
  }
}
