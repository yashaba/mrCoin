import { Component, OnInit , Input } from '@angular/core';
import {UserService} from '../../services/user.service'

@Component({
  selector: 'app-moves',
  templateUrl: './moves.component.html',
  styleUrls: ['./moves.component.scss']
})
export class MovesComponent implements OnInit {
  currUser = null
  moves = null
  @Input() exchangeRate
  btcToUsd = null
  constructor(private userService : UserService) { }
  loadExchangeRate() {
   
    
    this.btcToUsd = (this.currUser.coins / this.exchangeRate).toFixed(3)
  }
  ngOnInit(): void {
    this.currUser = this.userService.getLoggedInUser()
    console.log(this.currUser.moves);
    this.moves = this.currUser.moves.slice(0,3)
    this.loadExchangeRate()
    
  }

}
