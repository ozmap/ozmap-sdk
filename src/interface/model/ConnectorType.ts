import { z } from 'zod';
import { BaseModelSchema } from './BaseModel';

const ConnectorTypeDataSchema = z.object({
  code: z.string().trim(),
  brand: z.string().trim().nullish(),
  mold: z.string().trim().nullish(),
  description: z.string().trim().nullish(),
  loss: z.number(),
  isDrop: z.boolean(),
});

const ConnectorTypeSchema = BaseModelSchema.merge(ConnectorTypeDataSchema);
const CreateConnectorTypeDTOSchema = ConnectorTypeDataSchema.merge(z.object({ external_id: z.any().optional() }));
const UpdateConnectorTypeDTOSchema = ConnectorTypeDataSchema.merge(
  z.object({ external_id: z.any().optional() }),
).partial();

type ConnectorType = z.infer<typeof ConnectorTypeSchema>;
type CreateConnectorTypeDTO = z.infer<typeof CreateConnectorTypeDTOSchema>;
type UpdateConnectorTypeDTO = z.infer<typeof UpdateConnectorTypeDTOSchema>;

export {
  ConnectorTypeSchema,
  ConnectorType,
  CreateConnectorTypeDTOSchema,
  CreateConnectorTypeDTO,
  UpdateConnectorTypeDTOSchema,
  UpdateConnectorTypeDTO,
};
