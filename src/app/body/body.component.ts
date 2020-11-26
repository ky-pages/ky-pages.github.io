import {Component, OnInit} from '@angular/core';
import {LocalRepositoryService} from '../shared/services/local-repository.service';
import {PostModel} from '../shared/models/post.model';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  public blogPosts: PostModel[] = [];
  private sliceFrom = 0;
  private step = 9;

  constructor(private localRepo: LocalRepositoryService) {
  }

  ngOnInit(): void {
    this.feedPosts();
  }

  public feedPosts(): void {
    console.log('feeding', this.blogPosts);
    this.blogPosts = this.blogPosts.concat(this.getNextPosts());
    console.log(this.blogPosts);
  }

  private getNextPosts(): PostModel[] {
    let posts: PostModel[];
    const sliceTo = this.sliceFrom + this.step;
    if (this.sliceFrom < this.localRepo.getPostRepo().length) {
      posts = this.localRepo.getPostRepo().slice(this.sliceFrom, sliceTo);
      console.log('posts: ', this.sliceFrom, sliceTo);
    } else {
      posts = [];
    }
    this.sliceFrom = sliceTo;
    return posts;
  }
}
