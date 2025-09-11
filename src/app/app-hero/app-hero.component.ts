import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './app-hero.component.html',
  styleUrl: './app-hero.component.css'
})
export class AppHeroComponent {
  name: string = 'Gaëtan JOBST';
  role: string = 'Développeur Web Full Stack';
  description: string = "À la recherche d'une alternance pour renforcer mes compétences en contribuant à des projets concrets 🚀";
  cvLink: string = 'assets/CV.pdf';
}
