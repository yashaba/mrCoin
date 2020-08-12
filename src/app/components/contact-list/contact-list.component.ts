import { Component, OnInit, Input } from '@angular/core';
import {ContactService} from '../../services/contact.service'

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
 
  constructor(private contactService : ContactService) { }
  @Input() contacts
  ngOnInit(): void {
    console.log('contacts inside list' , this.contacts);
    
  }

}
