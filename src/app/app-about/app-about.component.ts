import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './app-about.component.html',
  styleUrl: './app-about.component.css'
})
export class AppAboutComponent {
  name: string = 'Gaëtan JOBST';
  role: string = 'Développeur Web Full Stack';
  description: string = `Actuellement en formation au sein de l'école LiveCampus, je recherche une alternance afin de mettre en pratique mes compétences
  en Front-end(AngularTS, Html, CSS, TailwindCSS, Bootstrap...), en Back-end (C# .NET, Python, NodeJS...), en Développement Mobile(Swift, Kotlin) et bases de données tout en continuant à apprendre et progresser aux côtés d’une équipe dynamique.`;
  qualities: string = `Curieux, rigoureux et motivé, je suis prêt à relever de nouveaux défis techniques 
  et à contribuer à des projets concrets qui ont de l’impact.`;
  prime: string = "En recherche d'une alternance avec un rythme de 1 semaine école / 3 semaines entreprise - Eligible à la prime pouvant allé jusqu'à 5 000€"
  school: string = "Contact de l'école : Laurie Forgeron, laurie.forgeron@livecampus.fr, 07 56 28 93 69"
}
