import Logger from "../util/Logger";
const logger = Logger('Box');

import Base from "./Base";

class Box extends Base {
    protected modelName = 'boxes';

    async getBoxById(boxId) {
        return this.restapi.readById({model: this.modelName, model_id: boxId});
    }

    async getAllBoxes() {
        return this.restapi.fetchAllWithPagination({model: this.modelName});
    }

}

export default Box;