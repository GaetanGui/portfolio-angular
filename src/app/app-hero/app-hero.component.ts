import { Component } from '@angular/core';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ TranslatePipe, TranslateDirective],
  templateUrl: './app-hero.component.html',
  styleUrl: './app-hero.component.css'
})
export class AppHeroComponent {
  cvLink: string = 'assets/CV.pdf';
}
