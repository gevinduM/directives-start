import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlighDirective]'
})
export class BetterHighlighDirectiveDirective implements OnInit {

  @Input() defaultColor: string = 'transparent';
  @Input() highlighColor: string = 'blue';

  @HostBinding('style.backgroundColor') backgroundColor : string = 'transparent';

  constructor(private eleRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
    //this.renderer.setStyle(this.eleRef.nativeElement, 'backgroundColor', 'red');
  }

  @HostListener('mouseenter') mouseover(eventData : Event){
   //this.renderer.setStyle(this.eleRef.nativeElement, 'backgroundColor', 'red');
   this.backgroundColor = this.highlighColor;
  }

  @HostListener('mouseleave') mouseleave(eventData : Event){
    this.renderer.setStyle(this.eleRef.nativeElement, 'backgroundColor', 'transparent');
    this.backgroundColor = this.defaultColor;
  }

}
