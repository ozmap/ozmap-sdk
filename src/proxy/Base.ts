import { BaseModel } from '../interface/model';

abstract class Base<Model extends BaseModel, CreateDTO, UpdateDTO> {
  protected abstract get _route(): string;

  public abstract create(_model: CreateDTO): Promise<Model>;

  public abstract update(_model: UpdateDTO): Promise<void>;

  public abstract find(_ids: Array<string>): Promise<Array<Model>>;

  public abstract delete(_id: string, options: { cascade?: boolean }): Promise<void>;
}

export default Base;
