import BaseOld from './BaseOld';
import Pagination from '../interface/Pagination';
import IFilter from '../interface/IFilter';
import ObjectID from 'bson-objectid';
import IReadQueryInput from '../interface/IReadQueryInput';
import IBaseBox from '../interface/model/IBaseBox';

class Building extends BaseOld {
  protected endpoint = 'buildings';

  async getById(buildingId: ObjectID): Promise<IBaseBox> {
    return this.byIdHelper<IBaseBox>(buildingId);
  }

  async getAll(): Promise<Pagination<IBaseBox>> {
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

  getAllByFilter(filter: Array<IFilter>): Promise<Pagination<IBaseBox>> {
    return this.getAllByFilterHelper<IBaseBox>(filter);
  }

  getAllByQuery(readQueryInput: IReadQueryInput): Promise<Pagination<IBaseBox>> {
    return this.getAllByQueryHelper<IBaseBox>(readQueryInput);
  }

  getByIds(ids: Array<ObjectID>): Promise<Array<IBaseBox>> {
    return this.byIdsHelper<IBaseBox>(ids);
  }
}

export default Building;
