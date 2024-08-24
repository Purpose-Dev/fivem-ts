export class PointF {
    constructor(
        public x: number,
        public y: number,
        public z: number,
    ) {}

    public static empty(): PointF {
        return new PointF(0, 0, 0);
    }
}
