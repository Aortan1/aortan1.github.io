import { InMemoryDbService } from 'angular-in-memory-web-api';

export class UsersData implements InMemoryDbService {

  createDb() {
    
    let users = [
        { id: 1, name: "Alex", pass: "12345" },
        { id: 2, name: "Polina", pass: "23456" }
    ];

    return { users };

  }


}
