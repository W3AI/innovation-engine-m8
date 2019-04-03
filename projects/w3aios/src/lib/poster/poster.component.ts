import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Show } from '../w3aios.models';
import { W3aiosService } from '../w3aios.service';

@Component({
  selector: 'wos-poster',
  template: `<img *ngIf="posterUrl$ | async as src" [src]="src" />`,
  styles: [
    `
  :host {
    display: inline-block;
    overflow: hidden;
    border-radius: 4px;
    line-height: 0;
  }
  `
  ]
})
export class PosterComponent implements OnInit {
  @Input() showId: number;
  posterUrl$: Observable<string>;

  constructor(private w3aios: W3aiosService) {}

  ngOnInit() {
    this.posterUrl$ = this.w3aios
      .getShow(this.showId)
      .pipe(map(show => show.image.medium));
  }
}