import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "b018a2e7-a067-422d-aa3e-08e12df481c7"
    },

});

export const UserApi = {
    getUsers(pageNumber = 1, pageSize = 10) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
            .then(response => response.data);
    },
    follow(id: number) {
        return instance.post(`follow/${id}`)
            .then(response => response.data);
    },
    unFollow(id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data);
    },
    autorized() {
        return instance.get(`auth/me`)
            .then(response => response.data);
    },
    getProfile(id: number) {
        return instance.get(`profile/${id}`).then(response => response.data);
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status: string) {
        return instance.put(`profile/status/`, {status});
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logout() {
        return instance.delete(`auth/login`);
    },
    savePhoto(photoFile: any) {
        const formData = new FormData();
        formData.append("image", photoFile);
        return instance.put(`profile/photo/`, formData, {headers: {'Content-type': 'multipart/form-data'}});
    },

    saveProfile(profile: any) {
        return instance.put(`profile`, profile);
    },
};


