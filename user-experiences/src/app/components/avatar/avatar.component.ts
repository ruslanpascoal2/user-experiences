import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

  file: File | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  onFileChange(event: any){
    const files = event.target.files as FileList;
    
    if(files.length > 0){
      this.file = files[0];
    }
  }
 
}
