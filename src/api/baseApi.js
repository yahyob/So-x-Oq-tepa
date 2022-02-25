import { request } from "./config"


const baseApi = {
    async fetchAll (url, data) {
        return await request.get(url, data);
    }
}

export default baseApi;