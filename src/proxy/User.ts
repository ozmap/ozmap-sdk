import Base from "./Base";
import IUser from "../interface/model/IUser";
import IPagination from "../interface/IPagination";
import IFilter from "../interface/IFilter";
import IProjectRole from "../interface/IProjectRole";
import {EnumOperator} from "./../interface/EnumOperator"

class User extends Base {
    protected endpoint = 'users';


    // setNewPassword(model: IUser) :Promise<IUser>{
    //     return Promise.resolve(model);
    // }

    create(model: IUser): Promise<IUser> {
        return Promise.resolve(undefined);
    }

    delete(id: string): Promise<IUser> {
        return Promise.resolve(undefined);
    }

    getAll(): Promise<IPagination<IUser>> {
        return this.restapi.fetchAllWithPagination<IUser>({model: this.endpoint});
    }

    getAllByFilter(filter: Array<IFilter>): Promise<IPagination<IUser>> {
        return Promise.resolve(undefined);
    }

    getById(id: string): Promise<IUser> {
        return this.restapi.readById({model: this.endpoint, model_id: id});
    }

    getByEmail(email: string): Promise<IUser> {
        return this.restapi.read({
            model: this.endpoint,
            filter: [{property: "email", operator: EnumOperator.EQUAL, value: email}]
        })
    }

    getByUsername(userName: string): Promise<IUser> {
        return this.restapi.read({
            model: this.endpoint,
            filter: [{property: "username", operator: EnumOperator.EQUAL, value: userName}]
        })
    }

    // setNewPassword()

    async getAllProjects(userName: string): Promise<IProjectRole> {
        const user = await this.getByUsername(userName)
        // @ts-ignore
        return user.rows[0].projects

    }

    update(model: IUser): Promise<IUser> {
        return Promise.resolve(undefined);
    }
}

export default User;
