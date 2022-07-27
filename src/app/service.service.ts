import { Injectable } from '@angular/core';
import { USER } from './users';
import userdata from '../../src/assets/usersdb.json'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  userdb: USER[] = userdata;

  constructor() { }

  getUsers(){
    return this.userdb;
  }
}
