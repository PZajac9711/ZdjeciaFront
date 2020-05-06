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
  token: string;
  form = new FormGroup({
    login: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private service: LoginService, private jwtService: StorageJwtService) {
  }

  ngOnInit(): void {
  }

  logIn() {
    this.service.getToken(this.form.get('login').value, this.form.get('password').value).subscribe(response => {
      this.jwtService.saveJwt(response.token);
    });
  }
}
