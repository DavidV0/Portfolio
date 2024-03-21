import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectsComponent } from '../shared/projects/projects.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, ProjectsComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  projects = [
    {
      name: 'Join',
      language: 'JavaScript, HTML, CSS',
      description: '',
      link: '',
      github: '',
      src: '',
    },
    {
      name: 'El Pollo Loco',
      language: 'JavaScript, HTML, CSS',
      description: '',
      link:
        '',
        github: '',
      src: '',
    },
  ];
}
