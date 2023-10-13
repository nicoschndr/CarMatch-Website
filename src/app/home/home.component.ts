import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {AboutComponent} from "../about/about.component";
import {ContactComponent} from "../contact/contact.component";
import {FooterComponent} from "../footer/footer.component";

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

  currentLanguage = "deutsch";

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.isSmallNav = window.innerWidth < 1000;
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

  setCurrentLanguage(language: string) {
    this.currentLanguage = language;
    localStorage.setItem('language', language)
  }

  @ViewChild('home') scrollTargetHome: ElementRef;
  @ViewChild('about') scrollTargetAbout: ElementRef;
  @ViewChild('contact') scrollTargetContact: ElementRef;

  scrollToElement(element: string) {
    if (element === "home") {
      const targetElement = this.scrollTargetHome.nativeElement;
      targetElement.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'})
    }
    if (element === "about") {
      const targetElement = this.scrollTargetAbout.nativeElement;
      if (!this.isSmallNav) {
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - 90
        window.scrollTo({top: targetPosition, behavior: 'smooth'})
      } else {
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - 150
        window.scrollTo({top: targetPosition, behavior: 'smooth'})
      }
    }
    if (element === "contact") {
      const targetElement = this.scrollTargetContact.nativeElement;
      if (!this.isSmallNav) {
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - 90
        window.scrollTo({top: targetPosition, behavior: 'smooth'})
      } else {
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - 180
        window.scrollTo({top: targetPosition, behavior: 'smooth'})
      }
    }
  }

  ngOnInit() {
    this.isSmallNav = window.innerWidth < 800;
    this.currentLanguage = localStorage.getItem('language')!
    this.isSmallNav = window.innerWidth < 1000;
  }
}
