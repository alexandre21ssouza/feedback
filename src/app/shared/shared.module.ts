import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PercentagePipe } from './pipes/percentage.pipe';
import { WrapPipe } from './pipes/wrap/wrap.pipe';



@NgModule({
  declarations: [
    PercentagePipe,
    WrapPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
