import { Component, OnInit } from '@angular/core';
import {ContactService} from '../../services/contact.service'
import { ActivatedRoute, Router } from '@angular/router';
import {UserService} from '../../services/user.service'
import {utils} from '../../services/utils.service'






@Component({
  selector: 'app-contact-details-page',
  templateUrl: './contact-details-page.component.html',
  styleUrls: ['./contact-details-page.component.scss']
})
export class ContactDetailsPageComponent implements OnInit {

  constructor(private userService :UserService,private contactService : ContactService,private activatedRoute : ActivatedRoute,private router : Router) { }
contactToEdit = null
isEditing = false
amountToTransfer = null
currUser = null

  isAmountValid(){
    
    return (this.currUser.coins >= this.amountToTransfer) && (+this.amountToTransfer)
  }
  transferCoins(){
  if (!this.isAmountValid()) return
  let transaction = {
   _id: utils.makeId(),
   amount: this.amountToTransfer,
   at: Date.now(),
   sentFrom: this.currUser.name,
   sentTo: this.contactToEdit.name,
   sentToId: this.contactToEdit._id
  }
  this.userService.transferFunds(transaction)
  this.currUser = this.userService.getLoggedInUser()
  this.amountToTransfer = null
  

  }

  loadContact(id) {
    this.contactService.getContactById(id)
      .subscribe(contact => {
        console.log('got from load contact:', contact);
        
        this.contactToEdit = {...contact}
        
        console.log('got from load contact to edit:', this.contactToEdit);
      
      });
  }
  saveContact() {
    this.contactService.saveContact(this.contactToEdit)
    this.router.navigate(['/contacts']);
  }

  deleteContact(){
    this.contactService.deleteContact(this.contactToEdit._id)
    this.router.navigate(['/contacts']);
  
  }
  redirect() {
    this.router.navigate(['/contacts']);
  }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (!params.id) this.isEditing = true
      this.loadContact(params.id);
      console.log('params',params.id);

      
    });
    this.currUser = this.userService.getLoggedInUser()
  }

}
