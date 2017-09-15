import { InMemoryDbService } from 'angular-in-memory-web-api';

export class UsersData implements InMemoryDbService {

  createDb() {
    
    let users = [
        { id: 1, name: "Alex", pass: "12345", isAdmin: false },
        { id: 2, name: "Polina", pass: "23456", isAdmin: false },
        { id: 0, name: "admin", pass: "0", isAdmin: true }
    ];

    return { users };

  }


}


