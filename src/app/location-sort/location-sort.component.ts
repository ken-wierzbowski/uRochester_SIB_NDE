import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-nde-locations',
  templateUrl: './location-sort.component.html'
})
export class LocationsComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
  
    const container = document.querySelector('nde-locations-container');
    if (!container) return;
  
    const locationElements: HTMLElement[] = Array.from(
      container.querySelectorAll('nde-location')
    );
  
    const sorted = locationElements
      .map((el) => ({
        el,
        title: el.querySelector('.getit-library-title')?.textContent?.trim() || ''
      }))
      .sort((a, b) => {
        const aIsSibley = /sibley/i.test(a.title);
        const bIsSibley = /sibley/i.test(b.title);
  
        if (aIsSibley && !bIsSibley) return -1; // a comes first
        if (!aIsSibley && bIsSibley) return 1;  // b comes first
  
        return a.title.localeCompare(b.title); // regular A–Z otherwise
      });
  
    for (const { el } of sorted) {
      container.appendChild(el); // move elements in new order
    }
  }
}