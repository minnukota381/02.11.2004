import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
  standalone: true,
  imports: [CommonModule], // Add this line
})
export class TimelineComponent {
  timelineEvents = [
    {
      date: '02-11-2004',
      title: 'Birth',
      description: 'The day Joy was born.',
    },
    {
      date: '15-08-2009',
      title: 'First Day of School',
      description: 'Joy’s exciting first day at school.',
    },
    // Add more events here
  ];
}
