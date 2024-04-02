import { Component } from '@angular/core';
import { IconComponent } from '../shared/icon/icon.component';
import { ButtonComponent } from '../shared/button/button.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [IconComponent, ButtonComponent, CommonModule, TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  text = "Get in touch"

  goTo(destination: string) {
    let target = document.querySelector(destination);
    if (target) {
      target.scrollIntoView();
    }
  }
  
  icons = [
    {
      src: '../../assets/img/icons/Angular.png',
      name: 'Angular',
    },
    {
      src: '../../assets/img/icons/typescript.png',
      name: 'TypeScript',
    },
    {
      src: '../../assets/img/icons/javascript.png',
      name: 'JavaScript',
    },
    {
      src: '../../assets/img/icons/html.png',
      name: 'HTML',
    },
    {
      src: '../../assets/img/icons/Firebase.png',
      name: 'Firebase',
    },
    {
      src: '../../assets/img/icons/git.png',
      name: 'GIT',
    },
    {
      src: '../../assets/img/icons/css.png',
      name: 'CSS',
    },
    {
      src: '../../assets/img/icons/Api.png',
      name: 'Rest-API',
    },
    {
      src: '../../assets/img/icons/material-design.png',
      name: 'Material Design',
    },
    {
      src: '../../assets/img/icons/scrum.png',
      name: 'Scrum',
    },
   
  ];
}
