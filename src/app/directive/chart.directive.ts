import { Directive, ElementRef, HostBinding, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from "@angular/core";

@Directive({
    selector : '[chartDir]'
})

export class chartDirective implements OnInit,OnChanges{
    @Input() chartValue :any;
    @HostBinding('style.color') color ='orange'
    
    @HostBinding('style.background-image') bgimg =`conic-gradient(
        orange 90deg,
        red 0
        )`;
        
        // constructor(private eleRef : ElementRef,private rander : Renderer2){}
        ngOnInit(): void {
// this.color = 'red'
            // this.color = this.chartValue
            this.bgimg = this.chartValue
            // console.log(this.chartValue)
        }
        ngOnChanges(changes: SimpleChanges): void {
            // this.color = this.chartValue
            this.bgimg = this.chartValue
            // console.log(this.chartValue)

        }

}