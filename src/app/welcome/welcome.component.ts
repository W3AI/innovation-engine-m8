import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { trigger, state, style, transition, animate, group } from '@angular/animations';
import { DomSanitizer } from '@angular/platform-browser';

import * as fromRoot from '../app.reducer';
import { AuthService } from '../auth/auth.service';

// import * as h from "../logic/helper";
// ToDo [ ] - Do we need both Queue files?
import * as q from "../logic/AlgoQueue";  // ToDo - to remove and test
import * as q1 from "../logic/3AI-Queue";
// import * as cell from "../logic/facebot";
import { color } from 'd3';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  animations: [
  trigger('prjState', [
    state('0', style({
      transform: 'translateY(0px)'
    })),
    state('1', style({
      transform: 'translateY(-330px)'
    })),
    state('2', style({
      transform: 'translateY(-660px)'
    })),
    state('3', style({
      transform: 'translateY(-990px)'
    })),
    state('4', style({
      transform: 'translateY(-1320px)'
    })),
    state('5', style({
      transform: 'translateY(-1650px)'
    })),
    state('6', style({
      transform: 'translateY(-1980px)'
    })),
    transition('* => 0', animate(300)),
    transition('0 => 1', animate(300)),
    transition('1 => 2', animate(300)),
    transition('2 => 3', animate(300)),
    transition('3 => 4', animate(300)),
    transition('4 => 5', animate(300)),
    transition('5 => 6', animate(300)),
    transition('6 => 0', animate(300))
  ]),

  trigger('srvState', [
    state('0', style({
      transform: 'translateY(-1980px)'
    })),
    state('1', style({
      transform: 'translateY(-1650px)'
    })),
    state('2', style({
      transform: 'translateY(-1320px)'
    })),
    state('3', style({
      transform: 'translateY(-990px)'
    })),
    state('4', style({
      transform: 'translateY(-660px)'
    })),
    state('5', style({
      transform: 'translateY(-330px)'
    })),
    state('6', style({
      transform: 'translateY(0px)'
    })),
    transition('* => 0', animate(300)),
    transition('0 => 1', animate(300)),
    transition('1 => 2', animate(300)),
    transition('2 => 3', animate(300)),
    transition('3 => 4', animate(300)),
    transition('4 => 5', animate(300)),
    transition('5 => 6', animate(300)),
    transition('6 => 0', animate(300))
  ]),

  trigger('poScriptOn', [
    state('off', style({
      transform: 'translateX(0px)'
    })),
    state('on', style({
      transform: 'translateX(-139px)'
    })),
    transition('off => on', animate(500)),
    transition('on => off', animate(500))
  ]),
  trigger('poScriptMid', [
    state('off', style({
      transform: 'translateX(0px)'
    })),
    state('on', style({
      transform: 'translateX(-139px)'
    })),
    transition('off => on', animate(500)),
    transition('on => off', animate(500))
  ]),
  trigger('poScriptOff', [
    state('off', style({
      transform: 'translateX(0px)'
    })),
    state('on', style({
      transform: 'translateX(-139px)'
    })),
    transition('off => on', animate(500)),
    transition('on => off', animate(500))
  ]),
  trigger('poScriptDeal', [
    state('off', style({
      transform: 'translateX(0px)'
    })),
    state('on', style({
      transform: 'translateX(-139px)'
    })),
    transition('off => on', animate(500)),
    transition('on => off', animate(500))
  ]),

  trigger('psScriptOn', [
    state('off', style({
      transform: 'translateX(0px)'
    })),
    state('on', style({
      transform: 'translateX(-139px)'
    })),
    transition('off => on', animate(500)),
    transition('on => off', animate(500))
  ]),
  trigger('psScriptMid', [
    state('off', style({
      transform: 'translateX(0px)'
    })),
    state('on', style({
      transform: 'translateX(-139px)'
    })),
    transition('off => on', animate(500)),
    transition('on => off', animate(500))
  ]),
  trigger('psScriptOff', [
    state('off', style({
      transform: 'translateX(0px)'
    })),
    state('on', style({
      transform: 'translateX(-139px)'
    })),
    transition('off => on', animate(500)),
    transition('on => off', animate(500))
  ]),
  trigger('psScriptDeal', [
    state('off', style({
      transform: 'translateX(0px)'
    })),
    state('on', style({
      transform: 'translateX(-139px)'
    })),
    transition('off => on', animate(500)),
    transition('on => off', animate(500))
  ]),

  trigger('soScriptOn', [
    state('off', style({
      transform: 'translateX(0px)'
    })),
    state('on', style({
      transform: 'translateX( 139px)'
    })),
    transition('off => on', animate(500)),
    transition('on => off', animate(500))
  ]),
  trigger('soScriptMid', [
    state('off', style({
      transform: 'translateX(0px)'
    })),
    state('on', style({
      transform: 'translateX( 139px)'
    })),
    transition('off => on', animate(500)),
    transition('on => off', animate(500))
  ]),
  trigger('soScriptOff', [
    state('off', style({
      transform: 'translateX(0px)'
    })),
    state('on', style({
      transform: 'translateX( 139px)'
    })),
    transition('off => on', animate(500)),
    transition('on => off', animate(500))
  ]),
  trigger('soScriptDeal', [
    state('off', style({
      transform: 'translateX(0px)'
    })),
    state('on', style({
      transform: 'translateX( 139px)'
    })),
    transition('off => on', animate(500)),
    transition('on => off', animate(500))
  ]),

  trigger('tsScriptOn', [
    state('off', style({
      transform: 'translateX(0px)'
    })),
    state('on', style({
      transform: 'translateX( 139px)'
    })),
    transition('off => on', animate(500)),
    transition('on => off', animate(500))
  ]),
  trigger('tsScriptMid', [
    state('off', style({
      transform: 'translateX(0px)'
    })),
    state('on', style({
      transform: 'translateX( 139px)'
    })),
    transition('off => on', animate(500)),
    transition('on => off', animate(500))
  ]),
  trigger('tsScriptOff', [
    state('off', style({
      transform: 'translateX(0px)'
    })),
    state('on', style({
      transform: 'translateX( 139px)'
    })),
    transition('off => on', animate(500)),
    transition('on => off', animate(500))
  ]),
  trigger('tsScriptDeal', [
    state('off', style({
      transform: 'translateX(0px)'
    })),
    state('on', style({
      transform: 'translateX( 139px)'
    })),
    transition('off => on', animate(500)),
    transition('on => off', animate(500))
  ]),

  ]
})
export class WelcomeComponent implements OnInit, AfterContentInit {

  // [ ToDo ] - Switch queueUpdated to false after implementing some update functions for 
  // + reading from cloud spreadsheets or from a realtime db / Firestore
  queueUpdated: boolean = true;

  // Project and Service Update Arrays
  // 0 - not updated
  // number - updated - [ ToDo ] - set the number as the update time/int of the update
  prjUpdated = [0, 0, 0, 0, 0, 0, 0];
  srvUpdated = [0, 0, 0, 0, 0, 0, 0];

  // Project Owner Image Ids array for 7 ranks in the Interest Query Table (prj+srv)
  prjOwnerImgId = [101, 102, 103, 104, 105, 106, 107];
  // Service Owner Image Ids array for 7 ranks in the Interest Query Table (prj+srv)
  srvOwnerImgId = [101, 102, 103, 104, 105, 106, 107];

  // Project State Image code array for 7 ranks in the Interest Query Table (prj+srv)
  prjStateImgPath = 'url(/assets/img/dna/';
  prjStateImg = ['ntt', 'ntt', 'ntt', 'ntt', 'ntt', 'ntt', 'ntt'];
  // Service State Image code array for 7 ranks in the Interest Query Table (prj+srv)
  srvStateImgPath = 'url(/assets/img/rna/';
  srvStateImg = ['ntt', 'ntt', 'ntt', 'ntt', 'ntt', 'ntt', 'ntt'];

  // The domain of interests: e.g.: meetups, world, politics, business, math, programming, RPA, etc  
  domain: string = 'world';   // Should refer to world leaders, investors, technologists
  // [ ToDo ] - Arrange a domain filter/selection in the setup module

  // project prj and service ssrv index within an interest/tag pair
  // e.g. for one interest tag/link we could have 2 projects (prj=2) and 3 services (srv=3)
  // that are linked through that interest tag
  prj: number = 0;
  srv: number = 0; 
  // p and s - project and service indexes for going through the list of prj and srv of an interest lin/tag
  p: number = 0;
  s: number = 0;
  // project and service state for the manual/visual loop - 7 values 0-6 as the loop goes thought each p|s combinations
  // [ ToDo ] - change prj/srv_state to prj/srv_rank - to reflect the rank in the query loop/table
  prj_state: string = '0';
  srv_state: string = '0';

  // On / Off states for the regulatory and execution scripts
  // Project Owner governance scripts
  po_in_state: string = 'off';
  po_mid_state: string = 'off';
  po_out_state: string = 'off';
  po_deal_state: string = 'off';
  // Project Status execution scripts
  ps_in_state: string = 'off';
  ps_mid_state: string = 'off';
  ps_out_state: string = 'off';
  ps_deal_state: string = 'off';
  // Service Owner governance scripts
  so_in_state: string = 'off';
  so_mid_state: string = 'off';
  so_out_state: string = 'off';
  so_deal_state: string = 'off';
  // Task Status execution scripts
  ts_in_state: string = 'off';
  ts_mid_state: string = 'off';
  ts_out_state: string = 'off';
  ts_deal_state: string = 'off';


  // Governance and Execution steps vars for Projects and Services
  // Project ===========
  //    Governance ----- 'o' - owner
  po_script_in: string = '';
  po_script_mid: string = '';
  po_script_out: string = '';
  po_script_deal: string = '';
  //    Execution ------- 's' - state
  ps_script_in: string = '';
  ps_script_mid: string = '';
  ps_script_out: string = '';
  ps_script_deal: string = '';
  // Service ===========
  //    Governance -----  'o' - owner
  so_script_in: string = '';
  so_script_mid: string = '';
  so_script_out: string = '';
  so_script_deal: string = '';
  //    Execution ------- 't' - task; 's' - state
  ts_script_in: string = '';
  ts_script_mid: string = '';
  ts_script_out: string = '';
  ts_script_deal: string = '';


  // dev Governance and Execution steps vars for Projects and Services
  // Project ===========
  //    Governance ----- 'o' - owner
  po_script_in_dev: string = 'status';      // 'query service terms -> ';
  po_script_mid_dev: string = 'rate';       // 'process service terms <- ';
  po_script_out_dev: string = 'terms';      // 'send deal proposal -> ';
  po_script_deal_dev: string = 'book';      // 'confirm deal <-> ';
  //    Execution ------- 's' - state
  ps_script_in_dev: string = 'input';       // 'query service state -> ';
  ps_script_mid_dev: string = 'results';    // 'process service result <- ';
  ps_script_out_dev: string = 'tests';      // 'test progress -> ';
  ps_script_deal_dev: string = 'pay';      // 'book payment <-> ';
  // Service ===========
  //    Governance -----  'o' - owner
  so_script_in_dev: string = 'status'; // ' <- query project terms';
  so_script_mid_dev: string = 'rate'; // ' -> process project terms';
  so_script_out_dev: string = 'terms'; // ' <- send deal proposal';
  so_script_deal_dev: string = 'book'; // ' <-> confirm deal';
  //    Execution ------- 't' - task; 's' - state
  ts_script_in_dev: string = 'input'; // ' <- query project state';
  ts_script_mid_dev: string = 'results'; // ' -> process task';
  ts_script_out_dev: string = 'tests'; // ' <- update project';
  ts_script_deal_dev: string = 'pay'; // ' <-> book payment';



  // This tile array was a prep experiment for bot messaging / sonar animation over the social network matrix 
  tiles: Tile[] = [
    {text: '', cols: 1, rows: 1, color: ''},
    {text: '', cols: 1, rows: 1, color: ''},
    {text: '', cols: 1, rows: 1, color: '#ffcc33'},
    {text: '', cols: 1, rows: 1, color: ''},
    {text: '', cols: 1, rows: 1, color: ''},
    {text: '', cols: 1, rows: 1, color: ''},
    {text: '', cols: 1, rows: 1, color: ''},
    {text: '', cols: 1, rows: 1, color: ''},
    {text: '', cols: 1, rows: 1, color: ''},
    {text: '', cols: 1, rows: 1, color: ''},
    {text: '', cols: 1, rows: 1, color: ''},
    {text: '', cols: 1, rows: 1, color: ''},
    {text: '', cols: 1, rows: 1, color: ''},
    {text: '', cols: 1, rows: 1, color: ''},
    {text: '', cols: 1, rows: 1, color: ''},
    {text: '', cols: 1, rows: 1, color: ''},
    {text: '', cols: 1, rows: 1, color: ''},
    {text: '', cols: 1, rows: 1, color: ''},
    {text: '', cols: 1, rows: 1, color: ''},
    {text: '', cols: 1, rows: 1, color: ''},
    {text: '', cols: 1, rows: 1, color: ''},
    {text: '', cols: 1, rows: 1, color: ''},
    {text: '', cols: 1, rows: 1, color: ''},
    {text: '', cols: 1, rows: 1, color: ''},
    {text: '', cols: 1, rows: 1, color: ''},
    {text: '', cols: 1, rows: 1, color: ''},
    {text: '', cols: 1, rows: 1, color: ''}
  ];

  // iLead process/bot on the landing screen - manual = true
  manual = true;
  sprint = false;
  run = false;

  bot_red = 'rgba(238,153,147,1)';  // Bot red
  bot_yellow = 'rgba(254,203,69,1)';  // Bot yellow
  bot_blue = 'rgba(85,180,235,1)';  // Bot blue

  setup = 'manual'; // manual | sprint | run ;  previously it was manual | marathon | hackathon 

  // [ ToDo ] - Do we still need this section ?!
  aiSetup = 'Sprint';   // Marathon or Hackathon
  goalFCB = 'Fair Social Progress';  // initially was 'Family - Community - Business'
  goalMAX = 'Maximum Productivity';
  goal = this.goalFCB;

  isAuth$: Observable<boolean>;

  timer: number;
  interval: number = 4000;   // set initial interval timer 
  newInterval: number = 400;
  setupCycle: number = 1000;   // well use this setupCycle updated from the Setup page 
                              // to increase / decrease the time interval

  queue = q1.queue;

  tagsCounter: number;
  i: number = 0;            // interest/tags loop index
  linkId: number = 0;       // link index for the manual / visual pace/speed
  combInProgress: boolean = false;   // Combinations of Projects and Services for a link is in progress
  combNo: number = 0;       // # of projects x services combinations for a link tag
  c: number = 0;            // combinations index
  x: number = 0;            // index of combinations c - for looping through the combinations

  nrInterests = 7;  // 7 Default interests :-)

  // TODO - Build Account Setup page to setup like these

  superFriendsNo = 532134;
  superProjectsNo = 2344;
  superServicesNo = 3701;
  superTxPerMs = 1628;
  superRatePerMin = 9.07;

  officeFriendsNo = 5369;
  officeProjectsNo = 364;
  officeServicesNo = 734;
  officeTxPerMs = 156;
  officeRatePerMin = 0.89;

  realtime = false;

  // vars for spinner
  // 7 Tags / Links
  link1: string = '';
  link2: string = '';
  link3: string = '';
  link4: string = '';
  link5: string = '';
  link6: string = '';
  link7: string = '';
  // Nr Projects for Tag / Link
  pT1: number = 0;
  pT2: number = 0;
  pT3: number = 0;
  pT4: number = 0;
  pT5: number = 0;
  pT6: number = 0;
  pT7: number = 0;
  // Nr Services for Tag / Link
  sT1: number = 0;
  sT2: number = 0;
  sT3: number = 0;
  sT4: number = 0;
  sT5: number = 0;
  sT6: number = 0;
  sT7: number = 0;

  // vars To Read Project titles
  nProject1: string = '';
  nProject2: string = '';
  nProject3: string = '';
  nProject4: string = '';
  nProject5: string = '';
  nProject6: string = '';
  nProject7: string = '';
  // Country Flag / Code for Project
  pF1: string = '';
  pF2: string = '';
  pF3: string = '';
  pF4: string = '';
  pF5: string = '';
  pF6: string = '';
  pF7: string = '';
// vars to Read Project color status = g | r | y
  pStat1 = '';
  pStat2 = '';
  pStat3 = '';
  pStat4 = '';
  pStat5 = '';
  pStat6 = '';
  pStat7 = '';

  // Vars to store Service title
  nService1: string = '';
  nService2: string = '';
  nService3: string = '';
  nService4: string = '';
  nService5: string = '';
  nService6: string = '';
  nService7: string = '';
  // Country Flag / Code for Service
  sF1: string = '';
  sF2: string = '';
  sF3: string = '';
  sF4: string = '';
  sF5: string = '';
  sF6: string = '';
  sF7: string = '';
  // vars to Read Service color status = g | r | y - 
  sStat1 = '';
  sStat2 = '';
  sStat3 = '';
  sStat4 = '';
  sStat5 = '';
  sStat6 = '';
  sStat7 = '';

  // Arrays to store loop data from DNA Queue - declarations below are copied from the WorldMarket.gs file
  nrLinks: number;
  row: number = 0;
  shares: number = 10;        // During Dev - for simulation of shares / votes on projects / services

  tag: any[] = [];
  problems: any[] = [];
  pFlags: any[] = [];         // Array with Country codes for Problems - country of owner for taxation, compliance, etc
  pStats: any[] = [];         // Array to store status of the Projects
  services: any[] = [];
  sFlags: any[] = [];         // Array with Country codes for Services - country of owner
  sStats: any[] = [];         // Array to store status of the Services
  // 15 - TODO - [ ] - add top header line to the matrix? including the nrProblems and Services
  nrProblems = 134;           // some default values for dev
  nrServices = 137;            // some default values for dev
  // 24 
  spikes = 7;     // Nr rows in the market wheel in the W3AI sheet - here called spikes
  // 28
  row0 = 0;       // to keep some similarity / compatibility with the gs code

  startDnaLoop() {
    this.timer = setInterval( ()=> {
      this.dnaLoop();
    }, this.interval );
  }

  // To loop through all the Projects and Services in the Interests loop/list table
  dnaLoop() {

    this.updateLoopTable();

    this.i++;   // increment the index of the DNA Queue - Circular List

    /* If pace set to manual alternate project state between new and transition 
    loop index i is now extended to include for each link/tag 
    the number of projects or services or combinations p x s 
    that need to be diplayed in the manual set */
    if (this.setup === 'manual') {

      // Keep the circular list / queue fixed during the combinatorial (prj - srv) process
      this.i--;

      // update link index
      this.linkId = (this.i) % this.nrLinks;   // [ ToDo ] - This should happen only once when entering the manual state
      // - after l is set i will continue to increment and provide a tick for changes
      // but l (link id) and x - id of pxs combinations will determine the manual visualization state 

      // get the nr of projects and services from the interest tags table
      // [ ToDo ] - Explain why - 13 = (7 + 7) - 1; 7 = prj & srv stack depth   
      this.prj = this.tag[this.linkId][1];
      this.srv = this.tag[this.linkId][2];

      // set the number of combinations combNo we have to loop through for a link/tag
      if (!this.combInProgress) {

        if ( (this.prj > 0) && (this.srv > 0) ) {
          this.combNo = this.prj * this.srv;
        } else {
          if (this.prj > 0) {
            this.combNo = this.prj;
          } else {
            this.combNo = this.srv;
          }
        }

        // To ensure the setting is done only once at the begining
        // of the combinatorial loop
        this.combInProgress = true;

        // initialize combinations index c, project index p and service index s
        this.c = 0;
        this.p = 0;
        this.s = 0;

        // prj and srv _state should be changed to "rank"
        this.prj_state = '0';
        this.srv_state = '0';

        // Initialize Projects Updated arrays
        for ( let rank = 0; rank < this.prjUpdated.length; rank++) {
          this.prjUpdated[rank] = 0;  // 0 - not updated
          // [ ToDo ] - change 201 below dynamically based on demo / dev settings
          this.prjOwnerImgId[rank] = Math.floor(201 + 100 * Math.random());
        }

        // Initialize Services Updated array
        for ( let rank = 0; rank < this.srvUpdated.length; rank++) {
          this.srvUpdated[rank] = 0;  // 0 - not updated
          // [ ToDo ] - change 201 below dynamically based on demo / dev settings
          this.srvOwnerImgId[rank] = Math.floor(201 + 100 * Math.random());
        }

      }

      // The loop for combaining pairs of related (project, service) 
      while ( this.c <= this.combNo && this.combInProgress == true) {

        // Increment the index of combinations
        // here or at the end of the while ???
        this.c++;

        if ( this.c == this.combNo ) {
          // all combinations of projects and services are done
          this.combInProgress = false;
          // Return prj and srv stacks to initial state
          this.prj_state = '0';
          this.srv_state = '0';
          // advance the circular list/ queue
          this.i++;
          break;
        }

        if ( this.srv == 0 ) {
          this.s = 0;
          this.p++;
          this.prj_state = this.p.toString();
          this.srv_state = this.s.toString();
          break;
        } 

        if ( this.prj == 0 ) {
          this.p = 0;
          this.s++;
          this.prj_state = this.p.toString();
          this.srv_state = this.s.toString();
          break;
        }


        // if prjNo and srvNo > 0
        this.s = this.c % this.srv;
        this.p = Math.floor(this.c / this.srv);

        this.prj_state = this.p.toString();
        this.srv_state = this.s.toString();

        break;

      }

      // [ ToDo ] - If (s=p=1/demo or prj[p] && srv[s] include dna/js scripts ) Here to insert the function/call to
      // 1 - switch the set interval to a slower human readable pace
      // 2 - progress through the 8/16/32... steps of Governance and Execution for Projects and Services
      // 3 - switch back to the  
      if ((this.p < 1) && (this.s < 1)) {

        // Regulatory Project Owner scripts Start
        this.po_script_in = this.po_script_in_dev;
        this.po_in_state = 'on'; // [ ToDo ] - Add function call to run po_script_in
        this.po_script_mid = this.po_script_mid_dev;
        // this.po_mid_state = 'on'; // [ ToDo ] - Add function call to run po_script_mid
        this.po_script_out = this.po_script_out_dev;
        // this.po_out_state = 'on'; // [ ToDo ] - Add function call to run po_script_out
        this.po_script_deal = this.po_script_deal_dev;
        // this.po_deal_state = 'on'; // [ ToDo ] - Add function call to run po_script_deal

        // Executive Project Status scripts Start
        this.ps_script_in = this.ps_script_in_dev;
        this.ps_script_mid = this.ps_script_mid_dev;
        this.ps_script_out = this.ps_script_out_dev;
        this.ps_script_deal = this.ps_script_deal_dev;

        // Regulatory Service Owner scripts Start
        this.so_script_in = this.so_script_in_dev;
        this.so_in_state = 'on'; // [ ToDo ] - Add function call to run so_script_in
        this.so_script_mid = this.so_script_mid_dev;
        this.so_script_out = this.so_script_out_dev;
        this.so_script_deal = this.so_script_deal_dev;

        // Execute Task Status scripts Start
        this.ts_script_in = this.ts_script_in_dev;
        this.ts_script_mid = this.ts_script_mid_dev;
        this.ts_script_out = this.ts_script_out_dev;
        this.ts_script_deal = this.ts_script_deal_dev;

      } else {

        // Regulatory Project Owner scripts Done
        this.po_script_in = '';
        this.po_script_mid = '';
        this.po_script_out = '';
        this.po_script_deal = '';

        // Executive Project Status scripts Done
        this.ps_script_in = '';
        this.ps_script_mid = '';
        this.ps_script_out = '';
        this.ps_script_deal = '';

        // Regulatory Service Owner scripts Done
        this.so_script_in = '';
        this.so_script_mid = '';
        this.so_script_out = '';
        this.so_script_deal = '';

        // Execute Task Status scripts Done
        this.ts_script_in = '';
        this.ts_script_mid = '';
        this.ts_script_out = '';
        this.ts_script_deal = '';
      }

      // [ ToDo ] - Update Queue with the latest Interest tags, Projects (interests) and Services (interests)
      // if ( !this.queueUpdated ) {
      // [ ToDo ] - Update queue function
      //  this.queueUpdated = true; 
      //}

      // [ ToDo ] - Add some ToDo Projects to the initial Queue as examples of fun coding projects
      // to serve also as invite during demos to join the fun OS dev


      // [ ToDo !!! ] - Implement and populate a Link/Tag stack contaning all combinations of Projects and Services for the Link

      // Loop through the Link combinatorics Stack and pass each pair of ( Prj, Srv) through a visualization function
      // for top/bottom (or in/out) projects and services with increased z-index for animating ins and outs

    }   // END of If 'manual' now called 'fair' - for vizualization of combinations

    this.row = (this.i+2)%this.nrLinks; // calculate the row in the queue array to display in the manual table
    this.shares = 10 + Math.floor(Math.random() * Math.floor(1000))
    this.w3aiStats();
  }

  // Continuation callbacks for Project Owner / Governance
  animPoInDone() {
    this.po_script_in = 'status ✔';
    this.po_in_state = 'off';
    this.po_mid_state = 'on';
    this.prjStateImgPath = 'url(/assets/img/dna/';
    this.prjStateImg[0] = 'gtt';
  }
  animPoMidDone() {
    this.po_script_mid = 'rate ✔';
    this.po_mid_state = 'off';
    this.po_out_state = 'on';
    this.prjStateImg[0] = 'gnt';
  }
  animPoOutDone() {
    this.po_script_out = 'terms ✔';
    this.po_out_state = 'off';
    this.po_deal_state = 'on';
    this.prjStateImg[0] = 'ggn';
  }
  animPoDealDone() {
    this.po_script_deal = 'booked ✔';
    this.po_deal_state = 'off';
    this.ps_in_state = 'on';    // 'on' - if there is a deal to plan execution
    this.prjStateImg[0] = 'ggg';
  }
  // Continuation callbacks for Project Status / Execution
  animPsInDone() {
    this.ps_script_in = 'input ✔';
    this.ps_in_state = 'off';
    this.ps_mid_state = 'on';
    this.prjStateImgPath = 'url(/assets/img/dna/';
    this.prjStateImg[0] = 'tgt_ttg_tnt';
  }
  animPsMidDone() {
    this.ps_script_mid = 'results ✔';
    this.ps_mid_state = 'off';
    this.ps_out_state = 'on';
    this.prjStateImg[0] = 'ttg_tgt_ntt';
  }
  animPsOutDone() {
    this.ps_script_out = 'tests ✔';
    this.ps_out_state = 'off';
    this.ps_deal_state = 'on';
    this.prjStateImg[0] = 'tgt_gtt_ttt';
  }
  animPsDealDone() {
    this.ps_script_deal = 'paid ✔';
    this.ps_deal_state = 'off';
    // Task was executed and Project Manager to schedule/approve payment
    this.prjStateImg[0] = 'ntt';
  }

  // Continuation callbacks for Service Owner / Governance
  animSoInDone() {
    this.so_script_in = '✔ status';
    this.so_in_state = 'off';
    this.so_mid_state = 'on';
    this.srvStateImgPath = 'url(/assets/img/rna/';
    this.srvStateImg[0] = 'gtt';
  }
  animSoMidDone() {
    this.so_script_mid = '✔ rate';
    this.so_mid_state = 'off';
    this.so_out_state = 'on';
    this.srvStateImg[0] = 'gnt';
  }
  animSoOutDone() {
    this.so_script_out = '✔ terms';
    this.so_out_state = 'off';
    this.so_deal_state = 'on';
    this.srvStateImg[0] = 'ggn';
  }
  animSoDealDone() {
    this.so_script_deal = '✔ booked';
    this.so_deal_state = 'off';
    this.ts_in_state = 'on';    // 'on' - if there is a deal to plan task execution
    this.srvStateImg[0] = 'ggg';
  }
  // Continuation callbacks for Task Status / Execution
  animTsInDone() {
    this.ts_script_in = '✔ input';
    this.ts_in_state = 'off';
    this.ts_mid_state = 'on';
    this.srvStateImgPath = 'url(/assets/img/rna/';
    this.srvStateImg[0] = 'tgt_ttg_tnt';
  }
  animTsMidDone() {
    this.ts_script_mid = '✔ results';
    this.ts_mid_state = 'off';
    this.ts_out_state = 'on';
    this.srvStateImg[0] = 'ttg_tgt_ntt';
  }
  animTsOutDone() {
    this.ts_script_out = '✔ tests';
    this.ts_out_state = 'off';
    this.ts_deal_state = 'on';
    this.srvStateImg[0] = 'tgt_gtt_ttt';
  }
  animTsDealDone() {
    this.ts_script_deal = '✔ paid';
    this.ts_deal_state = 'off';
    this.srvStateImg[0] = 'gtt';
    // Task was executed and Project Manager to schedule/approve payment
  }

  getStatusButtonManual() {
    return this.setup === 'manual' ? this.bot_red : 'whitesmoke';
  }

  getStatusButtonMarathon() {
    return this.setup === 'sprint' ? this.bot_yellow : 'whitesmoke';
  }

  getStatusButtonHackathon() {
    return this.setup === 'run' ? this.bot_blue : 'whitesmoke';
  }

  onSetManual(newCycle: number) {
    clearInterval(this.timer);
    this.setup = 'manual';
    this.manual = true;   // To switch on the Project/Service side by side View
    this.sprint = false;
    this.run = false;
    // Line below is just to offer a bit of feedback onSetCycle change
    this.interval = newCycle;
    this.prj_state = '0';  // project container is visible
    this.srv_state = '0';  // service container is visible
    this.startDnaLoop();
  }

  onSetSprint(newCycle: number) {
    clearInterval(this.timer);
    this.setup = 'sprint';
    this.aiSetup = 'Run';
    this.goal = this.goalMAX; // MAXIMUM PRODUCTIVITY
    this.manual = false;   // To switch OFF the Project/Service side by side View
    this.sprint = true;
    this.run = false;
    // Line below is just to offer a bit of feedback onSetCycle change
    this.interval = newCycle;
    this.startDnaLoop();
  }

  onSetRun(newCycle: number) {
    clearInterval(this.timer);
    this.setup = 'run';
    this.aiSetup = 'Sprint';
    this.goal = this.goalFCB; // Initially was FCB for Family - Community - Business
    this.manual = false;   // To switch OFF the Project/Service side by side View
    this.sprint = false;
    this.run = true;
    // Line below is just to offer a bit of feedback onSetCycle change
    this.interval = newCycle;
    this.startDnaLoop();
  }

  constructor(private store: Store<fromRoot.State>, private authService: AuthService, 
    private sanitizer: DomSanitizer) {

    // To detach ChangeDetector in order to eliminate ExpressionChangedAfterItHasBeenCheckedError
    //  as we loop through projects / services continually and change the background images
    // this.cdRef.detach();

    this.readQueueV1IntoLoopArrays();
    // this.readQueueIntoLoopArrays();    the reader for first version of the Queue

    // this.timer = setInterval( ()=> {

    //   this.dnaLoop();

    //   // [ ToDo ] - To remove these commented parts
    //   // To update the spreadshhet table view for Sprint peed setup >>
    //   // this.updateLoopTable();
    //   //
    //   // Move to next tag / link in the queue
    //   // this.i++;
    //   //
    //   // Stats for the Run setup >>>
    //   // this.w3aiStats();

    //   // Move world map to simulate rotation / speed / progress
    //   this.setSlowWorldMove();
    //   this.setProgressSpeed();

    // }, this.interval );

  }

  readQueueV1IntoLoopArrays() {
    // Nov 2, 2018 - TODO - [ ] - this function will need to update the arrays whenever the Queue is updated Realtime by Firestore
    // Translating gs code from function intlTeams() from WorldMarket.gs / W3AI spreadsheet / @W3AI.net 
    // 14 - Starting from line 14 - skipping the gs files initializations
    this.nrLinks = q1.queue.length;
    this.nrInterests = this.nrLinks;
    // console.log('-- Queue Length: ' + nrLinks);

    // TODO - [ ] - to review and change vars declarations below that are copied from the WorldMarket.gs file
    // 34 -  Define and load the tags array[][] / [tag, nr problems/tag, nr services/tag]
    // let tag = new Array(nrLinks);
    // let problems = new Array(nrLinks);
    // let pFlags = new Array(nrLinks);   // Array with Country codes for Problems
    // var services = new Array(nrLinks);
    // var sFlags = new Array(nrLinks);   // Array with Country codes for Services

    // 41 - 3 is removed now - The 3 in Rows (3 + t) is the header offset - the tags/links start from line/row 3 - Jun 10, 2018
    // Nov 2, 2018 - switched to V1 of the Queue array with 36 fields per Project, Service as in Spreadsheet 3AI-Queue V1       
    for (let t = 0; t < this.nrLinks; t++) {

      this.tag[t] = new Array(6); // to write 5 values 
      this.tag[t][0] = q1.queue[t][0]; // Read into tag[] the link value from Column 1 / A
      this.tag[t][1] = q1.queue[t][2]; // Read into tag[] the nr projects/problems/tag value from Column 3 / C
      this.tag[t][2] = q1.queue[t][255]; // Read into tag[] the nr services/tag value from Column 18 / R
      // Added on Nov 2, 2018 
      // tag[t][3] to store Total Bids (Projects) per tag
      this.tag[t][3] = 0;
      // tag[t][3] to store Total Asks (Services) per tag
      this.tag[t][4] = 0;
      this.tag[t][5] = 0; // To store the Market Delta (Sum(Bids)-Sum(Asks)) for the Tag

      // Populating the Projects Arrays
      this.problems[t] = new Array(this.tag[t][1]);
      this.pFlags[t] = new Array(this.tag[t][1]);
      this.pStats[t] = new Array(this.tag[t][1]);
      for (let p = 0; p < this.tag[t][1]; p++) {
        this.problems[t][p] = q1.queue[t][3 + p*36]; // Problems Titles start in col 3 then + p*36 - 36=nr fields in Queue V1
        this.pFlags[t][p] = q1.queue[t][4 + p*36];   // Problems' Flags start in col 4 / D
        this.pStats[t][p] = q1.queue[t][7 + p*36];    // Project Status is in col 7
        this.tag[t][3] += q1.queue[t][8 + p*36];     // Problems' Bids start in col 8 / I
      }

      // Populating the Services Arrays
      this.services[t] = new Array(this.tag[t][2]);
      this.sFlags[t] = new Array(this.tag[t][2]);
      this.sStats[t] = new Array(this.tag[t][2]);
      for (let s = 0; s < this.tag[t][2]; s++) {
        this.services[t][s] = q1.queue[t][256 + s*36]; // Services start in col 256 
        this.sFlags[t][s] = q1.queue[t][257 + s*36];   // Services' Flags start in col 257
        this.sStats[t][s] = q1.queue[t][260 + s*36];    // Service Status is in col 260
        this.tag[t][4] += q1.queue[t][261 + s*36];     // Services' Bids start in col 8 / I
      }

      // Calculate the Market Delta
      this.tag[t][5] = this.tag[t][3] - this.tag[t][4];

    } // End loading the arrays for Tags, Problems, Services and Flags for Problems and services
  }

  readQueueIntoLoopArrays() {
    // Translating gs code from function intlTeams() from WorldMarket.gs / W3AI spreadsheet / @W3AI.net 
    // 14 - Starting from line 14 - skipping the gs files initializations
    this.nrLinks = q.queue.length;
    this.nrInterests = this.nrLinks;
    // console.log('-- Queue Length: ' + nrLinks);

    // TODO - [ ] - to review and change vars declarations below that are copied from the WorldMarket.gs file
    // 34 -  Define and load the tags array[][] / [tag, nr problems/tag, nr services/tag]
    // let tag = new Array(nrLinks);
    // let problems = new Array(nrLinks);
    // let pFlags = new Array(nrLinks);   // Array with Country codes for Problems
    // var services = new Array(nrLinks);
    // var sFlags = new Array(nrLinks);   // Array with Country codes for Services

    // 41 - 3 is removed now - The 3 in Rows (3 + t) is the header offset - the tags/links start from line/row 3 - Jun 10, 2018       
    for (let t = 0; t < this.nrLinks; t++) {

      this.tag[t] = new Array(3); // to write 3 values 
      this.tag[t][0] = q.queue[t][0]; // Read into tag[] the link value from Column 1 / A
      this.tag[t][1] = q.queue[t][2]; // Read into tag[] the nr problems/tag value from Column 3 / C
      this.tag[t][2] = q.queue[t][17]; // Read into tag[] the nr services/tag value from Column 18 / R

      // Jun 13 SI: I just added 7 columns for countries of the originator of each problem and service 
      this.problems[t] = new Array(this.tag[t][1]);
      this.pFlags[t] = new Array(this.tag[t][1]);
      for (let p = 0; p < this.tag[t][1]; p++) {
        this.problems[t][p] = q.queue[t][10 + p]; // demand.getRange(t, 11 + p).getValue(); // Problems Titles start in col 11 / K
        this.pFlags[t][p] = q.queue[t][3 + p];   // demand.getRange(t, 4 + p).getValue(); // Problems' Flags start in col 4 / D
      }

      this.services[t] = new Array(this.tag[t][2]);
      this.sFlags[t] = new Array(this.tag[t][2]);
      for (let s = 0; s < this.tag[t][2]; s++) {
        this.services[t][s] = q.queue[t][25 + s]; // demand.getRange(t, 26 + s).getValue();  // Services start in col 26 / Z
        this.sFlags[t][s] = q.queue[t][18 + s]; // demand.getRange(t, 19 + p).getValue(); // Problems' Flags start in col 19 / S
      }
    } // End loading the arrays for Tags, Problems, Services and Flags for Problems and services
  }

  updateLoopTable() {
    // Write the loop's 7 tags
    this.link1 = this.tag[(this.i + 0) % this.nrLinks][0];
    this.link2 = this.tag[(this.i + 1) % this.nrLinks][0];
    this.link3 = this.tag[(this.i + 2) % this.nrLinks][0];
    this.link4 = this.tag[(this.i + 3) % this.nrLinks][0];
    this.link5 = this.tag[(this.i + 4) % this.nrLinks][0];
    this.link6 = this.tag[(this.i + 5) % this.nrLinks][0];
    this.link7 = this.tag[(this.i + 6) % this.nrLinks][0];
    // Write the nr of Projects with the tag
    this.pT1 = this.tag[(this.i + 0) % this.nrLinks][1];
    this.pT2 = this.tag[(this.i + 1) % this.nrLinks][1];
    this.pT3 = this.tag[(this.i + 2) % this.nrLinks][1];
    this.pT4 = this.tag[(this.i + 3) % this.nrLinks][1];
    this.pT5 = this.tag[(this.i + 4) % this.nrLinks][1];
    this.pT6 = this.tag[(this.i + 5) % this.nrLinks][1];
    this.pT7 = this.tag[(this.i + 6) % this.nrLinks][1];
    // Write the nr of Services with the tag
    this.sT1 = this.tag[(this.i + 0) % this.nrLinks][2];
    this.sT2 = this.tag[(this.i + 1) % this.nrLinks][2];
    this.sT3 = this.tag[(this.i + 2) % this.nrLinks][2];
    this.sT4 = this.tag[(this.i + 3) % this.nrLinks][2];
    this.sT5 = this.tag[(this.i + 4) % this.nrLinks][2];
    this.sT6 = this.tag[(this.i + 5) % this.nrLinks][2];
    this.sT7 = this.tag[(this.i + 6) % this.nrLinks][2];

    // Write the Titles of the Projects associated with the mid Tag / Link - nr 4
    this.nProject1 = this.problems[(this.i + 3) % this.nrLinks][0];
    this.nProject2 = this.problems[(this.i + 3) % this.nrLinks][1];
    this.nProject3 = this.problems[(this.i + 3) % this.nrLinks][2];
    this.nProject4 = this.problems[(this.i + 3) % this.nrLinks][3];
    this.nProject5 = this.problems[(this.i + 3) % this.nrLinks][4];
    this.nProject6 = this.problems[(this.i + 3) % this.nrLinks][5];
    this.nProject7 = this.problems[(this.i + 3) % this.nrLinks][6];
    // Show Country code for each Project associated to tag 3
    this.pF1 = this.pFlags[(this.i + 3) % this.nrLinks][0];
    this.pF2 = this.pFlags[(this.i + 3) % this.nrLinks][1];
    this.pF3 = this.pFlags[(this.i + 3) % this.nrLinks][2];
    this.pF4 = this.pFlags[(this.i + 3) % this.nrLinks][3];
    this.pF5 = this.pFlags[(this.i + 3) % this.nrLinks][4];
    this.pF6 = this.pFlags[(this.i + 3) % this.nrLinks][5];
    this.pF7 = this.pFlags[(this.i + 3) % this.nrLinks][6];
    // Show Status for each Project associated to tag 3
    this.pStat1 = this.pStats[(this.i + 3) % this.nrLinks][0];
    this.pStat2 = this.pStats[(this.i + 3) % this.nrLinks][1];
    this.pStat3 = this.pStats[(this.i + 3) % this.nrLinks][2];
    this.pStat4 = this.pStats[(this.i + 3) % this.nrLinks][3];
    this.pStat5 = this.pStats[(this.i + 3) % this.nrLinks][4];
    this.pStat6 = this.pStats[(this.i + 3) % this.nrLinks][5];
    this.pStat7 = this.pStats[(this.i + 3) % this.nrLinks][6];

    // Write the Titles of the Services associated with the mid Tag / Link - nr 4
    this.nService1 = this.services[(this.i + 3) % this.nrLinks][0];
    this.nService2 = this.services[(this.i + 3) % this.nrLinks][1];
    this.nService3 = this.services[(this.i + 3) % this.nrLinks][2];
    this.nService4 = this.services[(this.i + 3) % this.nrLinks][3];
    this.nService5 = this.services[(this.i + 3) % this.nrLinks][4];
    this.nService6 = this.services[(this.i + 3) % this.nrLinks][5];
    this.nService7 = this.services[(this.i + 3) % this.nrLinks][6];
    // Show Country code for each Service associated to tag 3
    this.sF1 = this.sFlags[(this.i + 3) % this.nrLinks][0];
    this.sF2 = this.sFlags[(this.i + 3) % this.nrLinks][1];
    this.sF3 = this.sFlags[(this.i + 3) % this.nrLinks][2];
    this.sF4 = this.sFlags[(this.i + 3) % this.nrLinks][3];
    this.sF5 = this.sFlags[(this.i + 3) % this.nrLinks][4];
    this.sF6 = this.sFlags[(this.i + 3) % this.nrLinks][5];
    this.sF7 = this.sFlags[(this.i + 3) % this.nrLinks][6];
    // Show Status for each Service associated to tag 3
    this.sStat1 = this.sStats[(this.i + 3) % this.nrLinks][0];
    this.sStat2 = this.sStats[(this.i + 3) % this.nrLinks][1];
    this.sStat3 = this.sStats[(this.i + 3) % this.nrLinks][2];
    this.sStat4 = this.sStats[(this.i + 3) % this.nrLinks][3];
    this.sStat5 = this.sStats[(this.i + 3) % this.nrLinks][4];
    this.sStat6 = this.sStats[(this.i + 3) % this.nrLinks][5];
    this.sStat7 = this.sStats[(this.i + 3) % this.nrLinks][6];

    this.nrProblems = this.nrProblems + Math.floor(Math.random() * Math.floor(3))
      - Math.floor(Math.random() * Math.floor(2));
    this.nrServices = this.nrServices + Math.floor(Math.random() * Math.floor(3))
      - Math.floor(Math.random() * Math.floor(2));

  } // END function updateLoopTable()

  onPrev() {
    this.i--;
  }

  onNext() {
    this.i++;
  }

  w3aiStats() {
    // Super Neural Net Teams
    this.superFriendsNo = this.superFriendsNo + Math.floor(Math.random() * Math.floor(4))
      - Math.floor(Math.random() * Math.floor(2));
    this.superProjectsNo = this.superProjectsNo + Math.floor(Math.random() * Math.floor(3))
      - Math.floor(Math.random() * Math.floor(2));
    this.superServicesNo = this.superServicesNo + Math.floor(Math.random() * Math.floor(5))
      - Math.floor(Math.random() * Math.floor(2));
    this.superTxPerMs = this.superTxPerMs + Math.floor(Math.random() * Math.floor(3))
      - Math.floor(Math.random() * Math.floor(2));
    this.superRatePerMin = this.superRatePerMin + (Math.floor(Math.random() * Math.floor(3))
      - Math.floor(Math.random() * Math.floor(2))) / 100;

    // Office Teams
    this.officeFriendsNo = this.officeFriendsNo + Math.floor(Math.random() * Math.floor(2))
      - Math.floor(Math.random() * Math.floor(2));
    this.officeProjectsNo = this.officeProjectsNo + Math.floor(Math.random() * Math.floor(2))
      - Math.floor(Math.random() * Math.floor(2));
    this.officeServicesNo = this.officeServicesNo + Math.floor(Math.random() * Math.floor(2))
      - Math.floor(Math.random() * Math.floor(2));
    this.officeTxPerMs = this.officeTxPerMs + Math.floor(Math.random() * Math.floor(2))
      - Math.floor(Math.random() * Math.floor(2));
    this.officeRatePerMin = this.officeRatePerMin + (Math.floor(Math.random() * Math.floor(2))
      - Math.floor(Math.random() * Math.floor(2))) / 100;

  }

  // To scroll the Slow World background banner World-120.png
  setSlowWorldMove() {
    let positionX = 0;
    return positionX + 0.3 * this.i;
  }

    // To scroll the Faster World background banner World-120.png
    setProgressSpeed() {
      let positionX = 0;
      return positionX + 3 * this.i;
    }

  // Dynamic Styling functions
  getDeltaColor() {
    return this.tag[(this.i+2)%this.nrLinks][5]> 0 ? 'green' : 'red';
  }

  // Dynamic Project Owner images
  // rank: 1 - 7 ; id: row index from Queue/List ;
  // [ ToDo ] - code the real function to read from projects table not get random images
  setPrjOwnerImage(rank: number, id: number) {

    let imagePath = '';
    let devId = 0;
    let devIdString = '';

    if ( this.prjUpdated[rank] >= 0 ) {

      // Set as updated with the time of the update
      this.prjUpdated[rank] = Date.now();

      // Update the image
      switch (this.domain) {

        // A dev & show mode based on news on Projects/Services of
        case 'world' :  
  
          // 100px folder for World leaders Mar 2019
          imagePath = 'url(/assets/img/100-leaders/';
          devId = 0;
          devIdString = '';
  
          // Random nr from 201 to 300
          devId = this.prjOwnerImgId[rank];
          devIdString = devId.toString();
          imagePath += devIdString;
          imagePath += '.png)';
          break;
  
        // also a development mode with innovators from meetups
        case 'meetups' : 
          
          imagePath = 'url(/assets/img/innovators/innovator-190219';
          devId = 0;
          devIdString = '';
  
          devId = Math.floor(rank + id + 100 * Math.random());
          if (devId < 10 ) {
            devIdString = '00' + devId.toString();        
          } else if ( devId < 100 ) {
            devIdString = '0' + devId.toString();
          } else {
            devIdString = devId.toString();
          }
          imagePath += devIdString;
          imagePath += '.jpeg)';
          break;
  
        default: 
          imagePath += '000';   // [ ToDo ] - Set lower number images '000' for self Projects / Opportunities !!!
      }  

    }

    return imagePath;
  }

  // Dynamic Project State images
  // rank: 1 - 7 ; ? id: row index from Queue/List ;
  // [ ToDo ] - code the real function to read from projects table not get random images
  setPrjStateImage(rank: number) {
    let statusImgPath = this.prjStateImgPath;
    statusImgPath += this.prjStateImg[rank];
    statusImgPath += '.png)';
    return statusImgPath;
  }

  // Dynamic Service Owner images
  // rank: 1 - 7 ; id: row index from Queue/List ;
  // [ ToDo ] - code the real function to read from projects table not get random images
  setSrvOwnerImage(rank: number, id: number) {

    let imagePath = '';
    let devId = 0;
    let devIdString = '';

    if ( this.srvUpdated[rank] >= 0 ) {

      // Set as updated with the time of the update
      this.srvUpdated[rank] = Date.now();

      // Update the image
      switch (this.domain) {

        // A dev & show mode based on news on Projects/Services of
        case 'world' :  
  
          // 100px folder for World leaders Mar 2019
          imagePath = 'url(/assets/img/100-leaders/';
          devId = 0;
          devIdString = '';
  
          // Random nr from 201 to 300
          devId = this.srvOwnerImgId[rank];
          devIdString = devId.toString();
          imagePath += devIdString;
          imagePath += '.png)';
          break;
  
        // also a development mode with innovators from meetups
        case 'meetups' : 
          
          imagePath = 'url(/assets/img/innovators/innovator-190219';
          devId = 0;
          devIdString = '';
  
          devId = Math.floor(rank + id + 100 * Math.random());
          if (devId < 10 ) {
            devIdString = '00' + devId.toString();        
          } else if ( devId < 100 ) {
            devIdString = '0' + devId.toString();
          } else {
            devIdString = devId.toString();
          }
          imagePath += devIdString;
          imagePath += '.jpeg)';
          break;
  
        default: 
          imagePath += '000';   // [ ToDo ] - Set lower number images '000' for self Projects / Opportunities !!!
      }  

    }

    return imagePath;
  }

  // Dynamic Service State images
  // rank: 1 - 7 ; ? id: row index from Queue/List ;
  // [ ToDo ] - code the real function to read from projects table not get random images
  setSrvStateImage(rank: number) {
    let statusImgPath = this.srvStateImgPath;
    statusImgPath += this.srvStateImg[rank];
    statusImgPath += '.png)';
    return statusImgPath;
  }


  getPrjFlag1() {
    let flagPath = 'url(/assets/flags/';
    if ( this.pF1 && (this.pF1 != '')) {
      flagPath += this.pF1 + '.png)';
    } else {
      flagPath = 'url(/assets/flags/bg.png)';
    }
    return flagPath;
  }
  getPrjFlag2() {
    let flagPath = 'url(/assets/flags/';
    if ( this.pF2  && (this.pF2 != '')) {
      flagPath += this.pF2 + '.png)';
    } else {
      flagPath = 'url(/assets/flags/bg.png)';
    }
    return flagPath;
  }
  getPrjFlag3() {
    let flagPath = 'url(/assets/flags/';
    if ( this.pF3 && (this.pF3 != '' )) {
      flagPath += this.pF3 + '.png)';
    } else {
      flagPath = 'url(/assets/flags/bg.png)';
    }
    return flagPath;
  }
  getPrjFlag4() {
    let flagPath = 'url(/assets/flags/';
    if ( this.pF4 && (this.pF4 != '' )) {
      flagPath += this.pF4 + '.png)';
    } else {
      flagPath = 'url(/assets/flags/bg.png)';
    }
    return flagPath;
  }
  getPrjFlag5() {
    let flagPath = 'url(/assets/flags/';
    if ( this.pF5 && (this.pF5 != '' ) ) {
      flagPath += this.pF5 + '.png)';
    } else {
      flagPath = 'url(/assets/flags/bg.png)';
    }
    return flagPath;
  }
  getPrjFlag6() {
    let flagPath = 'url(/assets/flags/';
    if ( this.pF6 && (this.pF6 != '' ) ) {
      flagPath += this.pF6 + '.png)';
    } else {
      flagPath = 'url(/assets/flags/bg.png)';
    }
    return flagPath;
  }
  getPrjFlag7() {
    let flagPath = 'url(/assets/flags/';
    if ( this.pF7 && (this.pF7 != '' ) ) {
      flagPath += this.pF7 + '.png)';
    } else {
      flagPath = 'url(/assets/flags/bg.png)';
    }
    return flagPath;
  }
  // 7 functions to Get Projects status
  getPrjStat1() {
    let statPath = 'url(/assets/img/s';
    if ( this.pStat1 && (this.pStat1 != '' ) ) {
      statPath += this.pStat1 + '.png)';
    } else {
      statPath = 'url(/assets/img/sbg.png)';
    }
    return statPath;
  }
  getPrjStat2() {
    let statPath = 'url(/assets/img/s';
    if ( this.pStat2 && (this.pStat2 != '' ) ) {
      statPath += this.pStat2 + '.png)';
    } else {
      statPath = 'url(/assets/img/sbg.png)';
    }
    return statPath;
  }
  getPrjStat3() {
    let statPath = 'url(/assets/img/s';
    if ( this.pStat3 && (this.pStat3 != '' ) ) {
      statPath += this.pStat3 + '.png)';
    } else {
      statPath = 'url(/assets/img/sbg.png)';
    }
    return statPath;
  }
  getPrjStat4() {
    let statPath = 'url(/assets/img/s';
    if ( this.pStat4 && (this.pStat4 != '' ) ) {
      statPath += this.pStat4 + '.png)';
    } else {
      statPath = 'url(/assets/img/sbg.png)';
    }
    return statPath;
  }
  getPrjStat5() {
    let statPath = 'url(/assets/img/s';
    if ( this.pStat5 && (this.pStat5 != '' ) ) {
      statPath += this.pStat5 + '.png)';
    } else {
      statPath = 'url(/assets/img/sbg.png)';
    }
    return statPath;
  }
  getPrjStat6() {
    let statPath = 'url(/assets/img/s';
    if ( this.pStat6 && (this.pStat6 != '' ) ) {
      statPath += this.pStat6 + '.png)';
    } else {
      statPath = 'url(/assets/img/sbg.png)';
    }
    return statPath;
  }
  getPrjStat7() {
    let statPath = 'url(/assets/img/s';
    if ( this.pStat7 && (this.pStat7 != '' ) ) {
      statPath += this.pStat7 + '.png)';
    } else {
      statPath = 'url(/assets/img/sbg.png)';
    }
    return statPath;
  }

  // 7 functions for getSrvFlags
  getSrvFlag1() {
    let flagPath = 'url(/assets/flags/';
    if ( this.sF1 && (this.sF1 != '')) {
      flagPath += this.sF1 + '.png)';
    } else {
      flagPath = 'url(/assets/flags/bg.png)';
    }
    return flagPath;
  }
  getSrvFlag2() {
    let flagPath = 'url(/assets/flags/';
    if ( this.sF2  && (this.sF2 != '')) {
      flagPath += this.sF2 + '.png)';
    } else {
      flagPath = 'url(/assets/flags/bg.png)';
    }
    return flagPath;
  }
  getSrvFlag3() {
    let flagPath = 'url(/assets/flags/';
    if ( this.sF3 && (this.sF3 != '' )) {
      flagPath += this.sF3 + '.png)';
    } else {
      flagPath = 'url(/assets/flags/bg.png)';
    }
    return flagPath;
  }
  getSrvFlag4() {
    let flagPath = 'url(/assets/flags/';
    if ( this.sF4 && (this.sF4 != '' )) {
      flagPath += this.sF4 + '.png)';
    } else {
      flagPath = 'url(/assets/flags/bg.png)';
    }
    return flagPath;
  }
  getSrvFlag5() {
    let flagPath = 'url(/assets/flags/';
    if ( this.sF5 && (this.sF5 != '' ) ) {
      flagPath += this.sF5 + '.png)';
    } else {
      flagPath = 'url(/assets/flags/bg.png)';
    }
    return flagPath;
  }
  getSrvFlag6() {
    let flagPath = 'url(/assets/flags/';
    if ( this.sF6 && (this.sF6 != '' ) ) {
      flagPath += this.sF6 + '.png)';
    } else {
      flagPath = 'url(/assets/flags/bg.png)';
    }
    return flagPath;
  }
  getSrvFlag7() {
    let flagPath = 'url(/assets/flags/';
    if ( this.sF7 && (this.sF7 != '' ) ) {
      flagPath += this.sF7 + '.png)';
    } else {
      flagPath = 'url(/assets/flags/bg.png)';
    }
    return flagPath;
  }

    // 7 functions to Get Services status
    getSrvStat1() {
      let statPath = 'url(/assets/img/s';
      if ( this.sStat1 && (this.sStat1 != '' ) ) {
        statPath += this.sStat1 + '.png)';
      } else {
        statPath = 'url(/assets/img/sbg.png)';
      }
      return statPath;
    }
    getSrvStat2() {
      let statPath = 'url(/assets/img/s';
      if ( this.sStat2 && (this.sStat2 != '' ) ) {
        statPath += this.sStat2 + '.png)';
      } else {
        statPath = 'url(/assets/img/sbg.png)';
      }
      return statPath;
    }
    getSrvStat3() {
      let statPath = 'url(/assets/img/s';
      if ( this.sStat3 && (this.sStat3 != '' ) ) {
        statPath += this.sStat3 + '.png)';
      } else {
        statPath = 'url(/assets/img/sbg.png)';
      }
      return statPath;
    }
    getSrvStat4() {
      let statPath = 'url(/assets/img/s';
      if ( this.sStat4 && (this.sStat4 != '' ) ) {
        statPath += this.sStat4 + '.png)';
      } else {
        statPath = 'url(/assets/img/sbg.png)';
      }
      return statPath;
    }
    getSrvStat5() {
      let statPath = 'url(/assets/img/s';
      if ( this.sStat5 && (this.sStat5 != '' ) ) {
        statPath += this.sStat5 + '.png)';
      } else {
        statPath = 'url(/assets/img/sbg.png)';
      }
      return statPath;
    }
    getSrvStat6() {
      let statPath = 'url(/assets/img/s';
      if ( this.sStat6 && (this.sStat6 != '' ) ) {
        statPath += this.sStat6 + '.png)';
      } else {
        statPath = 'url(/assets/img/sbg.png)';
      }
      return statPath;
    }
    getSrvStat7() {
      let statPath = 'url(/assets/img/s';
      if ( this.sStat7 && (this.sStat7 != '' ) ) {
        statPath += this.sStat7 + '.png)';
      } else {
        statPath = 'url(/assets/img/sbg.png)';
      }
      return statPath;
    }

  ngOnInit() {
    this.isAuth$ = this.store.select(fromRoot.getIsAuth);
  }

  ngAfterContentInit() {

    this.timer = setInterval( ()=> {

      this.dnaLoop();

      // Move world map to simulate rotation / speed / progress
      this.setSlowWorldMove();
      this.setProgressSpeed();

    }, this.interval );

  } 

}
