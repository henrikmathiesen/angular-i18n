import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
    standalone: true,
    selector: '[appMoveUpOrDown]',
})
export class MoveUpOrDownDirective implements OnInit {
    @Input() upOrDown = 'up';
    @Input() px = '2';

    constructor(private el: ElementRef) { }

    ngOnInit(): void {
        this.el.nativeElement.style.position = 'relative';
        this.el.nativeElement.style.top = (this.upOrDown === 'up' ? '-' : '') + this.px + 'px';
    }

    /* 
        https://angular.io/guide/attribute-directives
    
        Notes: 
            Input with the same name as directive (appMoveUpOrDown) must have an incomming value. Can not have default value.
            Like this [appMoveUpOrDown]="'up'"

        Usage:
            Default (move up 2px):      <span appMoveUpOrDown></span>
            Move down 20px:             <span appMoveUpOrDown upOrDown="down" px="20"></span>
    */
}
