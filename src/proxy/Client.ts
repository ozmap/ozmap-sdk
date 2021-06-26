import Base from './Base';
import IPagination from '../interface/IPagination';
import IClient from '../interface/model/IClient';
import IFilter from '../interface/IFilter';
import ObjectID from 'bson-objectid';

class Client extends Base {
    protected endpoint = 'ftth-clients';

    async getById(clientId: ObjectID): Promise<IClient> {
        return this.byIdHelper<IClient>(clientId);
    }

    async getAll(): Promise<IPagination<IClient>> {
        return this.getAllHelper<IClient>();
    }

    create(model: IClient): Promise<IClient> {
        return this.createHelper<IClient>(model);
    }

    delete(id: ObjectID): Promise<IClient> {
        return this.deleteHelper<IClient>(id);
    }

    update(model: IClient): Promise<void> {
        return this.updateHelper<IClient>(model);
    }

    getAllByFilter(filter: Array<IFilter>): Promise<IPagination<IClient>> {
        return this.getAllByFilterHelper<IClient>(filter);
    }

    getByIds(ids: Array<ObjectID>): Promise<Array<IClient>> {
        return this.byIdsHelper<IClient>(ids);
    }

}

export default Client;
