import { Injectable } from '@angular/core';
import { FaceSnap } from '../face-snap/models/face-snap.model';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapService {
  MyFaceSnaps: FaceSnap[] = [
    new FaceSnap(
      1,
      'Une belle Peluche',
      "Je n'en ai jamais eu malheureusement",
      new Date(),
      156,
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      'paris'
    ),

    new FaceSnap(
      2,
      'Un beau paysage',
      "L'image ci c'est la magie ... elle est trop belle",
      new Date(),
      0,
      'https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-desktop-background-1691-1024x683.jpg',
      'Limoges'
    ),
    new FaceSnap(
      3,
      'Le Renard ',
      'Le Renard est-il variment un animal rusé ?',
      new Date(),
      0,
      'https://wallup.net/wp-content/uploads/2016/01/185765-fox-animals-wildlife.jpg'
    ),
    new FaceSnap(
      4,
      'La plage ',
      'Ideal pour passer ses vaccances',
      new Date(),
      0,
      'https://www.pixelstalk.net/wp-content/uploads/2016/07/Free-Download-Sunrise-Backgrounds.jpg'
    ),
    new FaceSnap(
      5,
      'Nouvelle Renault Clio ',
      'désignée la citadine la plus sûre en 2019',
      new Date(),
      0,
      'https://www.marokoto.com/storage/media/6001/responsive-images/renault-clio-min___medialibrary_original_1033_712.jpg'
    ),
  ];

  getAllFaceSnap(): FaceSnap[] {
    return this.MyFaceSnaps;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.MyFaceSnaps.find(
      (faceSnap) => faceSnap.id === faceSnapId
    );
    if (!faceSnap) throw new Error('FaceSnap not found');
    else return faceSnap;
  }

  Like_Unlike_FaceSnap(faceSnapId: number, Snaptype: 'like' | 'unlike'): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    Snaptype === 'like' ? faceSnap.snaps++ : faceSnap.snaps--;
  }
}
