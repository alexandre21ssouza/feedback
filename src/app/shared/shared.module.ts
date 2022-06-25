import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PercentagePipe } from './pipes/percentage.pipe';
import { WrapPipe } from './pipes/wrap/wrap.pipe';
import { LoaderComponent } from './loader/loader.component';
import { MaterialModule } from './material.module';



@NgModule({
  declarations: [
    PercentagePipe,
    WrapPipe,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    LoaderComponent,
  
  ]
})
export class SharedModule { }
