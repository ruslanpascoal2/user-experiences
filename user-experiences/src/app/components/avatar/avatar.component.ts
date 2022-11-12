import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

  file: string = ""; //it will be a base64 string

  constructor() { }

  ngOnInit(): void {
  }

  onFileChange(event: any){
    const files = event.target.files as FileList;
    
    if(files.length > 0){
      this.file = URL.createObjectURL(files[0]);
    }
  }

 
}
