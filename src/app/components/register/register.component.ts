import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {RegisterService} from '../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service: RegisterService) { }
  form = new FormGroup({
    login: new FormControl(''),
    password: new FormControl('')
  });
  ngOnInit(): void {
  }
  register(){
    this.service.register(this.form.get('login').value, this.form.get('password').value).subscribe(response => {
      console.log("Zarejestowanoa!");
      window.location.reload();
    });
  }
}
