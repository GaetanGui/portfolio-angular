import { NgFor } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './app-projects.component.html',
  styleUrl: './app-projects.component.css'
})
export class AppProjectsComponent {
  selectedImage: string | null = null;
  isLink: boolean = false;
  projects = [
    {
      title: 'Projet FIMU : Site Web Administrateur',
      description: "Site administrateur permettant de piloter les données du festival",
      technologies: 'VueJS, CSS, NodeJS et MySQL',
      demo: '',
      github: '',
      details : [
        {
          img : 'assets/ArtisteListe.png',
          message: 'Liste des artistes avec leurs informations, filtrables et facilement modifiables pour simplifier le travail des organisateurs.'
        },
        {
          img: 'assets/DetailArtiste.png',
          message: 'Accès aux informations détaillées d’un artiste via le bouton de consultation.'
        },
        {
          img: 'assets/EditArtiste.png',
          message: 'Page d’édition permettant de corriger ou mettre à jour les données, synchronisées en temps réel avec l’application mobile.'
        },
        {
          img: 'assets/Planning.png',
          message: 'Visualisation claire du déroulement des concerts, avec possibilité de consulter le détail de chaque événement en un clic.'
        },
        {
          img: 'assets/ImportCSV.png',
          message: 'Import automatique des fichiers CSV préparés par les organisateurs, garantissant une continuité de leur méthode de travail et une mise à jour directe des données dans l’application mobile.'
        }
      ]
    },
    {
      title: 'Projet FIMU : Application mobile',
      description: 'Application Mobile IOS affichant les données du festival pour les visiteurs. A noter que dans cette application, contrairement au site administrateur aucunes modifications de données ne sera possible.',
      technologies: 'Swift',
      demo: '',
      github: '',
        details : [
          {
            img : 'assets/AcceuilMobile.png',
            message: "Page d’accueil avec annonces colorées selon leur importance et accès à une FAQ interactive."
          },
          {
            img : 'assets/ListeArtisteMobile.png',
            message: "Liste filtrable des artistes par pays, genre musical et jour de passage, avec codes couleurs pour identifier les genres."
          },
          {
            img: 'assets/DetailArtisteMobile.png',
            message: "Fiche détaillée d’un artiste avec ses réseaux sociaux et ses horaires de concert."
          },
          {
            img: 'assets/PlanningMobile.png',
            message: "Planning interactif avec filtres avancés (jours, artistes, genres) et légende des codes couleurs pour une lecture simplifiée."
          }
        ]
    }
  ];

  openImage(image: string) {
    this.selectedImage = image;
  }

  closeImage() {
    this.selectedImage = null;
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscape(event: KeyboardEvent) {
    this.closeImage();
  }
}
