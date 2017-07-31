import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Http } from "@angular/http";

import 'rxjs/add/operator/toPromise'; // добавляем оператор toPromise

import { Observable } from 'rxjs/Observable';

// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/throw';

import { ListOfFoldersService } from '../shared/listoffolders.service'; // вообще то здесь ему не место

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user:User = new User(0,"","");  
  public itemArray: User[] = [];

  private apiUrl = "app/users";
  
  @Output() user_entering = new EventEmitter<string>();


  clickHandler(){ //НЕ ИСПОЛЬЗУЮ

  	// this.http.get - отправка get запроса по указанному адресу. Метод возвращает
  	// объест Observable из библиотеки RxJS. С помощью метода subscribe подписываемся на событие.
  	// Событие произойдёт после получения ответа от сервера.

  	this.http.get("app/users").subscribe(
  		result => this.itemArray = result.json().data, // в случае успеха сервер вернёт статус-код 200
  		error => console.log(error.statusText) // в случае ошибки сервер вернёт статус-код 404
  		

  		// result - 1й пар-р м.subscribe - это объект типа Response, наследующий от Body 
  		// методы json(), text(), arrayBuffer(), blob().
  		// .data - свойство, содержащее на выходе десерелизованные данные.
  		);
  }

  private handleErrorPromise(error: any){ // метод для вывода ошибки сервера
  	console.log('Произошла ошибка сервера.', error );
  	return Promise.reject(error.message || error);

  }


  private handleErrorObservable(error: any){ // метод для вывода ошибки сервера
  	console.log('Произошла ошибка сервера.', error );
  	return Observable.throw(error.message || error);

  }












// Observable:
// .subscripe(fun) - перебирает массив результата result, вызывая на каждом итеме ф-ю-параметр fun


  getUsersDataWithPromise(): Promise<User[]> { // получение массива зарегистрированных пользователей с "сервера"
  	 return this.http.get(this.apiUrl)
  	 			.toPromise()
  	 			.then(res => res.json().data)
  	 			.then(users => {return this.itemArray = users})
  	 			.catch(this.handleErrorPromise); }


  // getUsersDataWithObservable(): Observable<User[]> { // получение массива зарегистрированных пользователей с "сервера"
  // 	 return this.http.get(this.apiUrl)
  // 	 			.map(res => res.json().data as User[])
  // 	 			.map(users => {return this.itemArray = users})
  // 	 			.catch(this.handleErrorObservable); }




  onSubmit():void {  // возвращает true в случае совпадения логина и пароля, и false в случае отсутствия такой пары
  	let LogWindow = document.getElementsByTagName("app-login")[0];
  	this.getUsersDataWithPromise()
  	.then(users => {
  		let suitable_user = users.find(obj => obj.name == this.user.name); // поиск итема в массиве users, по соответствию name d введённом объесте user
  		
  		if(this.listService.session_login) return true; else
  		if(suitable_user) return suitable_user.pass == this.user.pass;
  		else return false;
  	 	})
  	.then(check => {
  		if (check) {
  			LogWindow.classList.add("login-display-none");
  			this.user_entering.emit(this.user.name);
  			this.user = new User(0,"","");
  		} else {
  			alert("Логин или пароль неверны."); 
  			this.user = new User(0,"","");
  		}
  	});   
  }




  // onSubmit(){
  
  // 	let LogWindow = document.getElementsByTagName("app-login")[0];

  // 	this.checkData()
  // 	.toPromise()
  // 	.then(check => {if (this.checkData()) LogWindow.classList.add("login-display-none"); })           
  	
  // }













  constructor(private http:Http, public listService:ListOfFoldersService) { }

  ngOnInit() {
  	//this.user.name = this.listService.session_login.toString();
  }

  show_data(){
  	alert(this.userJson());
  }

  userJson() { return JSON.stringify(this.user); } 

}


class User {
	constructor(
		public id: number,
		public name: string,
		public pass: string){}

}



