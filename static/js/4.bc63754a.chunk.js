(this.webpackJsonpsocial=this.webpackJsonpsocial||[]).push([[4],{288:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__2xRSA",dialogItem:"Dialogs_dialogItem__1AD6j",dialog:"Dialogs_dialog__lk_cw",active:"Dialogs_active__2sQhs",messages:"Dialogs_messages__1w_Up",message:"Dialogs_message__1xIDh",textBlock:"Dialogs_textBlock__1SV8S"}},289:function(e,s,a){e.exports={friendsWrapper:"BestFriends_friendsWrapper__2umsO",friendsBlock:"BestFriends_friendsBlock__2wqna",friendElement:"BestFriends_friendElement__2bZxV",friendAvatar:"BestFriends_friendAvatar__7WGxN"}},296:function(e,s,a){"use strict";a.r(s);a(0);var n=a(288),t=a.n(n),i=a(15),c=a(1),r=function(e){return Object(c.jsx)("div",{className:t.a.dialog,children:Object(c.jsx)(i.b,{to:"/dialogs/"+e.id,activeClassName:t.a.active,children:e.name})})},d=function(e){return Object(c.jsx)("div",{className:t.a.message,children:e.message})},l=a(289),o=a.n(l),j=function(e){var s=e.contacts.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsxs)("div",{className:o.a.friendElement,children:[Object(c.jsx)("img",{className:o.a.friendAvatar,src:e.avatar,alt:e.name}),Object(c.jsx)("span",{children:e.name})]})},e.id)}));return Object(c.jsx)("div",{className:o.a.friendsWrapper,children:Object(c.jsxs)("div",{className:o.a.friendsBlock,children:[Object(c.jsx)("h4",{children:"Best Friends: "}),Object(c.jsx)("ul",{children:s})]})})},m=a(125),g=a(126),b=a(67),u=a(73),_=Object(u.a)(50),x=Object(g.a)({form:"dialogAddMessageForm"})((function(e){return Object(c.jsxs)("form",{className:t.a.textBlock,onSubmit:e.handleSubmit,children:[Object(c.jsx)(m.a,{component:b.b,name:"newMessage",placeholder:"input your message",validate:[u.b,_],typeField:"Textarea"}),Object(c.jsx)("button",{children:"send"})]})})),f=a(13),O=a(124),h=a(92),p=a(10);s.default=Object(p.d)(Object(f.b)((function(e){return{dialogs:e.dialogsPage.dialogs,messages:e.dialogsPage.messages,contacts:e.dialogsPage.contacts}}),(function(e){return{onClickHandler:function(s){e(Object(O.a)(s))}}})),h.a)((function(e){var s=e.dialogs.map((function(e){return Object(c.jsx)(r,{id:e.id,name:e.name},e.id)})),a=e.messages.map((function(e){return Object(c.jsx)(d,{message:e.message},e.id)}));return Object(c.jsxs)(c.Fragment,{children:[e.contacts.length>0?Object(c.jsx)(j,{contacts:e.contacts}):void 0,Object(c.jsxs)("div",{className:t.a.dialogs,children:[Object(c.jsx)("div",{className:t.a.dialogItem,children:s}),Object(c.jsxs)("div",{className:t.a.messages,children:[Object(c.jsx)("div",{children:a}),Object(c.jsx)(x,{onSubmit:function(s){e.onClickHandler(s.newMessage)}})]})]})]})}))}}]);
//# sourceMappingURL=4.bc63754a.chunk.js.map