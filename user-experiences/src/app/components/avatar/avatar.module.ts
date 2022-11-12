import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar.component';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    AvatarComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    AvatarComponent
  ]
})
export class AvatarModule { }
