import {createSelector} from "reselect";

export const getUsersState = (state: any) => {
    return state.usersPage.users;
};
// реселектор позволяет не перирисовывать компоненты
export const getUserSuper = createSelector(getUsersState, (users) => {
    return users.filter();

})

export const getPageSize = (state: any) => {
    return state.usersPage.pageSize;

};

export const getTotalUserCount = (state: any) => {
    return state.usersPage.totalUserCount;

};

export const getCurrentPage = (state: any) => {
    return state.usersPage.currentPage;

};

export const getIsFetching = (state: any) => {
    return state.usersPage.isFetching;

};
export const getIsArrFolUnFolUsers = (state: any) => {
    return state.usersPage.isArrFolUnFolUsers;

};




