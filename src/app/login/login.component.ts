import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public myForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.myForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
        ],
      ],
      password: ['', [Validators.required]],
    });
  }
  get mail() {
    return this.myForm.get('email');
  }
  get pwd() {
    return this.myForm.get('password');
  }

  ngOnInit(): void {}

  onSubmit() {
    localStorage.setItem('User', JSON.stringify(this.myForm.value));
    console.log(localStorage.getItem('email'));
    if (this.myForm.value) {
      this.router.navigate(['dashboard']);
    }
  }
  
}
