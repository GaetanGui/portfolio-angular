import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, TranslatePipe],
  templateUrl: './app-contact.component.html',
  styleUrls: ['./app-contact.component.css']
})


export class AppContactComponent {
  form = {
    title : '',
    name: '',
    email: '',
    message: ''
  };

  sendEmail() {
    emailjs.send(
      'service_8kxrp0i',   
      'template_25m24lw',  
      {
        ContactFromTitle : this.form.title,
        name: this.form.name,
        email: this.form.email,
        time: 0,
        message: this.form.message,
      },
      'PN8QE3ABsh-apTvXF'       
    ).then(
      (result: EmailJSResponseStatus) => {
        alert("Message envoyé avec succès ✅");
        this.form = { title: '', name: '', email: '', message: '' };
      },
      (error) => {
        alert("Erreur lors de l’envoi ❌");
        console.error(error.text);
      }
    );
  }
}
