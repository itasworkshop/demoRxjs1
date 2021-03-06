import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  results$: Observable<any>;

  constructor(private http:HttpClient){}
  
  ngOnInit() {    
    this.results$ = this.searchSubject$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      tap(x => console.log('do',x)),
      switchMap(searchString => this.queryAPI(this.searchString))
      );
  }

  queryAPI(searchString){
    console.log('query API ',searchString);
    return this.http.get(`https://www.reddit.com/r/aww/search.json?q=${searchString}`)
    .pipe(map(result => result['data']['children']));
  }


  inputChanged($event) {
    console.log('input changed', $event);
    this.searchSubject$.next($event);
  }
}
