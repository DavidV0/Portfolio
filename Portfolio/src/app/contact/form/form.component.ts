import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  http = inject(HttpClient);

  sendingComplete() {
    let overlay = document.querySelector('.overlay-email');
    overlay?.setAttribute('style', 'opacity: 1; z-index:0;');
    setTimeout(() => {
      overlay?.setAttribute('style', 'opacity: 0; z-index:-1;');
    }, 3000);
  }

  checkboxState = false;

  contactData = {
    name: '',
    email: '',
    message: '',
  };

  mailTest = true;

  post = {
    endPoint: 'https://meineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.checkboxState = false;
            ngForm.resetForm();
            this.sendingComplete();
          },
          error: (error) => {
            console.error(error);
          },
        });
    }
  }
  
}