import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent implements OnInit{
  constructor(private router: Router) { }
  ngOnInit(): void {
    window.scrollTo(0, 0); // Manuell an die Spitze der Seite scrollen
  }
}
