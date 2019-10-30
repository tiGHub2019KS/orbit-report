import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';


@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  satCounts: string[] = ['Total', 'Space Debris', 'Communication', 'Probe', 'Positioning', 'Space Station', 'Telescope'];

  @Input() satellites: Satellite[];
  constructor() { }

  ngOnInit() {
  }

  typeCount(satCount: string): number {
    if(satCount === 'Total') {
      return this.satellites.length;
    } else {
      let count: number = 0;
      for(let i in this.satellites) {
        if(this.satellites[i].type === satCount) {
          count++;
        }
      }
      return count;
    }
  }

}
