import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { SessionService } from '../session.service';
import { Relation } from '../relation.model';
import { Invite } from '../invite.model';
import { Operation } from '../operation.model';
import { Problem } from '../problem.model';
import { UIService } from '../../shared/ui.service';
import * as fromSession from '../session.reducer';
import * as fromRoot from '../../app.reducer';

@Component({
  selector: 'app-add-session',
  templateUrl: './add-session.component.html',
  styleUrls: ['./add-session.component.css']
})
export class AddSessionComponent implements OnInit {
  relations$: Observable<Relation[]>;
  panelOpenState = false;
  defaultName = 'International Education Project Kickoff';
  defaultEmail = 'global@w3ai.net';
  defaultProjects = 'Intl Edu Project';
  defaultServices = 'NS, ON, NY Edu';
  defaultInterests = 'fast, social, innovation, student, teams';
  defaultConsole = `global(master)$> nt generate venture Edu
global(master)$> venture Edu created
global(master)$> nt generate skills Edu
global(master)$> skills Edu created
global(master)$> nt g teams Edu
global(master)$> teams Edu created
global(master)$> nt g project Edu
global(master)$> project Edu created
global(DNA)$> nt g p PMO
global(DNA)$> nt g p COE`;
  defaultUrl = 'https://w3ai.net/GIT/';
  // isLoading$: Observable<boolean>;

  constructor(
    private sessionService: SessionService, 
    private uiService:  UIService, 
    private store: Store<fromSession.State>  
  ) {}

  ngOnInit() {
    // this.isLoading$ = this.store.select(fromRoot.getIsLoading);
    // this.plans$ = this.store.select(fromProject.getAvailablePlans);
    // this.fetchPlans();  
  }

  onAddSession(form: NgForm) {
    this.sessionService.addSession( form.value );
  }

  // onInviteSession(form: NgForm) {
  //   this.sessionService.inviteSession( form.value );
  // }

}
