import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { W3aiosComponent } from './w3aios.component';
import { PosterComponent } from './poster/poster.component';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [W3aiosComponent, PosterComponent],
  exports: [W3aiosComponent, PosterComponent]
})
export class W3aiosModule { }
