import Base from "./Base";
import IUser from "../interface/model/IUser";
import IPagination from "../interface/IPagination";
import IFilter from "../interface/IFilter";
import IProjectRole from "../interface/IProjectRole";
import {EnumOperator} from "../interface/EnumOperator"

class User extends Base {
	protected endpoint = 'users';
	
	create(model :IUser) :Promise<IUser> {
		return Promise.resolve(undefined);
	}
	
	delete(id :string) :Promise<IUser> {
		return Promise.resolve(undefined);
	}
	
	getAll() :Promise<IPagination<IUser>> {
		return this.restapi.fetchAllWithPagination<IUser>({model: this.endpoint});
	}
	
	getAllByFilter(filter :Array<IFilter>) :Promise<IPagination<IUser>> {
		return Promise.resolve(undefined);
	}
	
	getById(id :string) :Promise<IUser> {
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
	
	async getAllProjects(userName :string) :Promise<Array<IProjectRole>> {
		const user = await this.getByUsername(userName)
		return user.projects;
		
	}
	
	update(model :IUser) :Promise<IUser> {
		return this.updateHelper<IUser>(model);
	}
}

export default User;
