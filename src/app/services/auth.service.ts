import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface User {
  name: string;
  roles: string[];
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: BehaviorSubject<User> = new BehaviorSubject(null);
  constructor() { }

  login(name) {
    if (name === 'user') {
      this.currentUser.next({
        name: 'Dummy User',
        roles: ['read-content', 'purchase-items', 'user']
      });
      console.log(this.currentUser.value.name);
    } else if (name === 'admin') {
      this.currentUser.next({
        name: "The Admin",
        roles: ['read-content', 'write-content', 'admin']
      });
    }
  }

  getUserSubject() {
    return this.currentUser.asObservable();
  }

  logout() {
    this.currentUser.next(null);
  }

  hasRoles(roles: string[]): boolean {
    for (const oneRole of roles) {
      if (!this.currentUser.value || !this.currentUser.value.roles.includes(oneRole)) {
        return false;
      }
    }

    return true;
  }
}
