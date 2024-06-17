import { z } from 'zod';
import { BaseModelSchema } from './BaseModel';

const FiberProfileDataSchema = z.object({
  name: z.string().trim(),
  defaultFiberColor: z.string().default('white'),
  defaultTubeColor: z.string().default('white'),
  fibers: z.array(z.object({ color: z.string().trim() })),
  tubes: z.array(z.object({ color: z.string().trim() })),
});

const FiberProfileSchema = BaseModelSchema.merge(FiberProfileDataSchema);
const CreateFiberProfileDTOSchema = FiberProfileDataSchema.merge(z.object({ external_id: z.any().optional() })).partial(
  { defaultFiberColor: true, defaultTubeColor: true },
);
const UpdateFiberProfileDTOSchema = FiberProfileDataSchema.merge(
  z.object({ external_id: z.any().optional() }),
).partial();

type FiberProfile = z.infer<typeof FiberProfileSchema>;
type CreateFiberProfileDTO = z.infer<typeof CreateFiberProfileDTOSchema>;
type UpdateFiberProfileDTO = z.infer<typeof UpdateFiberProfileDTOSchema>;

export {
  FiberProfileSchema,
  FiberProfile,
  CreateFiberProfileDTOSchema,
  CreateFiberProfileDTO,
  UpdateFiberProfileDTOSchema,
  UpdateFiberProfileDTO,
};
