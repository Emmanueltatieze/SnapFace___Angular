import { Injectable } from '@angular/core';
import { FaceSnap } from '../face-snap/models/face-snap.model';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapService {
  MyFaceSnaps: FaceSnap[] = [
    new FaceSnap(
      'Une belle Peluche',
      "Je n'en ai jamais eu malheureusement",
      new Date(),
      156,
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      'paris'
    ),

    new FaceSnap(
      'Un beau paysage',
      "L'image ci c'est la magie ... elle est trop belle",
      new Date(),
      0,
      'https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-desktop-background-1691-1024x683.jpg',
      'Limoges'
    ),
    new FaceSnap(
      'Le Renard ',
      'Le Renard est-il variment un animal rusé ?',
      new Date(),
      0,
      'https://wallup.net/wp-content/uploads/2016/01/185765-fox-animals-wildlife.jpg'
    ),
  ];
}
