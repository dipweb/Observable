import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, from, fromEvent, of } from 'rxjs';

@Component({
  selector: 'app-rxjs-learn',
  templateUrl: './rxjs-learn.component.html',
  styleUrls: ['./rxjs-learn.component.css'],
})
export class RxjsLearnComponent implements OnInit {
  agents: Observable<string>;
  agentName: string;

  @ViewChild('validate')
  validate: ElementRef;
  //of operator
  studentList = ['Ram', 'Deepak', 'Sita'];
  students$: Observable<string[]> = of(this.studentList);

  studentName = 'Ram';
  studentNames$: Observable<string> = of(this.studentName);

  studentObj = { id: 10, name: 'Ram' };
  student$: Observable<any> = of(this.studentObj);

  //From Operator
  orders$: Observable<string> = from([
    'Fashion',
    'Electronics',
    'Mobile',
    'Household',
  ]);

  orderName: string;

  //Interval Operator

  constructor() {}

  ngOnInit(): void {
    // of operator
    console.log('---------Of Operator---------------------');
    this.students$.subscribe((data) => console.log(data));
    this.studentNames$.subscribe((data) => console.log(data));
    this.student$.subscribe((data) => console.log(data));

    console.log('---------from Operator---------------------');
    this.orders$.subscribe((data) => {
      console.log(data);
      setInterval(() => {
        this.orderName = data;
      }, 3000);
    });
    // Creating Observable Example
    console.log('-------------creating observable Exmaple-----');
    this.agents = new Observable(function (observer) {
      {
        try {
          observer.next('Ram');
          setTimeout(() => {
            observer.next('Deepak');
          }, 3000);
          setTimeout(() => {
            observer.next('SiTa');
          }, 6000);
        } catch (e) {
          observer.error(e);
        }
      }
    });

    this.agents.subscribe((data) => {
      console.log(data);
      this.agentName = data;
    });
  }

  //fromEvent
  rxjsEventObservable() {
    const btnObservable$ = fromEvent(this.validate.nativeElement, 'click');
    btnObservable$.subscribe((data) => console.log(data));
  }
}
