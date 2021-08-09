import React from 'react';
import {connect} from 'react-redux';
import {ExampleUserType, Users} from './Users';
import {
    follow,
    setCurrentPage, setPreloader,
    setTotalUserCount,
    setUsers,
    unFollow,
} from '../../redux/users-reducer';
import {Preloader} from '../../common/Preloader/Preloader';
import {UserApi} from "../../api/api";

type UserComponentType = {
    users: Array<ExampleUserType>
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    follow: (id: number) => void
    unFollow: (id: number) => void
    setUsers: (users: Array<ExampleUserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUserCount: (totalCount: number) => void
    setPreloader: (isFetching: boolean) => void
}

export class UsersComponent extends React.Component<UserComponentType> {
    componentDidMount() {
        this.props.setPreloader(true)
       UserApi.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.setTotalUserCount(data.totalCount)
                this.props.setPreloader(false)

            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setPreloader(true)
        this.props.setCurrentPage(pageNumber)

        UserApi.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.setUsers(data.items)
        })
        //Имитация загрузки данных
        setInterval(() => {
            this.props.setPreloader(false)

        }, 2000)

    }

    render() {
        return <>
            {this.props.isFetching && <Preloader/>}
            {!this.props.isFetching &&
            <Users users={this.props.users} pageSize={this.props.pageSize} totalUserCount={this.props.totalUserCount}
                   currentPage={this.props.currentPage} follow={this.props.follow} unfollow={this.props.unFollow}
                   onPageChanged={this.onPageChanged}/>}
        </>

    }
}


const mapStateToProps = (state: any) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

// const mapDispatchToProps = (dispatch: any) => {
//     return {
//         follow: (userId: number) => {
//             dispatch(follow(userId))
//         },
//         unfollow: (userId: number) => {
//             dispatch(unFollow(userId))
//         },
//         setUsers: (users: Array<ExampleUserType>) => {
//             dispatch(setUsers(users))
//         },
//         setCurrentPage: (currentPage: number) => {
//             dispatch(setCurrentPage(currentPage))
//         },
//         setTotalUserCount: (totalCount: number) => {
//             dispatch(setTotalUserCount(totalCount))
//         },
//         setPreloaderActive: (isFetching: boolean) => {
//             dispatch(setPreloader(isFetching))
//         }
//     }
// }

export const UsersContainer = connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUserCount,
    setPreloader,
})(UsersComponent)