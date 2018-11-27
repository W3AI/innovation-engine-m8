import { Injectable, EventEmitter } from "@angular/core";

import { LoggingService } from "./logging.service";

@Injectable()
export class SetupService {
  accounts = [
    {
      name: 'Steve',
      osName: 'Team OS',
      status: 'active'
    }
  ];
  statusUpdated = new EventEmitter<string>();

  constructor(private loggingService: LoggingService) {}

  addAccount(name: string, osName: string, status: string) {
    this.accounts.push({name: name, osName: osName, status: status});
    this.loggingService.logStatusChange(status);
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.loggingService.logStatusChange(status);
  }

}