import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'CarMatch-Website';
  isSmallNav = false;
  isSticky = false;
  isLight = true;

  firstName = "";
  lastName = "";
  email = "";
  message = "";

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.isSmallNav = window.innerWidth < 800;
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const scrollPosition = window.pageYOffset;

    if (scrollPosition >= 10) {
      this.isSticky = true;
      this.isLight = false;
    } else {
      this.isSticky = false;
      this.isLight = true;
    }
  }

  sendMessage(){
    console.log(this.firstName, this.lastName, this.email, this.message)
  }

}



