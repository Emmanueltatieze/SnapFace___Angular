import { Component, OnInit, Input } from '@angular/core';
import { FaceSnapService } from '../services/face-snap.services';
import { FaceSnap } from './models/face-snap.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent {
  @Input() faceSnap!: FaceSnap;

  constructor(
    private faceSnapService: FaceSnapService,
    private router: Router
  ) {}

  HasSnapped = false;
  buttonSnapp = 'Like!';
  snapColor = 'secondary';

  onAddSnap() {
    if (!this.HasSnapped) {
      this.faceSnapService.Like_Unlike_FaceSnap(this.faceSnap.id, 'like');
      this.buttonSnapp = 'Unlike!';
      this.HasSnapped = true;
      this.snapColor = 'primary';
    } else {
      this.faceSnapService.Like_Unlike_FaceSnap(this.faceSnap.id, 'unlike');
      this.buttonSnapp = 'Like!';
      this.HasSnapped = false;
      this.snapColor = 'secondary';
    }
  }

  onViewfaceSnap() {
    this.router.navigateByUrl(`faceSnaps/${this.faceSnap.id}`);
  }
}
