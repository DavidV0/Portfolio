import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar' ,
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {

  @Input() language = 'DE';
  @ViewChild('checkbox', { static: false }) checkbox!: ElementRef;
  about: boolean = false;
  skills: boolean = false;
  portfolio: boolean = false;
    clickEvent(id: number) {

    if(id == 0){
      this.about = !this.about
      this.skills = false;
      this.portfolio = false
    }else if(id == 1){
      this.skills = !this.skills
      this.about = false
      this.portfolio = false
    }else if(id == 2){
      this.portfolio = !this.portfolio
      this.about = false;
      this.skills = false
    }
  }


  showOverlay = false;

  goTo(destination: string) {
    let target = document.querySelector(destination);
    if (target!.id === 'portfolio') {
      const yoffset = -100;
      window.scroll({
        top: target!.getBoundingClientRect().top + window.scrollY + yoffset,
        behavior: 'smooth',
      });
      this.checkbox.nativeElement.checked = false;
      this.showOverlay = false;
      document.body.style.overflow = 'auto';
    } else if (target!.id === 'skills') {
      const yoffset = -500;
      window.scroll({
        top: target!.getBoundingClientRect().top + window.scrollY + yoffset,
        behavior: 'smooth',
      });
      this.checkbox.nativeElement.checked = false;
      this.showOverlay = false;
      document.body.style.overflow = 'auto';
    } else if (target!) {
      target!.scrollIntoView();
      this.checkbox.nativeElement.checked = false;
      this.showOverlay = false;
      document.body.style.overflow = 'auto';
    }
  }

  openMobileMenu() {
    this.showOverlay = !this.showOverlay;
    if (this.showOverlay) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }
}
