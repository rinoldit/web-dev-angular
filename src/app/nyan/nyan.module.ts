import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NyanComponent } from './nyan.component';



@NgModule({
  declarations: [NyanComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: NyanComponent
    }])
  ]
})
export class NyanModule { }
