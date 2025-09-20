import { BaseService } from "../../shared/services/base.service.js"
import axios from "axios";

export class CustomerService extends BaseService {
    constructor(){
        super("customer");
    }

    async getAllCustomersPaginated(page, pageSize) {
        this.setToken();
        let url = this.baseURL + '/customer' + '/paginated?page=' + page + '&pageSize=' + pageSize;
        console.log(url);
        return axios.get(url, this.httpOptions);
    }
}