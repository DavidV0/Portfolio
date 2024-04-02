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
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
      link: 'https://www.david-velickovic.at/projects/Join/index.html',
      github: 'https://github.com/DavidV0/Join',
      src: '../../assets/img/Pollo loco 2.png',
    },
    {
      name: 'El Pollo Loco',
      language: 'JavaScript, HTML, CSS',
      description: 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and poison bottles to fight against the killer chicken.',
      link:
        'https://www.david-velickovic.at/projects/el-pollo-loco/index.html',
        github: 'https://github.com/DavidV0/EPL',
      src: '../../assets/img/Pollo loco 1.png',
    },
  ];
}
