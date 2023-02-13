import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../face-snap/models/face-snap.model';
import { FaceSnapService } from '../services/face-snap.services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss'],
})
export class SingleFaceSnapComponent {
  faceSnap!: FaceSnap;

  constructor(
    private faceSnapService: FaceSnapService,
    private route: ActivatedRoute
  ) {}

  HasSnapped!: boolean;
  buttonSnapp!: string;
  snapColor!: string;
  ngOnInit() {
    const faceSnapIds = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFaceSnapById(faceSnapIds);

    this.HasSnapped = false;
    this.buttonSnapp = 'Like!';
    this.snapColor = 'secondary';
  }

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
}
