type Numeric = string | number;

type Coords = Array<Numeric>;

type GenericFunction<A = unknown[], B = unknown> = (...args: A extends unknown[] ? A : [A]) => B;
