import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }


  addUser(user: any) {
    let users = [];
    // Check if 'Users' exists in local storage and if it's a string.
    const storedUsers = localStorage.getItem('Users');
    if (typeof storedUsers === 'string') {
      users = JSON.parse(storedUsers);
      users = [user, ...users];
    } else {
      users = [user];
    }
  
    localStorage.setItem('Users', JSON.stringify(users));
  }
}
