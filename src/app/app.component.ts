import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeaderComponent } from "./app-header/app-header.component";
import { AppHeroComponent } from "./app-hero/app-hero.component";
import { AppAboutComponent } from "./app-about/app-about.component";
import { AppSkillsComponent } from "./app-skills/app-skills.component";
import { AppProjectsComponent } from "./app-projects/app-projects.component";
import { AppContactComponent } from "./app-contact/app-contact.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppHeaderComponent, AppHeroComponent, AppAboutComponent, AppSkillsComponent, AppProjectsComponent, AppContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio-angular';
}
