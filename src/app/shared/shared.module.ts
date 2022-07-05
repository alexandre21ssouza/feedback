import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PercentagePipe } from './pipes/percentage/percentage.pipe';
import { WrapPipe } from './pipes/wrap/wrap.pipe';
import { MaterialModule } from './material.module';
import { LoaderComponent } from '../core/components/loader/loader/loader.component';

import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';




@NgModule({
  declarations: [
    PercentagePipe,
    WrapPipe,
    LoaderComponent,
    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ],
  exports: [
    LoaderComponent,
  
  ]
})
export class SharedModule { }
