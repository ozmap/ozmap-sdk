import Base from "./Base";
import IPagination from "../interface/IPagination";
import IProject from "../interface/model/IProject";
import IFilter from "../interface/IFilter";
import ObjectID from "bson-objectid";


class Project extends Base {
	protected endpoint = 'projects';
	
	async getById(projectId:ObjectID) :Promise<IProject> {
		return this.byIdHelper<IProject>(projectId);
	}
	
	async getAll() :Promise<IPagination<IProject>> {
		return this.getAllHelper<IProject>();
	}
	
	async create(model :IProject) :Promise<IProject> {
		return this.createHelper(model);
	}
	
	async delete(id :ObjectID) :Promise<IProject> {
		return this.deleteHelper(id);
	}
	
	async update(model :IProject) :Promise<void> {
		return this.updateHelper(model);
	}
	
	getAllByFilter(filter :Array<IFilter>) :Promise<IPagination<IProject>> {
		return this.getAllByFilterHelper<IProject>(filter);
	}
	
	getByIds(ids :Array<ObjectID>) :Promise<Array<IProject>> {
		return this.byIdsHelper<IProject>(ids);
	}
}

export default Project;