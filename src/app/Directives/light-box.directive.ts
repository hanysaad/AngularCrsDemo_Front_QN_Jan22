import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[LightBox]'
})
export class LightBoxDirective implements OnChanges{
  // private elemRef;
  @Input('LightBox') highlightColor:string="yellow";
  @Input() defaultColor:string="darkblue";

  constructor(private elemRef: ElementRef) {
    // this.elemRef.nativeElement.style.border=`3px solid ${this.defaultColor}`;
   }

  ngOnChanges(): void {
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
