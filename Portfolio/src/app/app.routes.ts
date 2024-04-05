import { Routes } from '@angular/router';
import { ImprintComponent } from './shared/imprint/imprint.component';
import { PrivacyPolicyComponent } from './contact/privacy-policy/privacy-policy.component';
import { LandingpageComponent } from './landingpage/landingpage.component';


export const routes: Routes = [
    { path: 'imprint/', title: 'Imprint', component: ImprintComponent },
    { path: '', title: 'David-Velickovic', component: LandingpageComponent },
    {
      path: 'privacyPolicy/',
      title: 'Privacy-Policy',
      component: PrivacyPolicyComponent,
    },
];
