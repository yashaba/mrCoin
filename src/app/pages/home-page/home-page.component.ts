import { Component, OnInit, Input } from '@angular/core';
import {UserService} from '../../services/user.service'
import { ActivatedRoute, Router } from '@angular/router';
import {HttpService} from '../../services/http.service'


 
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private httpService :HttpService,private userService :UserService,private router : Router) { }
  currUser = null
 @Input() exchangeRate
  btcToUsd = null

  loadUser() {
    let user = this.userService.getLoggedInUser()
    if (!user)  this.router.navigate(['/signup']);
    this.currUser = user
  }

  loadExchangeRate() {
    this.exchangeRate = this.httpService.getCurrExchange()
    
    this.btcToUsd = (this.currUser.coins / this.exchangeRate).toFixed(3)
  }

  onSignUp() {
    this.router.navigate(['/signup'])
  }
  ngOnInit(): void {
    this.loadUser()
    this.loadExchangeRate()
  }

}
