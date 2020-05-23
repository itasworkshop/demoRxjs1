import { Component } from '@angular/core';
import { Observable, Subject, Subscription, interval, pipe, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoRxjs1';
  obs$;

  ngOnInit() {
    this.obs$ = Observable.create((observer) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();
    });
    //observer.next(4);
    this.obs$.subscribe(
      value => console.log(value),
      err => { },
      () => console.log('this is the end')
    );
  }
}
