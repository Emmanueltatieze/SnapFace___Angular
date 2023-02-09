import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent {
  @Input() faceSnap!: FaceSnap;

  HasSnapped = false;
  buttonSnapp = 'Like!';
  snapColor = 'secondary';

  onAddSnap() {
    if (!this.HasSnapped) {
      this.faceSnap.snaps++;
      this.buttonSnapp = 'Unlike!';
      this.HasSnapped = true;
      this.snapColor = 'primary';
    } else {
      this.faceSnap.snaps--;
      this.buttonSnapp = 'Like!';
      this.HasSnapped = false;
      this.snapColor = 'secondary';
    }
  }
}
