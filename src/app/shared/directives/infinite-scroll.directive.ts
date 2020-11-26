import {Directive, ElementRef, Input, Renderer2} from '@angular/core';
import {AppService} from '../services/app.service';

@Directive({
  selector: '[appInfiniteScroll]'
})
export class InfiniteScrollDirective {

  private readonly hostNative: HTMLElement;
  @Input() public scrollEndCallBack: ((...args: any) => void) | undefined;

  private previousTop = 0;

  constructor(private host: ElementRef, private renderer: Renderer2, private appService: AppService) {
    this.hostNative = host.nativeElement;
    document.addEventListener('scroll', (event) => this.onScroll(event), true);
  }

  private static defaultCallback(...args: any): void {
    console.log('Scroll End');
  }

  onScroll(event: any): void {
    if (event.target.offsetHeight + event.target.scrollTop >= (event.target.scrollHeight - 10)) {
      // visible height + pixel scrolled >= total height
      if (this.scrollEndCallBack != null) {
        this.scrollEndCallBack(event, this.hostNative);
      } else {
        InfiniteScrollDirective.defaultCallback();
      }
    }
  }


}
