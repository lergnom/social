import React, {Props} from 'react';
// import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header/Header";
// import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
// import state, {StoreType} from "./redux/store";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {AppStateType, store} from "./redux/redux-store";

function App() {

    const state = store.getState()


    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                {/*<Navbar/>*/}
                <div className='app-wrapper-content'>
                    <Route path={"/dialogs"}
                           render={() => <Dialogs dialogs={state.dialogsPage.dialogs}
                                                  messages={state.dialogsPage.messages}
                                                  contacts={state.dialogsPage.contacts}
                                                  dispatch={store.dispatch.bind(store)}
                                                    />}/>
                    <Route path={"/profile"}
                           render={() => <Profile posts={state.profilePage.posts}
                                                  dispatch={store.dispatch.bind(store)}
                                                  messageForNewPost={state.profilePage.messageForNewPost}/>}/>
                    <Route path={"/news"} render={() => <News/>}/>
                    <Route path={"/music"} render={() => <Music/>}/>
                    <Route path={"/settings"} render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
