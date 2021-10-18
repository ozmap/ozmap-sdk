import Base from './Base';
import IPagination from '../interface/IPagination';
import IProspect from '../interface/model/IProspect';
import IFilter from '../interface/IFilter';
import ObjectID from 'bson-objectid';
import { EnumOperator } from '../interface/EnumOperator';
import IReadQueryInput from '../interface/IReadQueryInput';

class Prospect extends Base {
	protected endpoint = 'properties';
	
	async getById(prospectId: ObjectID | string): Promise<IProspect> {
		return this.byIdHelper<IProspect>(prospectId);
	}
	
	async getAll(): Promise<IPagination<IProspect>> {
		return this.getAllHelper<IProspect>();
	}
	
	create(model: IProspect): Promise<IProspect> {
		return this.createHelper<IProspect>(model);
	}
	
	delete(id: ObjectID | string): Promise<IProspect> {
		return this.deleteHelper<IProspect>(id);
	}
	
	update(model: IProspect): Promise<void> {
		return this.updateHelper<IProspect>(model);
	}
	
	getAllByFilter(filter: Array<IFilter>): Promise<IPagination<IProspect>> {
		return this.getAllByFilterHelper<IProspect>(filter);
	}
	
	getAllByQuery(
		readQueryInput: IReadQueryInput,
	): Promise<IPagination<IProspect>> {
		return this.getAllByQueryHelper<IProspect>(readQueryInput);
	}
	
	getByIds(ids: Array<ObjectID> | Array<string>): Promise<Array<IProspect>> {
		return this.byIdsHelper<IProspect>(ids);
	}
}

export default Prospect;
