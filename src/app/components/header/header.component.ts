import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule],
  template: `
    <mat-toolbar color="primary">
      <span>In Loving Memory of Joy</span>
      <span class="spacer"></span>
      <nav>
        <a href="#home">Home</a>
        <a href="#timeline">Timeline</a>
        <a href="#gallery">Gallery</a>
        <a href="#memories">Memories</a>
      </nav>
    </mat-toolbar>
  `,
  styles: [
    `
      .spacer {
        flex: 1 1 auto;
      }
      nav a {
        color: white;
        text-decoration: none;
        margin-left: 1rem;
        &:hover {
          text-decoration: underline;
        }
      }
    `,
  ],
})
export class HeaderComponent {}
