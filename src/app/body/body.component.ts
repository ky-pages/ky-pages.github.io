import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  constructor() {
  }

  posts = [{title: 'Post 1', image: '../../assets/images/thumbnail.jpg'},
    {title: 'Post 2', image: '../../assets/images/thumbnail.jpg'},
    {title: 'Post 3', image: '../../assets/images/thumbnail.jpg'},
    {title: 'Post 4', image: '../../assets/images/thumbnail.jpg'},
    {title: 'Post 5', image: '../../assets/images/thumbnail.jpg'}];

  ngOnInit(): void {
  }

}
