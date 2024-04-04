import { CommonModule } from '@angular/common';
import { Component , Input} from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AppComponent } from '../../app.component';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  about: boolean = false;
  skills: boolean = false;
  portfolio: boolean = false;
  contact: boolean = false;

  @Input() language = 'DE';

  constructor(private appComponent: AppComponent){}

  clickEvent(id: number) {
    if (id == 0) {
      this.about = !this.about;
      this.skills = false;
      this.portfolio = false;
      this.contact = false;
    } else if (id == 1) {
      this.skills = !this.skills;
      this.about = false;
      this.portfolio = false;
      this.contact = false;
    } else if (id == 2) {
      this.portfolio = !this.portfolio;
      this.about = false;
      this.skills = false;
      this.contact = false;
    } else if (id == 3) {
      this.contact = !this.contact;
      this.about = false;
      this.skills = false;
      this.portfolio = false;
    }
  }

  showOverlay = false;

  openMobileMenu() {
    this.showOverlay = !this.showOverlay;
    if (this.showOverlay) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  goTo(destination: string) {
    let target = document.querySelector(destination);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }
  translating() {
    this.language = this.language === 'DE' ? 'EN' : 'DE';
    this.appComponent.translate.setDefaultLang(this.language.toLowerCase());
    let language = document.getElementById('.len')?.innerText;
    let english = "EN"
    let german = "DE"
    if (this.language === 'DE') {
      language = german;
    } else {
      language = english
      this.language = 'EN';
    }
  }
}
