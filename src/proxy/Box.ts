import Base from './Base';
import IPagination from '../interface/IPagination';
import IBox from '../interface/model/IBox';
import IFilter from '../interface/IFilter';
import ObjectID from 'bson-objectid';
import IReadQueryInput from '../interface/IReadQueryInput';


class Box extends Base {
    protected endpoint = 'boxes';

    async getById(boxId :ObjectID) :Promise<IBox> {
        return this.byIdHelper<IBox>(boxId);
    }

    async getAll() :Promise<IPagination<IBox>> {
        return this.getAllHelper<IBox>();
    }

    create(model :IBox) :Promise<IBox> {
        return this.createHelper<IBox>(model);
    }

    delete(id :ObjectID) :Promise<IBox> {
        return this.deleteHelper<IBox>(id);
    }

    update(model :IBox) :Promise<void> {
        return this.updateHelper<IBox>(model);
    }

    getAllByFilter(filter :Array<IFilter>) :Promise<IPagination<IBox>> {
        return this.getAllByFilterHelper<IBox>(filter);
    }

    getByIds(ids :Array<ObjectID>) :Promise<Array<IBox>> {
        return this.byIdsHelper<IBox>(ids);
    }

    getAllByQuery(readQueryInput :IReadQueryInput) :Promise<IPagination<IBox>> {
        return this.getAllByQueryHelper<IBox>(readQueryInput);
    }

}

export default Box;
