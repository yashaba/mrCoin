import { Component, OnInit, Output } from '@angular/core';
import {ContactService} from '../../services/contact.service'
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  constructor(private contactService : ContactService) { }
  contacts = null
  // @Output() 

  ngOnInit(): void {
      this.contactService.loadContacts()
      this.contactService.contacts$.subscribe(res => this.contacts = res)
    
    console.log('outside map',this.contacts);
    
  }

}
