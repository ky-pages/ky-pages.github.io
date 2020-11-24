import {Component, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private renderer: Renderer2) {
  }

  private menuHidden = true;

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
    console.log(toggle);
    if (this.menuHidden) {
      this.renderer.removeClass(rowMenu, 'hideMenu');
      this.renderer.addClass(toggle, 'toggled');
    } else {
      this.renderer.addClass(rowMenu, 'hideMenu');
      this.renderer.removeClass(toggle, 'toggled');
    }
    this.menuHidden = !this.menuHidden;
  }
}
