import { Injectable } from '@angular/core';
// import { Observable, BehaviorSubject, of } from 'rxjs';
import { User }  from './user.model';
import {utils} from './utils.service'


@Injectable({
  providedIn: 'root'
})
export class UserService {

 
  constructor() {
  }
  getLoggedInUser() {
  return utils.loadFromStorage('loggedInUser')
  }

  createNewUser(name) {
  let newUser = new User(name)
  newUser._id = utils.makeId()
  utils.storeToStorage('loggedInUser', newUser )
  return newUser
  }

  transferFunds(trasactionReq){
    let loggedInUser = this.getLoggedInUser()

    loggedInUser.coins -= trasactionReq.amount
    loggedInUser.moves.push(trasactionReq)
    utils.storeToStorage('loggedInUser',loggedInUser)   
  }

  
}