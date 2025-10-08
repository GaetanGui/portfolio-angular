import { Component } from '@angular/core';
import { TranslateDirective, TranslateModule, TranslatePipe, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule, MatMenuTrigger, MatMenuItem, MatMenu } from '@angular/material/menu'
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatMenuTrigger, MatMenuItem, MatMenuModule, NgFor, TranslatePipe],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.css'
})
export class AppHeaderComponent {
  constructor(private translate: TranslateService) {
    const savedLang = (typeof localStorage !== 'undefined' && localStorage.getItem('lang') )? localStorage.getItem('lang') ?? 'fr' : 'fr';

    this.translate.setDefaultLang(savedLang);
    this.translate.use(savedLang);

    this.selectedItem = savedLang.toUpperCase();
  }

  menuItems: string[] = ['FR', 'EN'];

  selectedItem: string = 'FR'; 

  onSelect(item: string) {
    this.selectedItem = item;
    const lang = item.toLowerCase();
    this.translate.use(lang); 
    localStorage.setItem('lang', lang); 
    window.location.reload();
  }

}
