import { Directive, ElementRef,HostListener, Input } from '@angular/core';
  
@Directive({
  selector: '[pkmn-border-card]'
})
export class BorderCardDirective {
    
    private initialColor: string = "#f5f5f5";
    private defaultColor: string = "#009688"
    private defaultHeight: number = 200;

    constructor(private el: ElementRef) {
        this.setBorder(this.initialColor);
        this.setHeight(this.defaultHeight);
    }

    @Input('pkmn-border-card') borderColor : string;//alias
    // @Input() pkmn-border-card: string; //sans alias

    @HostListener('mouseenter') onMouseEnter(){
        this.setBorder(this.borderColor || this.defaultColor);
    }

    @HostListener('mouseleave') onMouseLeave(){
        this.setBorder(this.initialColor);
    }
  
    private setBorder(color: string) {
        let border = 'solid 4px ' + color;
        this.el.nativeElement.style.border = border;
    }
  
    private setHeight(height: number) {
        this.el.nativeElement.style.height = height + 'px';
    }
}