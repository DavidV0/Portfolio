import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { IconComponent } from '../shared/icon/icon.component';
import { ButtonComponent } from '../shared/button/button.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [IconComponent, ButtonComponent, CommonModule, TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent implements OnDestroy, OnInit {
  observer?: IntersectionObserver;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    const options = { threshold: 0.4 };
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('right')) {
            entry.target.classList.add('animation');
          }
        }
      });
    }, options);

    let targetElements: NodeListOf<HTMLElement> =
      this.elementRef.nativeElement.querySelectorAll('.right');
    targetElements.forEach((targetElement) => {
      this.observer?.observe(targetElement);
    });
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  text = 'Get in touch';

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
    {
      src: '../../assets/img/icons/python.svg',
      name: 'Python',
    },
    {
      src: '../../assets/img/icons/django.svg',
      name: 'Django',
    },
  ];
}
