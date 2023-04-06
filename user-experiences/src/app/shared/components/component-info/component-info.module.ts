import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentInfoComponent } from './component-info.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ComponentInfoComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [
    ComponentInfoComponent
  ]
})
export class ComponentInfoModule { }
