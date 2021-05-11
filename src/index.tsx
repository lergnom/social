import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export type DialogsDataType = {
    id: number
    name: string
}

export type MessagesDataType = {
    id: number,
    message: string
}

export type DialogsPropsType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
}

export type AppPropsType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
    postData: Array<PostDataType>

}

export type PropsDataPostType = {
    postData: Array<PostDataType>
}


let dialogsData: Array<DialogsDataType> = [
    {id: 1, name: "Anton"},
    {id: 2, name: "Masha"},
    {id: 3, name: "Kira"},
    {id: 4, name: "Alisa"},
    {id: 5, name: "Kirill"},
    {id: 6, name: "Yan"},
]

let messagesData: Array<MessagesDataType> = [
    {id: 1, message: "Hi"},
    {id: 2, message: "How are you"},
    {id: 3, message: "Fine"},
    {id: 4, message: "I'm ok"},
]


export type PostDataType = {
    id: number
    message: string
    likeCount: number
}

let postData: Array<PostDataType> = [
    {id: 1, message: 'How much is fish', likeCount: 10},
    {id: 2, message: 'The New York bands', likeCount: 10},
    {id: 2, message: 'All my time ', likeCount: 10}
]


ReactDOM.render(
    <React.StrictMode>
        <App dialogsData={dialogsData} messagesData={messagesData} postData={postData}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
