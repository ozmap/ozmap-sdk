interface Point {
  lat?: number | undefined;
  lng?: number | undefined;
}

interface ParsedElements {
  A: Point;
  B: Point;
}

interface VincentyResult {
  distance?: number | undefined;
  error?: number | undefined;
  iterations?: number | undefined;
}
