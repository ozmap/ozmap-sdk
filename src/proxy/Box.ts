import Base from './Base';
import IPagination from '../interface/IPagination';
import IBaseBox from '../interface/model/IBaseBox';
import IFilter from '../interface/IFilter';
import ObjectID from 'bson-objectid';
import IReadQueryInput from '../interface/IReadQueryInput';

class Box extends Base {
  protected endpoint = 'boxes';

  async getById(boxId: ObjectID): Promise<IBaseBox> {
    return this.byIdHelper<IBaseBox>(boxId);
  }

  async getAll(): Promise<IPagination<IBaseBox>> {
    return this.getAllHelper<IBaseBox>();
  }

  create(model: IBaseBox): Promise<IBaseBox> {
    return this.createHelper<IBaseBox>(model);
  }

  delete(id: ObjectID): Promise<IBaseBox> {
    return this.deleteHelper<IBaseBox>(id);
  }

  update(model: IBaseBox): Promise<void> {
    return this.updateHelper(model);
  }

  getAllByFilter(filter: Array<IFilter>): Promise<IPagination<IBaseBox>> {
    return this.getAllByFilterHelper<IBaseBox>(filter);
  }

  getByIds(ids: Array<ObjectID>): Promise<Array<IBaseBox>> {
    return this.byIdsHelper<IBaseBox>(ids);
  }

  getAllByQuery(readQueryInput: IReadQueryInput): Promise<IPagination<IBaseBox>> {
    return this.getAllByQueryHelper<IBaseBox>(readQueryInput);
  }
}

export default Box;
