import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginService} from '../../services/login.service';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  token$: any;
  form = new FormGroup({
    login: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private service: LoginService) {
  }

  ngOnInit(): void {
  }

  logIn() {
    this.service.getToken(this.form.get('login').value, this.form.get('password').value).subscribe(response => {
      this.token$ = response.token;
    });
  }
}
