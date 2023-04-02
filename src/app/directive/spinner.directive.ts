import { Directive, HostListener, Input, ElementRef, Renderer2 } from '@angular/core';
@Directive({
  selector: '[appSpinner]'
})

export class SpinnerDirective {
  @Input('appSpinner') loading: boolean = false;
    constructor(
    private el: ElementRef,
    private render:Renderer2
  ) { }
  
  ngOnChanges() {
    if (this.loading) {
      this.render.addClass(this.el.nativeElement, 'disabled');
      this.el.nativeElement.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...`;
    } else {
      this.render.removeClass(this.el.nativeElement, 'disabled');
      this.el.nativeElement.innerHTML = `Submit`;
      }
  }
 
}
