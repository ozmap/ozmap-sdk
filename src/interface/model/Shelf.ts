import { z } from 'zod';
import { stringOrObjectId } from './BaseModel';
import { NetworkConnectorDataSchema, NetworkConnectorKind, NetworkConnectorSchema } from './NetworkConnector';
import { ShelfTypeSchema } from './ShelfType';
import { NetworkConnectableSchema } from './NetworkConnectable';

const ShelfDataSchema = NetworkConnectorDataSchema.merge(
  z.object({
    kind: z.literal(NetworkConnectorKind.SHELF),
    connectables: z.tuple([z.null()]).rest(z.array(stringOrObjectId)),
    tags: z.array(stringOrObjectId).default([]),
    shelfType: stringOrObjectId,
  }),
);

const ShelfSchema = NetworkConnectorSchema.merge(ShelfDataSchema).merge(
  z.object({
    shelfType: z.union([stringOrObjectId, ShelfTypeSchema]),
    connectables: z
      .tuple([z.null()])
      .rest(z.union([z.array(stringOrObjectId.nullable()), z.array(NetworkConnectableSchema.nullable())])),
  }),
);

const CreateShelfDTOSchema = ShelfDataSchema.partial({ attenuation: true, name: true })
  .omit({
    project: true,
    kind: true,
    connectables: true,
  })
  .merge(z.object({ external_id: z.any().optional() }));
const UpdateShelfDTOSchema = ShelfDataSchema.omit({ kind: true, project: true, connectables: true })
  .merge(z.object({ external_id: z.any() }))
  .partial();

type Shelf = z.infer<typeof ShelfSchema>;
type CreateShelfDTO = z.infer<typeof CreateShelfDTOSchema>;
type UpdateShelfDTO = z.infer<typeof UpdateShelfDTOSchema>;

export { ShelfSchema, Shelf, CreateShelfDTOSchema, CreateShelfDTO, UpdateShelfDTOSchema, UpdateShelfDTO };
