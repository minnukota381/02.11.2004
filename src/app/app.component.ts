import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { AboutComponent } from "./components/about/about.component";
import { GalleryComponent } from "./components/gallery/gallery.component";
import { FooterComponent } from "./components/footer/footer.component";
import { TimelineComponent } from "./components/timeline/timeline.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, AboutComponent, GalleryComponent, FooterComponent,TimelineComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Joy';
}
