import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import state, {RootStateType} from "./redux/state";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";

// import {AppPropsType, DialogsPropsType} from "./index";


function App(props: RootStateType) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                {/*<Navbar/>*/}
                <div className='app-wrapper-content'>
                    <Route path={"/dialogs"}
                           render={() => <Dialogs dialogs={props.dialogsPage.dialogs}
                                                  messages={props.dialogsPage.messages}
                                                  contacts={props.dialogsPage.contacts}/>}/>
                    <Route path={"/profile"} render={() => <Profile posts={props.profilePage.posts}/>}/>
                    <Route path={"/news"} render={() => <News/>}/>
                    <Route path={"/music"} render={() => <Music/>}/>
                    <Route path={"/settings"} render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
