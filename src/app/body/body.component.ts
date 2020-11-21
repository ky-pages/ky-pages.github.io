import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  constructor() {
  }

  posts = ['Post 1', 'Post 2', 'Post 3', 'Post 4', 'Post 1', 'Post 2', 'Post 3', 'Post 4', 'Post 1', 'Post 2'];

  ngOnInit(): void {
  }

}
