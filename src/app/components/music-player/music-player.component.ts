import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-music-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.css'],
})
export class MusicPlayerComponent {
  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;

  songs: string[] = [
    '/christina_perri_a_thousand_years.mp3',
    '/gnash_i_hate_u_i_love_u.mp3',
    '/On my way [SlowedReverb].mp3',
  ];

  currentSongIndex: number = 0;

  get currentSong() {
    return this.songs[this.currentSongIndex];
  }

  ngAfterViewInit() {
    this.audioPlayer.nativeElement.play();

    this.audioPlayer.nativeElement.addEventListener('ended', () => {
      this.nextSong();
    });
  }

  nextSong() {
    this.currentSongIndex = (this.currentSongIndex + 1) % this.songs.length;
    this.audioPlayer.nativeElement.src = this.currentSong;
    this.audioPlayer.nativeElement.play();
  }
}
