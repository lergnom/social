import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "b018a2e7-a067-422d-aa3e-08e12df481c7"
    },

})

export const UserApi = {
    getUsers(pageNumber = 1, pageSize = 10) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(id: number) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    },
    unFollow(id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },
    autorized() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    getProfile(id: number) {
        return instance.get(`profile/${id}`).then(response => response.data)
    },
}


