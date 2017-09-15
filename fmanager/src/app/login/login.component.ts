import { Component, OnInit, Output, EventEmitter } from '@angular/core';
//import { Http } from "@angular/http";

//import 'rxjs/add/operator/toPromise'; // добавляем оператор toPromise

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/throw'; 
//import 'rxjs/add/observable/throw';

//import 'rxjs/add/operator/take';


//import { ListOfFoldersService } from '../shared/listoffolders.service'; // вообще то здесь ему не место
import { User } from './user';
import { AuthService } from './auth.service'; 

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user:User = new User(0,"","",false);  // ?? для полей с [(ngModel)] в форме
  private apiUrl = "app/users";
  
  @Output() user_entering = new EventEmitter<string>();


login(loginForm: NgForm) {  // возвращает true в случае совпадения логина и пароля, и false в случае отсутствия такой пары
      let userName = loginForm.form.value.username; //this.user.name = userName;
      let password = loginForm.form.value.userpass; //this.user.pass = password;
      //let LogWindow = document.getElementsByTagName("app-login")[0];
      //alert(userName+" "+password);

      this.authService.login(userName, password)
      .map(check => {
          if (check) {
              //LogWindow.classList.add("login-display-none");        
        this.user = new User(0,"","",false); //обнуляем поля в шаблоне формы логина
        this.user_entering.emit(userName);
        this.router.navigate(['/system']);
                      
          } else {
              alert("Логин или пароль неверны."); 
              this.user = new User(0,"","",false); //обнуляем поля в шаблоне формы логина
        //this.session_login = '';
        //this.setLogin(); 
          }
      })
      .subscribe(); 
  }


  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
  	//this.user.name = this.listService.session_login.toString();
  }



  }




