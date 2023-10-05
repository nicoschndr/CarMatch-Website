import {Component, HostListener, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {compareSegments} from "@angular/compiler-cli/src/ngtsc/sourcemaps/src/segment_marker";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

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
    let mailData = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      message: this.message
    }
    this.http.post("http://localhost:3000/send-email", mailData).subscribe(
      data => {
        let res: any = data;
        console.log('das hat geklappt')
      },
      error => {
        console.log(error)
      }
    )
  }

  ngOnInit(): void {
    this.isSmallNav = window.innerWidth < 800;
    this.currentLanguage = localStorage.getItem('language')!
  }

  setCurrentLanguage(language: string) {
    this.currentLanguage = language;
    localStorage.setItem('language', language)
  }
}



