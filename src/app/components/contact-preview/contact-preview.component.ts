import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent implements OnInit {
@Input() contact
  constructor(private router : Router) { }
  openContactDetails(id) {
    this.router.navigate([`/contacts/details/${id}`]);
  }
  ngOnInit(): void {
  }

}
