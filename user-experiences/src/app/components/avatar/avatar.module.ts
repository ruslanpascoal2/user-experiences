import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';

import { ImageCropperComponent } from './components/image-cropper/image-cropper.component';

@NgModule({
  declarations: [
    AvatarComponent,
    ImageCropperComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    AvatarComponent
  ]
})
export class AvatarModule { }
