import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent  implements OnDestroy, OnInit {
  observer?: IntersectionObserver;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    const options = { threshold: 0.4 };
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('left')) {
            entry.target.classList.add('animation');
          }
        }
      });
    }, options);

    let targetElements: NodeListOf<HTMLElement> =
      this.elementRef.nativeElement.querySelectorAll('.left');
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
