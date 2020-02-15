import Vector from "./Vector";
import Matrix from "./Matrix";
import Line from "./Line";
import Point from "./Point";
import Plane from "./Plane";

let l1 = new Line(new Point([1, 0, -1]), new Vector([-2, 3, 0]));

let point1 = new Point([9, 2, 2]);
let point2 = new Point([0, 0, 14]);
let point3 = new Point([13, 4, 0]);

let p1 = Plane.fromPoints(point1, point2, point3);

console.log(p1.findLinePlaneIntersect(l1));