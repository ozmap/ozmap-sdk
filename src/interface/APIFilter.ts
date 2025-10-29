import { z } from 'zod';
import ObjectID from 'bson-objectid';

import { FilterOperator } from './FilterOperator';

const ObjectIdSchema = z.custom<ObjectID>((val) => val instanceof ObjectID, {
  message: 'Invalid ObjectID',
});

const PolygonValueSchema = z.object({
  type: z.literal('Polygon'),
  coordinates: z.array(z.array(z.tuple([z.number(), z.number()]))),
});

const PolygonModelValueSchema = z.object({
  id: z.string(),
  model: z.enum(['project', 'region', 'horizontalCondominium']),
});

const DefaultValueSchema = z.union([
  z.string(),
  z.array(z.string()),
  z.array(ObjectIdSchema),
  ObjectIdSchema,
  z.null(),
  z.number(),
  z.boolean(),
]);

const PointValueSchema = z.union([
  z.object({ lat: z.coerce.number(), lng: z.coerce.number() }),
  z.object({ coords: z.tuple([z.coerce.number(), z.coerce.number()]) }),
  z.object({ coordinates: z.tuple([z.coerce.number(), z.coerce.number()]) }),
  z.object({ latitude: z.coerce.number(), longitude: z.coerce.number() }),
]);

const DefaultOperators = {
  EQUAL: FilterOperator.EQUAL,
  LIKE: FilterOperator.LIKE,
  NOT_EQUAL: FilterOperator.NOT_EQUAL,
  ALL: FilterOperator.ALL,
  EXISTS: FilterOperator.EXISTS,
  LESS: FilterOperator.LESS,
  LESS_OR_EQUAL: FilterOperator.LESS_OR_EQUAL,
  GREATER: FilterOperator.GREATER,
  GREATER_OR_EQUAL: FilterOperator.GREATER_OR_EQUAL,
  IN: FilterOperator.IN,
  NOT_IN: FilterOperator.NOT_IN,
} as const;

const DefaultEnumOperatorSchema = z.nativeEnum(DefaultOperators);

const SingleApiFilterSchema = z.union([
  z.object({
    property: z.string().trim(),
    operator: DefaultEnumOperatorSchema,
    value: DefaultValueSchema,
  }),
  z.object({
    property: z.string().trim(),
    operator: z.literal(FilterOperator.WITHIN),
    value: z.union([PolygonModelValueSchema, PolygonValueSchema]),
  }),
  z.object({
    property: z.string(),
    operator: z.literal(FilterOperator.POINT_INTERSECT),
    value: PointValueSchema,
  }),
  z.object({
    property: z.string().trim(),
    operator: z.literal(FilterOperator.NEAR),
    value: z.intersection(PointValueSchema, z.object({ radius: z.number().optional() })),
  }),
]);

const ApiFilterSchema = z.array(z.union([SingleApiFilterSchema, z.array(SingleApiFilterSchema)])).nullish();

type DefaultValue = z.infer<typeof DefaultValueSchema>;
type PolygonValue = z.infer<typeof PolygonValueSchema>;
type PolygonModelValue = z.infer<typeof PolygonModelValueSchema>;
type PointValue = z.infer<typeof PointValueSchema>;

type DefaultEnumOperator = z.infer<typeof DefaultEnumOperatorSchema>;

type ApiFilter =
  | {
      property: string;
    } & (
      | {
          operator: typeof FilterOperator.WITHIN;
          value: PolygonModelValue | PolygonValue;
        }
      | {
          operator: typeof FilterOperator.POINT_INTERSECT;
          value: PointValue;
        }
      | {
          operator: typeof FilterOperator.NEAR;
          value: PointValue & { radius?: number };
        }
      | {
          operator: DefaultEnumOperator;
          value: DefaultValue;
        }
    );

export { ApiFilter, ApiFilterSchema };
