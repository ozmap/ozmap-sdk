import Base from "./Base";
import IUser from "../interface/model/IUser";
import IPagination from "../interface/IPagination";
import IFilter from "../interface/IFilter";

class User extends Base {
    protected endpoint = 'users';


    setNewPassword(model: IUser) :Promise<IUser>{
        return Promise.resolve(model);
    }

    create(model: IUser) :Promise<IUser> {
        return Promise.resolve(undefined);
    }

    delete(id: string) :Promise<IUser> {
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

    update(model: IUser): Promise<IUser> {
        return Promise.resolve(undefined);
    }
}
export default User;
