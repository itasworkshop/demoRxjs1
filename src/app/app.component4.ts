import { Component } from '@angular/core';
import { Observable, Subject,BehaviorSubject, Subscription, interval, pipe, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoRxjs1';
  subject$;

  ngOnInit() {
    this.subject$ = new BehaviorSubject(20); //search term finalization
    
    this.subject$.subscribe(x =>
      console.log("first subscription.",x)
    );

    this.subject$.next("Jan Times");
    this.subject$.next("Feb Times");
    this.subject$.next("Mar Times");

    this.subject$.subscribe(x =>
      console.log("second subscription.",x)
    );
    //this.subject$.complete(); shutting down magzine publication

    //this.subject$.unsubscribe(); //customer unsubscribes magzine
    this.subject$.next("Apr Times");
    this.subject$.next("May Times");

    //this.subject$.complete();
    //this.subject$.next("Jun Times");

    //this.subject$.unsubscribe();

    //this.subject$.next("July Times");


  }
}
