import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboveTheFoldComponent } from './above-the-fold/above-the-fold.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ImprintComponent } from './shared/imprint/imprint.component';
import { PrivacyPolicyComponent } from './contact/privacy-policy/privacy-policy.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LandingpageComponent, NavbarComponent, AboveTheFoldComponent, ContactComponent, FooterComponent, PortfolioComponent, AboutMeComponent, SkillsComponent, ImprintComponent, PrivacyPolicyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

    translation = "de";
    constructor(public translate: TranslateService){
      translate.setDefaultLang(this.translation)
      console.log("Ich werde erst nächte Woche ein professionelles Bild erstellen lassen und mein LinkedIn Profil würde ich gerne erst nach dem Bewerbungsmodul erstellen  ")
      console.log("Genauso das Github Profilbild werde ich erst hinzufügen wenn ich das professionelle Bild habe")
      console.log("Ich hätte das schon geschrieben gehabt aber man hat ja keine möglichkeit euch auf euer feedback zu schreiben was echt schade ist")
    }

   
}
