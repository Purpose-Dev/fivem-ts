export class Point {
  constructor(public x: number = 0, public y: number = 0) {}

  public static parse(
    arg: [number, number] | { x: number; y: number } | string
  ): Point {
    let point = new Point();

    if (arg) {
      if (typeof arg === 'object') {
        if (Array.isArray(arg)) {
          if (arg.length === 2) {
            point = new Point(arg[0], arg[1]);
          }
        } else if (arg.x && arg.y) {
          point = new Point(arg.x, arg.y);
        }
      } else {
        if (arg.indexOf(',') !== -1) {
          const arr = arg.split(',');
          point = new Point(parseFloat(arr[0]), parseFloat(arr[1]));
        }
      }
    }

    return point;
  }
}
