import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'CarMatch-Website';
  isSmallNav = false;
  isSticky = false;
  isLight = true;

  firstName = "";
  lastName = "";
  email = "";
  message = "";

  currentLanguage = "deutsch";

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

  sendMessage() {
    console.log(this.firstName, this.lastName, this.email, this.message)
  }

  ngOnInit(): void {
    this.isSmallNav = window.innerWidth < 800;
    this.currentLanguage = localStorage.getItem('language')!
  }

  setCurrentLanguage(language: string) {
    this.currentLanguage = language;
    localStorage.setItem('language', language)
  }

  setScrollOffset() {
    if (this.isLight && !this.isSticky) {
      this.isLight = false
    } else if (!this.isLight && !this.isSticky) {
      this.isLight = true
    }
  }
}
