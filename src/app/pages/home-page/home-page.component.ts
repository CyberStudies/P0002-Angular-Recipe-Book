import { Component, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    const columns = this.el.nativeElement.querySelectorAll('.column');

    columns.forEach((column: HTMLElement) => {
      this.renderer.listen(column, 'scroll', () => {
        this.renderer.addClass(column, 'scrolling');
      });

      let timer: any = null;
      this.renderer.listen(column, 'scroll', () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          this.renderer.removeClass(column, 'scrolling');
        }, 150);
      });
    });
  }
}
