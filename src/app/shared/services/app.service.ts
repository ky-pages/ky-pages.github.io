import {ElementRef, Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {PostModel} from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public scrollEmitter = new Subject<ElementRef>();

  constructor() {
  }

  public searchInsidePosts(searchedValue: string, posts: PostModel[], maxResults: number): PostModel[] {
    const result: PostModel[] = [];
    const tags = searchedValue.toLowerCase().split(' ');
    for (const tag of tags) {
      for (const post of posts) {
        if (post.link.toLowerCase().includes(tag) || post.title.toLowerCase().includes(tag)
          || post.description.toLowerCase().includes(tag)) {
          result.push(post);
          if (result.length >= maxResults) {
            return result;
          }
        }
      }
    }
    return result;
  }
}
