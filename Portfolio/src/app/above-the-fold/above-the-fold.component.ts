import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../shared/button/button.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [CommonModule, ButtonComponent ,TranslateModule],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})
export class AboveTheFoldComponent {
  text = 'Let´s talk!';

  goTo(destination: string) {
    let target = document.querySelector(destination);
    if (target) {
      target.scrollIntoView();
    }
  }
}