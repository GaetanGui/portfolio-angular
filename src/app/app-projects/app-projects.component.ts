import { NgFor } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { NgIf } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor, NgIf, TranslatePipe],
  templateUrl: './app-projects.component.html',
  styleUrl: './app-projects.component.css'
})
export class AppProjectsComponent {
  selectedImage: string | null = null;
  isLink: boolean = false;
  projects = [
    {
      title: 'projects.fimuWeb.title',
      description: "projects.fimuWeb.description",
      technologies: 'projects.fimuWeb.technologies',
      demo: '',
      github: '',
      details : [
        {
          img : 'assets/ArtisteListe.png',
          message: 'projects.fimuWeb.details.message1'
        },
        {
          img: 'assets/DetailArtiste.png',
          message: 'projects.fimuWeb.details.message2'
        },
        {
          img: 'assets/EditArtiste.png',
          message: 'projects.fimuWeb.details.message3'
        },
        {
          img: 'assets/Planning.png',
          message: 'projects.fimuWeb.details.message4'
        },
        {
          img: 'assets/ImportCSV.png',
          message: 'projects.fimuWeb.details.message5'
        }
      ]
    },
    {
      title: 'projects.fimuMobile.title',
      description: 'projects.fimuMobile.description',
      technologies: 'projects.fimuMobile.technologies',
      demo: '',
      github: '',
      details : [
        {
          img : 'assets/AcceuilMobile.png',
          message: "projects.fimuMobile.details.message1"
        },
        {
          img : 'assets/ListeArtisteMobile.png',
          message: "projects.fimuMobile.details.message2"
        },
        {
          img: 'assets/DetailArtisteMobile.png',
          message: "projects.fimuMobile.details.message3"
        },
        {
          img: 'assets/PlanningMobile.png',
          message: "projects.fimuMobile.details.message4"
        }
      ]
    },
    {
      title: 'projects.portfolio.title',
      description: "projects.portfolio.description",
      technologies: 'projects.portfolio.technologies',
      github: 'projects.portfolio.github'
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
