import { Component } from '@angular/core';
import { TranslatePipe, TranslateDirective } from '@ngx-translate/core';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    TranslatePipe,
    TranslateDirective
  ],
  templateUrl: './app-about.component.html',
  styleUrl: './app-about.component.css'
})
export class AppAboutComponent {
}
