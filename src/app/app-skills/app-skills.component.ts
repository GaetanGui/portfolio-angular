import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor, TranslateModule, TranslatePipe],
  templateUrl: './app-skills.component.html',
  styleUrl: './app-skills.component.css'
})
export class AppSkillsComponent {
    skills = [
      [
        {       
          name: 'TypeScript (Angular)'
        },
        {
          name: 'HTML/CSS'
        },
        {
          name: 'JavaScript (NodeJS)'
        },
      ],
      [       
        {
          name: 'C# (.NET)'
        },
        {
          name: 'Python'
        },
        {
          name: 'PHP'
        },
        {
          name: 'C/C++'
        }
      ],
      [ 
        {
          name: 'PostgreSQL'
        },
        {
          name: 'MySQL'
        }
      ],
      [ 
        {
          name: 'Swift'
        },
        {
          name: 'Kotlin'
        }
      ],
    ]
}
