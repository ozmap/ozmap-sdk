import Base from "./Base";
import IUser from "../interface/model/IUser";
import IPagination from "../interface/IPagination";
import IFilter from "../interface/IFilter";
import {EnumOperator} from "../interface/EnumOperator"
import IProject from "../interface/model/IProject";
import ObjectID from "bson-objectid";

class User extends Base {
	protected endpoint = 'users';
	
	create(model :IUser) :Promise<IUser> {
		return Promise.resolve(undefined);
	}
	
	delete(id :ObjectID) :Promise<IUser> {
		return Promise.resolve(undefined);
	}
	
	getAll() :Promise<IPagination<IUser>> {
		return this.restapi.fetchAllWithPagination<IUser>({model: this.endpoint});
	}
	
	getAllByFilter(filter :Array<IFilter>) :Promise<IPagination<IUser>> {
		return Promise.resolve(undefined);
	}
	
	getById(id :ObjectID) :Promise<IUser> {
		return this.restapi.readById({model: this.endpoint, model_id: id});
	}
	
	async getByEmail(email :string) :Promise<IUser> {
		let userpage = await this.restapi.read<IUser>({
			model: this.endpoint,
			filter: [{property: "email", operator: EnumOperator.EQUAL, value: email}]
		})
		return userpage.rows[0];
	}
	
	async getByUsername(userName :string) :Promise<IUser> {
		let userpage = await this.restapi.read<IUser>({
			model: this.endpoint,
			filter: [{property: "username", operator: EnumOperator.EQUAL, value: userName}]
		})
		return userpage.rows[0];
	}
	
	/**
	 * Return a list of projects of a given userId
	 * @param id Id of the user
	 */
	async getAllProjects(id :ObjectID) :Promise<Array<IProject>> {
		const user = await this.getById(id);
		let projectIds = [];
		for( let projectRole of user.projects){
			projectIds.push(projectRole.project);
		}
		return this.ozmapSdk.getProject().getByIds(projectIds);
	}
	
	update(model :IUser) :Promise<IUser> {
		return this.updateHelper<IUser>(model);
	}
	
	getByIds(ids :Array<ObjectID>) :Promise<Array<IUser>> {
		return this.byIdsHelper<IUser>(ids);
	}
}

export default User;
