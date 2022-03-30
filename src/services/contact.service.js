import createHttp from "./http.service";

class ContactService {
    constructor() {
        this.http = createHttp("/api/contacts");
    }
    async getAll() {
        return (await this.http.get("/")).data;
    }
    async create() {
        return (await this.http.post("/",data)).data;
    }
    async deleteAll() {
        return (await this.http.delete("/")).data;
    }
    async get(id) {
        return (await this.http.get(`/${id}`)).data;
    }
    async delete(id) {
        return (await this.http.delete(`/${id}`)).data;
    }
}

export default new ContactService();