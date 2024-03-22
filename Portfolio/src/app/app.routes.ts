import { Routes } from '@angular/router';
import { ImprintComponent } from './shared/imprint/imprint.component';
import { PrivacyPolicyComponent } from './contact/privacy-policy/privacy-policy.component';
import { AboveTheFoldComponent } from './above-the-fold/above-the-fold.component';


export const routes: Routes = [
    { path: 'imprint', title: 'Imprint', component: ImprintComponent },
    { path: '', title: 'David-Velickovic', component: AboveTheFoldComponent },
    {
      path: 'privacyPolicy',
      title: 'Privacy-Policy',
      component: PrivacyPolicyComponent,
    },
];
