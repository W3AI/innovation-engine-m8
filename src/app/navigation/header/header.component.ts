import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../app.reducer';
import { AuthService } from '../../auth/auth.service';
import { LoggingService } from '../../logging.service';
import { SetupService } from '../../setup.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter<void>();
  isAuth$: Observable<boolean>;
  appTitle = 'Progress Accelerators';

  constructor(private store: Store<fromRoot.State>, 
              private authService: AuthService,
              private loggingService: LoggingService,
              private setupService: SetupService ) { 
                this.setupService.statusUpdated.subscribe(
                  (title: string) => {
                    this.appTitle = title;
                  });
              }

  ngOnInit() {
    this.isAuth$ = this.store.select(fromRoot.getIsAuth);
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  onLogout() {
    this.authService.logout();
  }

}
