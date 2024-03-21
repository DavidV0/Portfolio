import { CommonModule } from '@angular/common';
import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  @Input() name: string = '';
  @Input() language: string = '';
  @Input() description: string = '';
  @Input() link: string = '';
  @Input() github: string = '';
  @Input() src: string = '';
}
