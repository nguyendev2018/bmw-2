import axiosClient from "./axiosClient"
const blogs = {
    getAll(params) {
        const url = `./blogs`;
        return axiosClient.get(url, { params });
    },
    getById(id) {
        const url = `./blogs/${id}`;
        return axiosClient.get(url)
    },
    add(data) {
        const url = `/blogs`;
        return axiosClient.post(url, data)
    }
}