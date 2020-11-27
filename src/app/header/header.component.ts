import {Component, OnInit, Renderer2} from '@angular/core';
import {LocalRepositoryService} from '../shared/services/local-repository.service';
import {SearchSuggestionModel} from '../shared/models/header-menu.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private renderer: Renderer2, private localRepo: LocalRepositoryService) {
  }

  private menuHidden = true;
  public searchSuggestions: SearchSuggestionModel[] = [];

  socialLinks = {
    facebook: 'https://www.facebook.com/YassirKHL',
    github: 'https://github.com/khaldi-yass',
    linkedIn: 'https://www.linkedin.com/in/khaldiyassir',
    gmail: 'mailto:khaldi.yass@gmail.com',
    blogSource: 'https://github.com/ky-pages/ky-pages.github.io'
  };

  ngOnInit(): void {
    this.searchSuggestions.push(new SearchSuggestionModel('Suggestion', '#'));
    this.searchSuggestions.push(new SearchSuggestionModel('Suggestion', '#'));
    this.searchSuggestions.push(new SearchSuggestionModel('Suggestion', '#'));
    this.searchSuggestions.push(new SearchSuggestionModel('Suggestion', '#'));
    this.searchSuggestions.push(new SearchSuggestionModel('Suggestion', '#'));
  }


  toggleMenu(rowMenu: HTMLDivElement, toggle: HTMLDivElement): void {
    if (this.menuHidden) {
      this.renderer.removeClass(rowMenu, 'hideMenu');
      this.renderer.addClass(toggle, 'toggled');
    } else {
      this.renderer.addClass(rowMenu, 'hideMenu');
      this.renderer.removeClass(toggle, 'toggled');
    }
    this.menuHidden = !this.menuHidden;
  }

  searchFocus(suggestions: HTMLDivElement, show: boolean): void {
    show ? this.renderer.addClass(suggestions, 'active') : this.renderer.removeClass(suggestions, 'active');
  }
}
