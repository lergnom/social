import {ExampleUserType} from "../components/Users/Users";
import {UserApi} from "../api/api";
import {Dispatch} from "redux";
import {updateObjectinArray} from "../common/utils/items-helper";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USER = 'SET_TOTAL_USER';
const SET_PRELOADER_ACTIVE = 'SET_PRELOADER_ACTIVE';
const ADD_USER_FOR_FOLLOW_LIST = 'ADD_USER_FOR_FOLLOW_LIST';

type UsersDispatchProps =
    DispatchFollowProps
    | DispatchUnFollowProps
    | DispatchSetUsers
    | DispatchSetCurrentPage
    | DispatchSetTotalUser
    | DispatchSetPreloaderType
    | DispatchAddUserFollowListType


type DispatchFollowProps = {
    type: 'FOLLOW'
    userId: number
}
type DispatchUnFollowProps = {
    type: 'UNFOLLOW'
    userId: number
}

type DispatchSetUsers = {
    type: 'SET_USERS'
    users: Array<ExampleUserType>
}

type DispatchSetCurrentPage = {
    type: 'SET_CURRENT_PAGE'
    currentPage: number
}

type DispatchSetTotalUser = {
    type: 'SET_TOTAL_USER'
    totalCount: number
}

type DispatchSetPreloaderType = {
    type: 'SET_PRELOADER_ACTIVE',
    isFetching: boolean
}


type LocationPropsType = {
    city: string
    country: string
}

export type UsersPropsType = {
    id: number
    ava: string
    fullName: string
    status: string
    followed: boolean
    location: LocationPropsType
}


export type UserProps = {
    users: Array<UsersPropsType>,
    pageSize: number,
    totalUserCount: number,
    currentPage: number,
    isFetching: boolean,
    isArrFolUnFolUsers: Array<number>
}


const initialState: UserProps = {
    users: [],
    pageSize: 100,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    isArrFolUnFolUsers: []
};

export const usersReducer = (state = initialState, action: UsersDispatchProps) => {
    switch (action.type) {
        case FOLLOW:
            // return {
            //     ...state,
            //      users:updateObjectinArray(state.users, action.userId, 'id', {followed: true})
            // };
        return {
            ...state, users:
            state.users.map(user => {
                if (user.id === action.userId) {
                    return {...user, followed: true};
                }
                return user;
            })
        };
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false};
                    }
                    return user;
                })
            };
        case SET_USERS:
            return {...state, users: action.users};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};
        case SET_TOTAL_USER:
            return {...state, totalUserCount: action.totalCount};
        case SET_PRELOADER_ACTIVE:
            return {...state, isFetching: action.isFetching};
        case ADD_USER_FOR_FOLLOW_LIST:
            return {
                ...state, isArrFolUnFolUsers: action.isFetching ?
                    [...state.isArrFolUnFolUsers, action.id]
                    : state.isArrFolUnFolUsers.filter(id => id !== action.id)
            };
        default:
            return state;
    }
};

export const follow = (userId: number) => {
    return {type: FOLLOW, userId} as const;
};

export const unFollow = (userId: number): DispatchUnFollowProps => ({type: UNFOLLOW, userId});

export const setUsers = (users: Array<ExampleUserType>): DispatchSetUsers => ({type: SET_USERS, users});

export const setCurrentPage = (currentPage: number): DispatchSetCurrentPage => ({type: SET_CURRENT_PAGE, currentPage});

export const setTotalUserCount = (totalCount: number): DispatchSetTotalUser => ({type: SET_TOTAL_USER, totalCount});
export const setPreloader = (isFetching: boolean): DispatchSetPreloaderType => ({
    type: SET_PRELOADER_ACTIVE,
    isFetching
});


type DispatchAddUserFollowListType = ReturnType<typeof addUserFollowList>
export const addUserFollowList = (id: number, isFetching: boolean) => ({
    type: 'ADD_USER_FOR_FOLLOW_LIST',
    id,
    isFetching
} as const);

//Так выглядит санка thunk
export const getUsers = (currentPage: number, pageSize: number) => async (dispatch: Dispatch<UsersDispatchProps>) => {
    dispatch(setPreloader(true));
    const data = await UserApi.getUsers(currentPage, pageSize);
    dispatch(setUsers(data.items));
    dispatch(setTotalUserCount(data.totalCount));
    dispatch(setPreloader(false));
};

//unoversal function for delete dublicate code
const followUnFollow = async (dispatch: Dispatch<UsersDispatchProps>, userId: number, apiMethod: any, actionCreator: any) => {
    dispatch(addUserFollowList(userId, true));
    const data = await apiMethod(userId);
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(addUserFollowList(userId, false));
};

export const setFollow = (userId: number) => async (dispatch: Dispatch<UsersDispatchProps>) => {
    followUnFollow(dispatch, userId, UserApi.follow.bind(UserApi), follow);
};

export const setUnFollow = (userId: number) => async (dispatch: Dispatch<UsersDispatchProps>) => {
    followUnFollow(dispatch, userId, UserApi.unFollow.bind(UserApi), unFollow);
};