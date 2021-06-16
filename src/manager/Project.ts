import Base from "./Base";
import IPagination from "../interface/IPagination";
import IProject from "../interface/model/IProject";


class Project extends Base {
    protected endpoint = 'projects';

    async getById(projectId) :Promise<IProject> {
        return this.restapi.readById({model: this.endpoint, model_id: projectId});
    }

    async getAll(): Promise<IPagination<IProject>> {
        return this.restapi.fetchAllWithPagination<IProject>({model: this.endpoint});
    }

}

export default Project;