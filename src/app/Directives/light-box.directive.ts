import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[LightBox]'
})
export class LightBoxDirective {
  // private elemRef;
  @Input('LightBox') highlightColor:string="yellow";
  @Input() defaultColor:string="darkblue";
  constructor(private elemRef: ElementRef) {
    this.elemRef.nativeElement.style.border=`3px solid ${this.defaultColor}`;
   }

  @HostListener('mouseover') onMouseOver()
  {
    this.elemRef.nativeElement.style.border=`3px solid ${this.highlightColor}`
  }

  @HostListener('mouseout') onMouseOut()
  {
    this.elemRef.nativeElement.style.border=`3px solid ${this.defaultColor}`;
  }
}
