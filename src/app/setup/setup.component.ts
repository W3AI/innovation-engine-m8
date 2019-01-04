import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';

import { LoggingService } from '../logging.service';
import { SetupService } from '../setup.service';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {
  // @Input() account: {name: string, osName: string, status: string};
  // @Input() id: number;

  // accounts: Accounts[] = [];

  timer: number;
  aiName: string = 'uProgress';
  // @Output() newDnaCycle = new EventEmitter<number>();
  interval = 500;   // nr or miliseconds for the DNA Loop  interval
  newInterval = 500;

  constructor(private loggingService: LoggingService,
              private setupService: SetupService,
              private db: AngularFirestore) { 

    this.startDnaLoop;
    this.onSetCycle();
  }

  ngOnInit() {
    this.db.collection('devUsers').valueChanges().subscribe(result => {
      console.log(result);
    });
  }

  startDnaLoop() {
    this.timer = setInterval( ()=> {
      this.dnaLoop();
    }, this.interval );
  }

  dnaLoop() {
    this.newInterval++;
  }

  onSetTitle() {
    this.setupService.addAccount('Steve', this.aiName, 'active');
    this.loggingService.logStatusChange(this.aiName);

    this.setupService.statusUpdated.emit(this.aiName);
  }

  onSetCycle() {
    clearInterval(this.timer);
    // Line below is just to offer a bit of feedback onSetCycle change
    this.newInterval = this.interval;
    setTimeout(1000);
    this.startDnaLoop();
  }

  // onSetTo(status: string) {
  //   this.setupService.updateStatus(this.id, status);
    
  //   this.setupService.statusUpdated.emit(status);
  // }

}
