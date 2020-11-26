import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appRipple]'
})
export class RippleDirective {

  private readonly hostNative: HTMLElement;
  @Input() public rippleColor = 'white';
  @Input() public rippleAnimationDuration = 1000;
  @Input() public rippleType: 'overlay' | 'append' = 'append';

  constructor(private host: ElementRef, private renderer: Renderer2) {
    this.hostNative = host.nativeElement;
  }

  @HostListener('click', ['$event']) ripple(e: MouseEvent): void {
    const rect = this.hostNative.getBoundingClientRect();
    let host: HTMLElement;
    if (this.rippleType === 'overlay') {
      host = this.getOverlayDiv(this.hostNative.parentElement, rect);
    } else {
      host = this.hostNative;
    }
    const ripple = this.getRippleSpan(e.clientX - rect.left, e.clientY - rect.top);
    this.renderer.addClass(host, 'ripple-host');
    host.appendChild(ripple);
    setTimeout(() => this.renderer.removeChild(host, ripple), this.rippleAnimationDuration);
  }

  private getRippleSpan(x: number, y: number): HTMLSpanElement {
    const ripple: HTMLSpanElement = document.createElement('span');
    this.renderer.addClass(ripple, 'ripple');
    this.renderer.setStyle(ripple, 'left', x + 'px');
    this.renderer.setStyle(ripple, 'top', y + 'px');
    this.renderer.setStyle(ripple, 'background', this.rippleColor);
    this.renderer.setStyle(ripple, 'animation-duration', this.rippleAnimationDuration + 'ms');
    return ripple;
  }

  private getOverlayDiv(parent: HTMLElement | null, rect: DOMRect): HTMLDivElement {
    const div: HTMLDivElement = document.createElement('div');
    this.renderer.setStyle(div, 'left', rect.left + window.scrollX + 'px');
    this.renderer.setStyle(div, 'top', rect.top + window.scrollY + 'px');
    this.renderer.setStyle(div, 'width', rect.width + 'px');
    this.renderer.setStyle(div, 'height', rect.height + 'px');
    this.renderer.setStyle(div, 'position', 'absolute');
    if (parent != null) {
      parent.appendChild(div);
    }
    setTimeout(() => this.renderer.removeChild(parent, div), this.rippleAnimationDuration);
    return div;
  }
}


