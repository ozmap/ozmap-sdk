type Coords = Array<string | number>;

type GenericFunction<A = unknown[], B = unknown> = (...args: A extends unknown[] ? A : [A]) => B;
