import { Component, OnInit } from '@angular/core';
import { faPhone, faEnvelopeOpen, faHouseUser, faCalendarDay} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  faPhone = faPhone
  faEnvelopeOpen = faEnvelopeOpen
  faHouseUser = faHouseUser
  faCalendarDay = faCalendarDay


  constructor() { }

  ngOnInit(): void {
  }

}
