export class LoggingService {

  logStatusChange(status: string) {
    console.log('OS status changed, new status: ' + status);
  }
}