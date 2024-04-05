import { CommonModule, } from '@angular/common';
import { Component , Input, OnInit, OnDestroy, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent  implements OnInit, OnDestroy {

  observer?: IntersectionObserver;

  constructor(
    private elementRef: ElementRef) {}

  @Input() name: string = '';
  @Input() language: string = '';
  @Input() description: string = '';
  @Input() link: string = '';
  @Input() github: string = '';
  @Input() src: string = '';
  @ViewChild('projectRightSide') rightSideElement!: ElementRef;


  ngOnInit(): void {


    const options = { threshold: 0.5 };
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('left-side')) {
            entry.target.classList.add('animation-left');
            this.rightSideElement.nativeElement.classList.add(
              'animation-right'
            );
          }
        }
      });
    }, options);

    let targetElements: NodeListOf<HTMLElement> =
      this.elementRef.nativeElement.querySelectorAll('.left-side');
    targetElements.forEach((targetElement) => {
      this.observer?.observe(targetElement);
    });
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
