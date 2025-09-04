import { z } from 'zod';
import { BaseModelSchema, stringOrObjectId } from './BaseModel';
import { TagSchema } from './Tag';

enum FTTHClientStatus {
  OK = 0,
  ERROR = 1,
}

const FTTHClientDataSchema = z.object({
  tags: z.array(stringOrObjectId).default([]),
  code: z.string().trim(),
  name: z.string().trim().optional(),
  observation: z.string().trim().optional(),
  implanted: z.boolean().default(false),
  certified: z.boolean().default(false),
  status: z.nativeEnum(FTTHClientStatus).default(FTTHClientStatus.OK),
  cpe: z.any().optional(),
  onu: z
    .object({
      user_PPPoE: z.string().trim(),
      serial_number: z.string().trim(),
      mac_address: z.string().trim(),
    })
    .default({
      user_PPPoE: '',
      serial_number: '',
      mac_address: '',
    }),
});

const FTTHClientSchema = BaseModelSchema.merge(FTTHClientDataSchema).merge(
  z.object({
    kind: z.literal('FTTHClient'),
    tags: z.union([z.array(stringOrObjectId), z.array(TagSchema)]),
  }),
);
const CreateFTTHClientDTOSchema = FTTHClientDataSchema.partial({
  tags: true,
  code: true,
  certified: true,
  onu: true,
  status: true,
  cpe: true,
}).merge(z.object({ external_id: z.any().optional() }));
const UpdateFTTHClientDTOSchema = FTTHClientDataSchema.merge(z.object({ external_id: z.any().optional() })).partial();
const BatchUpdateFTTHClientDTOSchema = FTTHClientDataSchema.pick({
  certified: true,
  implanted: true,
  status: true,
}).partial();

type FTTHClient = z.infer<typeof FTTHClientSchema>;
type CreateFTTHClientDTO = z.infer<typeof CreateFTTHClientDTOSchema>;
type UpdateFTTHClientDTO = z.infer<typeof UpdateFTTHClientDTOSchema>;
type BatchUpdateFTTHClientDTO = z.infer<typeof BatchUpdateFTTHClientDTOSchema>;

export {
  FTTHClientStatus,
  FTTHClientSchema,
  FTTHClient,
  CreateFTTHClientDTOSchema,
  CreateFTTHClientDTO,
  UpdateFTTHClientDTOSchema,
  UpdateFTTHClientDTO,
  BatchUpdateFTTHClientDTOSchema,
  BatchUpdateFTTHClientDTO,
};
