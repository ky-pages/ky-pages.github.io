import {ElementRef, Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public scrollEmitter = new Subject<ElementRef>();

  constructor() {
  }
}
