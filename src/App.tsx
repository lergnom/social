import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {UsersContainer} from './components/Users/UsersContainer';
import {HeaderContainer} from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {AppStateType} from "./redux/redux-store";
import {Preloader} from "./common/Preloader/Preloader";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));


type AppComponentType = {
    initializeApp: () => void
    initialized: boolean
}

class App extends React.Component<AppComponentType> {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>;
        }


        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <HeaderContainer/>
                    {/*<Navbar/>*/}
                    <div className="app-wrapper-content">
                        <Route path={"/dialogs"}
                               render={() => {
                                   return <React.Suspense fallback={<div>loading</div>}>
                                       <DialogsContainer/>
                                   </React.Suspense>;
                               }
                               }/>
                        <Route path={"/profile/:userId?"}
                               render={() => {
                                   return <React.Suspense fallback={<div>loading</div>}>
                                       <ProfileContainer/>
                                   </React.Suspense>;
                               }
                               }/>
                        <Route path={"/users"}
                               render={() => <UsersContainer/>}/>
                        <Route path={"/news"} render={() => <News/>}/>
                        <Route path={"/music"} render={() => <Music/>}/>
                        <Route path={"/settings"} render={() => <Settings/>}/>
                        <Route path={"/login"} render={() => <Login/>}/>

                    </div>
                </div>
            </BrowserRouter>

        );
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized,
});

export default connect(mapStateToProps, {
    initializeApp
})(App);
