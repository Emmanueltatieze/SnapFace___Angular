export class FaceSnap {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public createdDate: Date,
    public snaps: number,
    public imageUrl: string,
    public SnapLocation?: string
  ) {}
}
