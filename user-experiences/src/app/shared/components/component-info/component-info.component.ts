import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-info',
  templateUrl: './component-info.component.html',
  styleUrls: ['./component-info.component.scss']
})
export class ComponentInfoComponent implements OnInit {
  hide = false;

  constructor() { }

  ngOnInit(): void {
  }

  close(){
    this.hide = true;
  }

}
