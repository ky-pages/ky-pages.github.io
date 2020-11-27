import {Component, OnInit, Renderer2} from '@angular/core';
import {LocalRepositoryService} from '../shared/services/local-repository.service';
import {AppService} from '../shared/services/app.service';
import {PostModel} from '../shared/models/post.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private renderer: Renderer2, private localRepo: LocalRepositoryService, private appService: AppService) {
  }

  private menuHidden = true;
  private maxSuggestions = 5;
  public postSuggestions: PostModel[] = [];
  public searchedValue = '';

  socialLinks = {
    facebook: 'https://www.facebook.com/YassirKHL',
    github: 'https://github.com/khaldi-yass',
    linkedIn: 'https://www.linkedin.com/in/khaldiyassir',
    gmail: 'mailto:khaldi.yass@gmail.com',
    blogSource: 'https://github.com/ky-pages/ky-pages.github.io'
  };

  ngOnInit(): void {
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

  searchFocus(suggestions: HTMLDivElement, search: HTMLInputElement, show: boolean): void {
    if (show) {
      this.renderer.addClass(search, 'active');
      this.renderer.addClass(suggestions, 'active');
    } else {
      setTimeout(() => {
        this.renderer.removeClass(suggestions, 'active');
        this.renderer.removeClass(search, 'active');
      }, 100);
    }

  }

  suggest(): void {
    if (this.searchedValue.length > 3) {
      this.postSuggestions = this.appService.searchInsidePosts(this.searchedValue, this.localRepo.getPostRepo(), this.maxSuggestions);
      this.postSuggestions.push(new PostModel('Find more results for: ' + this.searchedValue, '', '', ''));
    }
  }
}
