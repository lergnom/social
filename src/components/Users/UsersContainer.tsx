import React from 'react';
import {connect} from 'react-redux';
import {ExampleUserType, Users} from './Users';
import {getUsers, setCurrentPage, setFollow, setTotalUserCount, setUnFollow,} from '../../redux/users-reducer';
import {Preloader} from '../../common/Preloader/Preloader';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from 'redux';

type UserComponentType = {
    users: Array<ExampleUserType>
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    isArrFolUnFolUsers: Array<number>
    setCurrentPage: (currentPage: number) => void
    setTotalUserCount: (totalCount: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    setFollow: (id: number) => void
    setUnFollow: (id: number) => void
}

export class UsersComponent extends React.Component<UserComponentType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
        this.props.setCurrentPage(pageNumber)
    }

    render() {
        return <>
            {this.props.isFetching && <Preloader/>}
            {!this.props.isFetching &&
            <Users users={this.props.users} pageSize={this.props.pageSize} totalUserCount={this.props.totalUserCount}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged} isArrFolUnFolUsers={this.props.isArrFolUnFolUsers}
                   isFetching={this.props.isFetching}
                   setFollow={this.props.setFollow}
                   setUnFollow={this.props.setUnFollow}/>}
        </>

    }
}


const mapStateToProps = (state: any) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isArrFolUnFolUsers: state.usersPage.isArrFolUnFolUsers,
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

// const withAuthRedirectComponent = withAuthRedirect(UsersComponent);
//
// export const UsersContainer = connect(mapStateToProps, {
//     setCurrentPage,
//     setTotalUserCount,
//     getUsers,
//     setFollow,
//     setUnFollow,
// })(withAuthRedirectComponent)


export const UsersContainer = compose<React.ComponentType>(withAuthRedirect, connect(mapStateToProps, {
    setCurrentPage,
    setTotalUserCount,
    getUsers,
    setFollow,
    setUnFollow,
}))(UsersComponent)