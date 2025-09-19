import { BaseService } from "../../shared/services/base.service.js"

export class CustomerService extends BaseService {
    constructor(){
        super("customers");
    }

    async getCustomerPaginated(page = 1, pageSize = 10) {
        return this.get(`/paginated?page=${page}&pageSize=${pageSize}`);
    }

    async getCustomerById(customerId) {
        return this.get(`/${customerId}`);
    }

    async createCustomer(customer) {
        return this.post("", customer);
    }

    async getCustomerByName(name) {
        return this.get(`/client-name/${encodeURIComponent(name)}`);
    }

    async getCustomerByDni(dni) {
        return this.get(`/client-dni/${encodeURIComponent(dni)}`);
    }

    async getCustomerByRuc(ruc) {
        return this.get(`/client-ruc/${encodeURIComponent(ruc)}`);
    }
}