
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crackers-content',
  imports: [ FormsModule ],
  standalone:true,
  templateUrl: './crackers-content.html',
  styleUrl: './crackers-content.css'
})
export class CrackersContent {

  playVideo(event: MouseEvent) {
  const card = event.currentTarget as HTMLElement;
  const video = card.querySelector('.hover-video') as HTMLVideoElement;
  if (video) video.play();
}

pauseVideo(event: MouseEvent) {
  const card = event.currentTarget as HTMLElement;
  const video = card.querySelector('.hover-video') as HTMLVideoElement;
  if (video) {
    video.pause();
    video.currentTime = 0;
  }
}
}
