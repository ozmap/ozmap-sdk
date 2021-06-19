import Base from "./Base";
import IPagination from "../interface/IPagination";
import IProject from "../interface/model/IProject";
import IFilter from "../interface/IFilter";
import ObjectID from "bson-objectid";


class Project extends Base {
	protected endpoint = 'projects';
	
	async getById(projectId) :Promise<IProject> {
		return this.byIdHelper<IProject>(projectId);
	}
	
	async getAll() :Promise<IPagination<IProject>> {
		return this.restapi.fetchAllWithPagination<IProject>({model: this.endpoint});
	}
	
	async create(dados :IProject) :Promise<IProject> {
		return Promise.reject(undefined);
	}
	
	async delete(idModel :ObjectID) :Promise<IProject> {
		return Promise.reject(undefined);
	}
	
	async update(model :IProject) :Promise<IProject> {
		return Promise.reject(undefined);
	}
	
	getAllByFilter(filter :Array<IFilter>) :Promise<IPagination<IProject>> {
		return Promise.resolve(undefined);
	}
	
	getByIds(ids :Array<ObjectID>) :Promise<Array<IProject>> {
		return this.byIdsHelper<IProject>(ids);
	}
}

export default Project;