import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginService} from '../../services/login.service';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {StorageJwtService} from '../../services/storage-jwt.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: LoginService, private jwtService: StorageJwtService) {
  }

  static logged = false;
  token: string;
  form = new FormGroup({
    login: new FormControl(''),
    password: new FormControl('')
  });

  ngOnInit(): void {
    this.checkLogged();
  }

  logIn() {
    this.service.getToken(this.form.get('login').value, this.form.get('password').value).subscribe(response => {
      this.jwtService.saveJwt(response.token);
      window.location.reload();
    });
  }

  checkLogged() {
    if (this.jwtService.getJwt() !== null) {
      LoginComponent.logged = true;
    }
  }

  getStatic() {
    return LoginComponent.logged;
  }
}
