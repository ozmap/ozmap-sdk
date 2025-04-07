import { z } from 'zod';
import { BaseModelSchema } from './BaseModel';
import { BaseBoxDataSchema, BaseBoxKind } from './BaseBox';

const CableStubDataSchema = BaseBoxDataSchema.omit({ kind: true }).merge(
  z.object({
    kind: z.literal(BaseBoxKind.CABLE_STUB),
  }),
);

const CableStubSchema = BaseModelSchema.merge(CableStubDataSchema);

type CableStub = z.infer<typeof CableStubSchema>;

export { CableStubSchema, CableStub };
