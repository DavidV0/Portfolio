import { CommonModule } from '@angular/common';
import { Component, } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar' ,
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {


 
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


  openMobileMenu() {
    this.showOverlay = !this.showOverlay;
    if (this.showOverlay) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }
}
