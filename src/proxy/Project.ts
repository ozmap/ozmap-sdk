import Base from "./Base";
import IPagination from "../interface/IPagination";
import IProject from "../interface/model/IProject";
import IFilter from "../interface/IFilter";


class Project extends Base {
    protected endpoint = 'projects';

    async getById(projectId) :Promise<IProject> {
        return this.restapi.readById({model: this.endpoint, model_id: projectId});
    }

    async getAll(): Promise<IPagination<IProject>> {
        return this.restapi.fetchAllWithPagination<IProject>({model: this.endpoint});
    }

    async create(dados :IProject): Promise<IProject> {
        return Promise.reject(undefined);
    }

    async delete(idModel :string): Promise<IProject> {
        return Promise.reject(undefined);
    }

    async update(model: IProject): Promise<IProject> {
        return Promise.reject(undefined);
    }

    getAllByFilter(filter: Array<IFilter>): Promise<IPagination<IProject>> {
        return Promise.resolve(undefined);
    }

}

export default Project;