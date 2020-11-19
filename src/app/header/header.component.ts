import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  socialLinks = {
    facebook: 'https://www.facebook.com/YassirKHL',
    github: 'https://github.com/khaldi-yass',
    linkedIn: 'https://www.linkedin.com/in/khaldiyassir',
    gmail: 'mailto:khaldi.yass@gmail.com'
  };

  ngOnInit(): void {
  }

}
