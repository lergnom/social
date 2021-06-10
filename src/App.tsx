import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import state, {StoreType} from "./redux/store";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";

type PropsType = {
    store: StoreType
}


function App(props: PropsType) {
    const state = props.store.getState()

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
                                                  dispatch={props.store.dispatch.bind(props.store)}
                                                    />}/>
                    <Route path={"/profile"}
                           render={() => <Profile posts={state.profilePage.posts}
                               // addPost={props.store.addPost.bind(props.store)}
                                                  dispatch={props.store.dispatch.bind(props.store)}
                               // changeNewText={props.store.changeNewText.bind(props.store)}
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
