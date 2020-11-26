import {Injectable} from '@angular/core';
import headerMenuRepository from '../../../assets/local-repository/header-menu.json';
import postsRepository from '../../../assets/local-repository/posts.json';
import {HeaderMenuModel} from '../models/header-menu.model';
import {PostModel} from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class LocalRepositoryService {

  private headerRepo: HeaderMenuModel[] = headerMenuRepository;
  private postRepo: PostModel[] = postsRepository;

  constructor() {
  }

  public getPostRepo(): PostModel[] {
    return this.postRepo;
  }

  public getHeaderRepo(): HeaderMenuModel[] {
    return this.headerRepo;
  }
}
