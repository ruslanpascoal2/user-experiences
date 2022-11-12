import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ImageCropperComponent } from './components/image-cropper/image-cropper.component';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {
  file: string = '';

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  onFileChange(event: any) {
    const files = event.target.files as FileList;

    if (files.length > 0) {
      const _file = URL.createObjectURL(files[0]);
      this.openAvatarEditor(_file)
      .subscribe(
        (result) => {
          console.log(result);
        }
      )
    }
  }

  openAvatarEditor(image: string): Observable<any> {
    const dialogRef = this.dialog.open(ImageCropperComponent, {
      maxWidth: '80vw',
      maxHeight: '80vh',
      data: image,
    });

    return dialogRef.afterClosed();
  }
}
