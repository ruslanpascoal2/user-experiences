import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  form!: FormGroup;



  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: '',
      lastName: '',
      email: '',
      avatar: ['', Validators.required]
    })
  }

  submit(){
    console.log('is form valid??? ', this.form.valid);
    console.log(this.form.controls['avatar']);
  }

  get formValues(){
    return this.form.value;
  }

}
