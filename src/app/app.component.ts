import { Component } from '@angular/core';
import { faDownload, faUserGraduate, faPhone , faBriefcase, faNetworkWired, faLaptopCode, faArrowCircleUp, faBars } from '@fortawesome/free-solid-svg-icons'
import { faArrowAltCircleRight} from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Resume';
  faDownload = faDownload
  faUserGraduate = faUserGraduate
  faPhone = faPhone
  faBriefcase = faBriefcase
  faNetworkWired = faNetworkWired
  faLaptopCode = faLaptopCode
  faArrowCircleUp = faArrowCircleUp
  faBars = faBars
  faArrowAltCircleRightaXRay = faArrowAltCircleRight

  sideNav: boolean = false
  
  
  openSideNav(){
    this.sideNav = true
  }

  closeSideNav(){
    this.sideNav = false
  }


}

