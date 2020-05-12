import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  private formLogin: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.formLogin = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  generateURL() {
    this.router.navigate(['/tabs'])
  }

  doLogin() {
    var email = this.formLogin.value.email;
    var password = this.formLogin.value.password;

    if (email === "email@gmail.com" && password === "password") {
      this.generateURL();
    }
  }
}
