import { z } from 'zod';
import _ from 'lodash';
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
  z.object({ lat: z.number(), lng: z.number() }),
  z.object({ coords: z.tuple([z.number(), z.number()]) }),
  z.object({ coordinates: z.tuple([z.number(), z.number()]) }),
  z.object({ latitude: z.number(), longitude: z.number() }),
]);

const ApiFilterSchema = z.union([
  z.object({
    property: z.literal('string'),
    operator: z.nativeEnum(_.omit(FilterOperator, ['WITHIN', 'POINT_INTERSECT', 'NEAR'])),
    value: DefaultValueSchema,
  }),
  z.object({
    property: z.literal('string'),
    operator: z.literal(FilterOperator.WITHIN),
    value: z.union([PolygonModelValueSchema, PolygonValueSchema]),
  }),
  z.object({
    property: z.literal('string'),
    operator: z.literal(FilterOperator.POINT_INTERSECT),
    value: PointValueSchema,
  }),
  z.object({
    property: z.literal('string'),
    operator: z.literal(FilterOperator.NEAR),
    value: z.intersection(PointValueSchema, z.object({ radius: z.number().optional() })),
  }),
]);

type DefaultValue = z.infer<typeof DefaultValueSchema>;
type PolygonValue = z.infer<typeof PolygonValueSchema>;
type PolygonModelValue = z.infer<typeof PolygonModelValueSchema>;
type PointValue = z.infer<typeof PointValueSchema>;

type ApiFilter =
  | {
      property: 'string';
    } & (
      | {
          operator: Exclude<
            typeof FilterOperator,
            typeof FilterOperator.POINT_INTERSECT | typeof FilterOperator.WITHIN | typeof FilterOperator.NEAR
          >;
          value: DefaultValue;
        }
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
    );

export { ApiFilter, ApiFilterSchema };
