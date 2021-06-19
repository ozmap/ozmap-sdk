import Base from "./Base";
import IPagination from "../interface/IPagination";
import IBox from "../interface/model/IBox";
import IFilter from "../interface/IFilter";
import ObjectID from "bson-objectid";

class Box extends Base {
	protected endpoint = 'boxes';
	
	async getById(boxId) :Promise<IBox> {
		return this.restapi.readById({model: this.endpoint, model_id: boxId});
	}
	
	async getAll() :Promise<IPagination<IBox>> {
		return this.restapi.fetchAllWithPagination<IBox>({model: this.endpoint});
	}
	
	create(model :IBox) :Promise<IBox> {
		return Promise.reject(undefined);
	}
	
	delete(id :ObjectID) :Promise<IBox> {
		return Promise.reject(undefined);
	}
	
	update(model :IBox) :Promise<IBox> {
		return Promise.reject(undefined);
	}
	
	getAllByFilter(filter :Array<IFilter>) :Promise<IPagination<IBox>> {
		return Promise.resolve(undefined);
	}
	
	getByIds(ids :Array<ObjectID>) :Promise<Array<IBox>> {
		return this.byIdsHelper<IBox>(ids);
	}
	
}

export default Box;