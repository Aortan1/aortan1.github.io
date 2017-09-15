import { Injectable } from '@angular/core';
import { User } from './user';

import { Http } from "@angular/http";

import 'rxjs/add/operator/toPromise'; // добавляем оператор toPromise
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/throw'; 
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/take';




@Injectable()
export class AuthService {
    public current_login: string;
    //public current_isAdmin: boolean;
    private user: User = new User(0,"","",false);  
    private apiUrl = "app/users";
    private host: string;

    constructor(private http:Http) { }


    getLogin(){
        if(localStorage.getItem("current_login")) 
            {                
                this.current_login = JSON.parse(localStorage.getItem("current_login"));
                this.user.isAdmin = JSON.parse(localStorage.getItem("isAdmin"));
                console.info("Чтение ЛОГИНА из локалки. "+this.current_login);
            }
    }


    setLogin(login = this.current_login){
        console.info("Запись ЛОГИНА в локалку."); 
        localStorage.setItem("current_login",JSON.stringify(login));
        localStorage.setItem("isAdmin",JSON.stringify(this.user.isAdmin));        
    }



    getUsersDataWithPromise(): Promise<User[]> { // получение массива зарегистрированных пользователей с "сервера"
       return this.http.get(this.host+this.apiUrl)
                   .toPromise()
                   .then(res => res.json().data as User[])
                   .catch(this.handleErrorPromise); }


    getUsersDataWithObservable(): Observable<User[]> { // получение массива зарегистрированных пользователей с "сервера"
       return this.http.get(this.host+this.apiUrl)
                   .map(res => res.json().data as User[])
                   .catch(this.handleErrorObservable); }

    // this.http.get - отправка get запроса по указанному адресу. Метод возвращает
    // объест Observable из библиотеки RxJS. С помощью метода subscribe подписываемся на событие.
    // Событие произойдёт после получения ответа от сервера.



  // При использовании Promise в onSubmit() используем структуру
  // this.getUsersDataWithPromise().then().then()
  // При замене её на применение Observable заменяем эту структуру на
  // getUsersDataWithObservable().map.subscribe(), не меняя параметров внутри,
  // т.е. then и then меняется на map и subscribe, либо на
  //  map map и subscribe() (с пустым subscribe в конце).      



    private handleErrorObservable(error:any){
        console.error('Произошла ошибка', error);
        return Observable.throw(error.message || error);
    }


    private handleErrorPromise(error: any){ // метод для вывода ошибки сервера
        console.log('Произошла ошибка сервера.', error );
        return Promise.reject(error.message || error);
   }

  isLoggedIn(): boolean {
        return !!this.current_login;
  }

  isAdmin(): boolean {
        return this.user.isAdmin;
  }

  login(userName, password): Observable<boolean>{  // возвращает true в случае совпадения логина и пароля, и false в случае отсутствия такой пары
      //alert(userName+" "+password);
      this.getLogin(); // чтение логина из локалки

      return this.getUsersDataWithObservable()
                  .map(users => {
                      let suitable_user = users.find(obj => obj.name == userName);
                      if(this.isLoggedIn()) return true; else
                      if(suitable_user && suitable_user.pass == password) {
                    this.current_login = userName;
                    this.user = suitable_user;
                    this.setLogin();       
                    return true;
                    }
                      else  return false;
                  })

      // .map(check => {
      //     if (check) {
      //         LogWindow.classList.add("login-display-none");        
      //   this.user = new User(0,"",""); 
      //         this.user_entering.emit(this.user.name);
      //   this.router.navigate(['/system']);
                      
      //     } else {
      //         alert("Логин или пароль неверны."); 
      //         this.user = new User(0,"","");
      //   this.session_login = '';
      //   this.setLogin(); 
      //     }
      // })
      // .subscribe(); 
  }
   


  show_data(){
      alert(this.userJson());
  }


  userJson() { return JSON.stringify(this.user); } 



    
}
