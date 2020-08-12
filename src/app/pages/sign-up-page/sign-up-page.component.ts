import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service'
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {

  constructor(private userService :UserService,private router : Router) { }
  nameFromEl = null
  createUser(){
   console.log(this.nameFromEl);
   this.userService.createNewUser(this.nameFromEl)
   this.router.navigate([''])
  }

  ngOnInit(): void {
  }

}
