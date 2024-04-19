import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ButtonComponent } from '../shared/button/button.component';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [CommonModule, ButtonComponent ,TranslateModule],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})
export class AboveTheFoldComponent  {
 languageService = Inject(LanguageService)

 len = this.languageService.getLen;
 text = "Let's talk!"

 constructor(){
    if(this.len ==="DE"){
      this.text = "Kontakt aufnehmen!"
    }else {
      this.text = "Let's talk!";
    }
 }

  
 

  goTo(destination: string) {
    let target = document.querySelector(destination);
    if (target) {
      target.scrollIntoView();
    }
  }
}