// import {renderTree} from "../renderTree";

// let renderTree = () => {
//
// }

// export const subscriber = (observer: () => void) => {
//     renderTree = observer //наблюдатель pattern
// }

type DialogsType = {
    id: number
    name: string
}

type MessageType = {
    id: number
    message: string
}

export type PostsType = {
    id: number
    message: string
    likesCount: number
    img: string
}

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    contacts: Array<ContactsType>
}

export type ProfilePageType = {
    messageForNewPost: string
    posts: Array<PostsType>

}
export type ContactsType = {
    id: number
    avatar: string
    name: string
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType

}

export type DispatchProps = {
    type: string
    newText: string
}

export type StoreType = {
    _state: RootStateType
    // changeNewText: (s: string) => void
    // addPost: (postText: string) => void
    _renderTree: () => void
    subscriber: (callback: () => void) => void
    getState: () => RootStateType
    dispatch: (type: DispatchProps) => void
}


export const store: StoreType = {
    _state: {
        profilePage: {
            messageForNewPost: "",
            posts: [
                {id: 1, message: 'Hi', likesCount: 12, img: 'https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg'},
                {
                    id: 2,
                    message: 'It\'s my first post',
                    likesCount: 5,
                    img: 'https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg'
                },
                {
                    id: 3,
                    message: 'Ok I\'m fine',
                    likesCount: 8,
                    img: 'https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg'
                },
                {id: 4, message: 'Oki doki', likesCount: 8, img: 'https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg'},
            ]
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Andrey'},
                {id: 2, name: 'Sveta'},
                {id: 3, name: 'Egor'},
                {id: 4, name: 'Anny'},
                {id: 5, name: 'Valera'},
                {id: 6, name: 'Lena'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How yor it-incubator?'},
                {id: 3, message: 'ok'},
                {id: 4, message: 'yo'},
                {id: 5, message: 'yo'}
            ],
            contacts: [
                {id: 1, avatar: 'https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg', name: "Sveta"},
                {
                    id: 2,
                    avatar: 'https://download-cs.net/steam/avatars/3405.jpg',
                    name: "Viktor"
                },
                {
                    id: 3,
                    avatar: 'data:image/jpeg;base64,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',
                    name: "Slava"
                },
                {
                    id: 4,
                    avatar: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgVFRUYGBgaHBgcHBoYGBgZGhgeHBgaHCEcGBgcIS4lHh4rIRwaJjgmKy8xNTU1HCQ7QDs0Py40NTEBDAwMEA8QGhISGjQhISE0MTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NTQ0NDQxNDQ0NDQ0NDQ0MTQ0MTQ0NDQ0NDQ0MTQ0NP/AABEIAMUBAAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xAA/EAABAgMEBggDBwQBBQAAAAABAAIDESEEEjFBBVFhcYGRBiIyobHB0fATQuEHFFJicoKSorLC8UMjM1OD0v/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAHxEBAQACAwADAQEAAAAAAAAAAAECEQMhMUFRYXES/9oADAMBAAIRAxEAPwCZCELu8QQhCAQhCAQUIQQuiRB8jTuefNqrvtUcYWef/sYrr3hoJcQAMSTIDis206Ya3stn+Z3VbwpeJ2SRrGb8hr7Taj2YDRve0/5BUYukbQDdc9jTmGAOcOFQOJAUUXSr3zk4huwXRwFTxJ4KtJHbHD7kTxLXENC9+03iOTWSHeUhi5AGW0zJ/Uc1A5wGJUjdo4eskb0e188AUFx1D+SaXE+mXJRPjNbia6sTyCKlMQ/h7002loxBHD0TYTy7stJGsyDeZ8MVZEIZnlhzPogjZFa7BwPvUpJKN9ladij+C9vZdPZ/tA+LBDsearCGRNhzq3grDI2ThdPcVK9uB1GaDJaSDMYhamjbTec8YT60tRwPOhWU93WI2mW2qfZI5Y5xGdJ6hQU20WLNjo0LGFoYe017tpefASCu2cNNYbyNbXEkcQajeFmwXEJAlUAhCEAhCEG0hCF2eMIQhAIQhAKOPGu5TccBhPWScgMz9AnRHhrS5xkAJlclpPSjnkhtGnE5uAwGxo1Z4nFG8cblVjSOkutIG+4Z/I3YweeJ1yosqbnuEz6AbBkNihmrVkFL2ug3D6+Cu3omMkTNaBQYJj36jyqT+n1TLRGA6oqcx6nJSQYcqu7R7hqAyUU5kMDKvM8097wBM0CCZVKphropngwYE4fU7ECPtDnmTZjdifRWrNo8Cr6nVkN+v3iprPZw2uanJQHvduCUNKRqbFjtHadXVieSB9zdzCa4yyJ3SVf72DRrSe4JRGf+Bv8AI/8AyiaD4pwLCRvb4EprI4M2EEEg3bwllhPAny3KwC7Nvf8ARQxmgg9U4TlTKuINEVg2IveLrQXEEOB/DM1meatsghuUznPE+ik0dCdAHWk5rpFzgKsMgJyzaPqtG02e9h2h3+9akgznspebVuo4jj6802G8gzaZEdyksz5OukSnOh1j1HgnOF11RMHLWN+tBpWO3B/VdR3cd21W1jRLLS+wktx/M1aNitN9te0MfVc7PoWEIQsgQhCDbQhC7vGEIQQgEErMjWW0gzZHBGp7G0/c0V5LG0nbY7Zw3vBJAnclIA1qZAzPgjeOG/KTTekzEdcaeoD/ACOs7FiuiGcmiZzJwHqdngpSwyngJy37B3c1YscEY8huzR6MZJNRDZ7D8z5ulgDh/HAeKuWiJcE+AG3ZsxUp7QGqvj6FZ1qdN4bq8TX0TxU1lh/MdeOs+/JWgkY2QA1eyh75AlBHEF43chV3orUNszLIDDIDUPeaghNkNpqd6twxJu/yp6oHFNL5b9WxK5QPbOYGA7R1oGRbQTRvcmMsoxdipmMATnukhskgBqCsQWyF44nDYNctZy1KKzQp9d4p8oyJ1y1DvPFWCgbJQxj1HHYeUvZT3vqG6zLzMuAJSWrsP/S7wQQtwHvAy8lNCPVl+GQ/blyw3XVAHid3M9YbaAEcpHmnNfIzywO4+hkf2oK9vZIh4yM+XqJhOitm2Y3hWozLzSFTsp6gGqnLDukoH6NjSddyd4q3GhXHfEb+4DMZkLGjOLH17J7LtR1HyK2rHaQ8SPaGI17VjKfIsgpVHAbdF3VhuOHmOCkWAIQhBtoQhd3jCEIQQ2y0BjHPPyie85DiZLibPCfHiXZ9ZxLnO/CM3HwA1yXQdKopDGMHzOnvDRhzI5KM2X7tZnn/AJIkg46p4NGwCfElPl2w6n7WJaXBz7rBJg6rBsniTmSZknarcJtKbh75KhZx1twJ8vMngtBmHP33I7ImvqdpIHAfQqoxs4hO091PJEN83g5CY4uMz4hPgDr80FxqjiVLW8TwUgUbe04nKQ7p+aCUlWZZaqcqKlZXXn3jgCAPE8cOauhA5QvNboyqfLz7lLNQsaBMucASZ4jgOUkSBPhQJm8/g311eO5J96Y3AzOwTPNM+9Pd2GS2u9B6oulxxzP+vooYkWlDIZn09VGGE1cbx5AbgrmhtDvtsT4bKMaQYjz2WjVtOzPcE2sjI0fEL338GgODBxkTxqtCOJtcNYPgqtgbIyGo95nVXioMq0VYx2q6Z7xKfOR4KQRLzTPGRBHDEbD9MkMZOHd/KW8qeSqMiS62sSO4+h81UaUB82g5yrvFD3qsyjnN4j3yUlid1Zaie+vmmWmhvasd2frwQMtMMOaQaqjY4j2PlPsiYOycq6xVac1AGBr2uIpMg7nCRB2VUqtmzxg9ocOI1HUpFlwj8KJdPZd7B8lqLlYBCEKDbQhC7vEEIQgytIQb9pgA4APd/GR8bqqdK41GM2l3KnmtiND67H6rzTueB5taOK5bpDHvRiMmgN9UdsO7PxUsvzft/wAldbgOPiVSsxx3+SuwzRHZkWY04nxWjBhyAJxNdwOHPHkqcKHKIWHC8eWPgtIms1YEAVWI/EbTPnRXCFnjzJ70ovWNsgOJ98grSghUIGzyU4CgbGHVO4qB7ZClMgBmchNTx+yeHiFC2rjqaP6negn/ACRSQrOBtOZKsBAVjR9ifHitgwx1jicmN1lRZNl0VoqJa4vwYVBi+Jkxvrs+svVDY4VisT2Q2yaxjzPN7i2V5xzJMlPoPQ8OzQxDYNrnZvdrKzen8e7YYv5ixvN49Fje6vjyayHrja3xkfVXHLPv3Xg6iBwld81oOW0U5SmNp76+az4wleG/181pxhXf5ewsy2UcdoHp73KosaMncM/xHwA8lNENVDYKM4u8U5xREDH3DdPZy/Ls3eHhO4TCgtAwKhbFLcMNXpqQadpbfhg/MzHdh6FXbJEvMac5SO8UWRDjTGYnMVzpUaitDRjgGls6zJG6QXPKdKuoQhYG2hCF3eIIQhBHaIoYxz3YAErgI0WZc92ZJPGq2+kNvvdQGmMtn4jvyGrfTDjQHNIDxKgMjjWomMtctqV6OPHU/qexChnjMHne9FbY6WKq2Y5axPk6XqltvYO9v9wR0S2mHJ14apcvfcpWPmEyyPvsE8de7NRxwW4Z0l791RVprwRMe5LOhYAZn/as2Z2ITNHvZde587xkGCVAJiZnrKVZFyCeueA7vqrKr2cihGBPmrKIjiuF1w1Cfj6KGzjqA5um473fQNStdN7wcD1e5I1wDa4DwUtXSSRJDWC89xk0az6L1Lofodtnh06z3Ve/b+EHUFidAej4I+8xm1NGNOAGsj3mu9WMsvhrWizXJ/aPN1mhsH/JHYzm1/mAuqmuX6fN/wCnZ3ZNtMEndJ49Fmejym0NqQrVljXmg5ih3j3Pio9JMuxYjdT3DkZKrZ33HOdkTX+IquiL8UTWbbhUHVXy81pl06hULczkVplBHfKHcGJnPcTMpbLGvN2ih9VETrUFnJa+W8cMURoxRQqorbsFUQjX0PIsLCAZHA1mDhMd3BNstja4OmXDruAkchqnNVNHRi14/NTicO9bkJl1oHsk1J5rnl0FYJCU575eSVCFhW2hCF3eILK0vpG7/wBJgvxHfKBO7tcPLnRaESCXfO8DU26O+U+RS2ezMZO40CeJxJ2ucak70WWRj6K0JdPxIxvPxlOYB1uObu7eudt8e/Ee85uJ4Cg7gu7tD5McdTXHkCvOY7SWGQnh3kDxIHFK7cduVtqezP7J2dxn5FTW7sHe3xChAlQYAAchJPtBnDJ1S7nBR2T2HsN4/wBxRaXVlqHj/pM0W7qDZND3Te4Zi7LllzVVdsGjYsQPexjiyG0l7gJgUwOeFZ7Ni0bVohjmFzRccG/LhhOrVpwujdoYwGDGLXOaA9ji5kyRUB7Jhzayk4BWLPGtzmNa+AyMy6A1zjDDg2UgA9r2nD8U1nbUcpDbISVpxrPXXnVQRRJzgRIgkETBlI4TGKex9E2inDf1j+px5TUvwXPdcaQMXGeEm1lxKmsej3fd32k4fEDBtEj9Oau6LsTjN4biBXZ7Hes7WTtKNPaRa0NbGcGtEgGNhSAGoXVG3pLpPKLE4sh+bFOYBvSuRD+hjoh5CnMhWDCitE2WCM+sg54iOE5TqyEGy4uKlWyFsnSDSpPbB/WyF/iAU/TFo0lGgP8AimGYbeu66y64XOtNp1iWCsaP+/Pa4ts7GAGRa2zsJmBgb83Z5qja+ktqs7y18JjaEEOgFoIIqCGypIq3Gyb0xMsbdSuf0sH/ABHOihoe833Xeyb/AFwW7Lr2qvZ2zDgfxf4tVrSb3uDL7HM+GxkKbg4F1wTE5jtBhYN0lVsxod/kFYpjIhYZGrfDcpy4OGxI9oOKpRWlrqHJaZpsWGWlRBvXYdoBT3vNKmp8ifJOhdoIiw2lOW5VXGpG1WnuqNs/CarsDS7rYdaZ1UJ9EoZNdNAfeY12sA9y5Zj5iokcx6awug0U6cMbCR3z81jLwXEIQsK20IQu7xBKkSoIrW2bHgZtcP6SuGgvkx9O0Gjk4O8geC75cRb4YbEcxlQHEAayTgO5vBWuvFfYpu7ypGtm17fy03yP0V7SGjvhBk6ucDe1A6hu15qnDx4y5gDzU07y77hNG0BG4rc6E2JsXSTWvE2hrny2tDJT2TKxLP1X710PQh93ScE/jZEb/RPxDVjLxuPW32BhwmOPqmw9HsEhKgkrhSLG1eIaU/78WX/kif3uVYRJK5p5ly0x2nKLE5F5I7iuedbXNebriBg4DMTEweQ5LUS16e+xA6KLQOwxj+V15PEXlt9HNGgWdkxUtaT/ABHnNYPRDpPZ47PucUfDeWfCEyLkUAFvUdk8g9k8J5d7BhhrQ0ZABZq7QiysDboFJzpnvVHSllhRYToUSE4tObAHFpGBA7U/2kLXTIkFrsQptXEWC0RrK1zIbYkRgoD92tLHNqTL/t3deZxOCzYtn+NEMe0wI7w2txrWw24y674rw6U5fLxyXfnRbJOAJE5HI4T9SiFopgmCSQRIilRMHLcFu8ls05TjxmVsnby/pPbXPbduMa2d4NDjEf1Qalwa1ooaynQDUuds2B3nyC9r0lYYEOzxy2G1rfhRbxkLxFwz6xqvFLPRo4+KSt1K80VOOalWIppLWQFSbEDpuGt3iQtso4uWwj081NBHWHvJQxMhtHj9FYs4xKBYjusNgn4pbdBuuaz8jeJJdNLBZefLWQPXuBV2zuESO54HVYAAdZqZjZ1jyWbUUdJwLj4e1had7XA/5laehh1D+o+AUWnR1WHU4jmx3oFdsMK4xrTjid5qs29CdCELKttCELu8QSpEqBsR91pdqBPITXK6Isznl8YVcxwLR+N2LhyMhtOxdLbmkw3gYljwN90qDQtmuQGNzLQ4nWXVPijeOWsaodISHw2PbUE+I+i59mLhqunnOflzXV6Usk2Pu59a7tFZt1E5jPx5RvaB1m4eIEv6rqtduO9FiCsx7mtHo5pFkO0wozzIQ3G8ZEyBbI0FcCCqCzI7y19DL6Ehc667e1W37Q9HsBIjOiEYNhw3knYHOAbzcFxOn/tMjxQWWZos7T85IdFI2fK3heOohcI98zOUveSap/mFtazLSSwue4uNZlxLiTM1JNSVllyUxZMu/m7peqjDlYhxXd9GftHjQA2HaQY8MUDwR8Zg2l1HjeQdpwXBzRNL2bfRehtPWe1NvWeK18u03svb+pjusN8pFaS+ZYcQtcHNcWubVrmktc062uFRwXWaK+0O3QaPe2O3VFb1uD2yPF15ZuLUye3hDV5rA+1dkhfsrwc7kRrh/UGq437VbLnAtIOxsE9/xFNU3Gx9oVt+HYYlaxCxg23nAuH8A5eTMoANQC2ulnTBluENjIT2NY5zzfLSXGUhRtBic8wsJz5BWTRtHHdXd4mnvcqdmEmy2u/uKsOOXNQwxK8PzE86+a2zQRX3qPqrbKNnxVeG2Z9+8lZcwuIYNnf7mgm0dAvAnAZnZmBtOvIT1q9YGgNc8yAeZjKTRRvcnOZMCG3siV87Pw7zns3qyAFi0Vnw77mkiTWmdcXHdkBtVpCFkCEIQbaEIXd4glSJUAmQ2XRLIYbBq4YJ6FoJJcfpeyBj3sHZcZjZNraDcZrsVy3SJ4+Lua2fefCSldeK9s1sS8J557xQ99eIWdpBknA673+KvQILg644EFwvgbZXpcW94CpW81GqR75eixXo9U5pCUhKaoApAlQgcClmmJQUDwUoKZNKCgeEJoKmszQXVE9nqgvWJl1t44n2Er3zPuibGiSEzko4QpM4nHZsUVKVHPrHcPP6JyRrJ11Kokhm6C7ktXR9lLWh3zOrP8M/P1VCwWcxHAHstqeOS6BZyoaxgAkPe07U5CFkCEIQCEIQbaEIXd4glSJUAhCFoC5Z1m+PaXj5A7rHK62TZcZS5rp4ryGkgTIFAMzkFV0XYvhMkTN7jeedZ9B661K1jlqWqen7EXBsRlHw5GewGY5HxXK6RaHEuDbs5mWqvhOa9Ae0EEETBoVxGm9HxIbr4b1MBnIanZT2YGdFnKOvFn8VzjqGRQnx3g1lI6k26ucd6RCRCqFQkRNA5KCmzSoHhXLEMTwVGamgRpNdry40SrEkZ997WjAHnLH0VpuHvWqFkPXHHwKvNNBuQKUXpgAYeKWeWuR9+9SLMJOYDkWz5hEdFY7OGNujYTvkAfBToQsAQhCAQhCAQhCDbQhC7vEEqRKgEIQtAQhCATXsBBBAINCDgU5CDnNLdHYFxzmgtOUjQc1xDxTkvQ+k9qDIJHzPN0DxPAeS4212FzC1rxUtBI1XusAdsjLgVzyn09XFlddssGe/MeaEx7C15B97U5xWNt6KgKMz2BP702HAe/qln7+qZeShN/S6KkmiSfCZMoqSCwgtO/vBWixs1A0DHIVV+zAUJwxO4CZ7ldM2lgw5xg3URP8AaJnvBTbbALHuIyN4biZz4GQ4q3oeGb7nuxlPi83p+9a1XMBxE8e/FS9WpPCtM660qbDhhokMMhq2DYnLKhCEIBCEIBCEINtCELu8QSoQgEIQtAQhCAQhCClFsDYj/iv6xb2WnstlnLMkgGewbZ830hbO0P2w2O4gkeBKELN8deP1h6XgASdmCBvCzUIXN6YVqVCFAJWhCFVSuFFJZwhCqJIhm4NyB544rTd2XHXIbs/KXFIhS+sVsCEGxAR87SCP0kAEKyhCy0EIQoBCEIBCEIBCEIP/2Q==',
                    name: "Nikolay"
                },
                {
                    id: 5,
                    avatar: 'https://avatarko.ru/img/kartinka/31/devochka_svinya_30987.jpg',
                    name: "Masha"
                },
            ]
        }


    },

    _renderTree() {
        console.log('state changed')
    },
    subscriber(callback) {
        this._renderTree = callback //наблюдатель pattern
    },
    getState() {
        return this._state
    },

    // changeNewText(s: string) {
    //     this._state.profilePage.messageForNewPost = s
    //     this._renderTree()
    // },
    // addPost(postText: string) {
    //     const newPost: PostsType = {
    //         id: new Date().getTime(),
    //         message: this._state.profilePage.messageForNewPost,
    //         likesCount: 0,
    //         img: 'https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg'
    //     }
    //     this._state.profilePage.posts.push(newPost)
    //     this._state.profilePage.messageForNewPost = ""
    //     // console.log(state.profilePage.posts)
    //     this._renderTree()
    // },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            const newPost: PostsType = {
                id: new Date().getTime(),
                message: this._state.profilePage.messageForNewPost,
                likesCount: 0,
                img: 'https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg'
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.messageForNewPost = ""
            // console.log(state.profilePage.posts)
            this._renderTree()
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.messageForNewPost = action.newText
            this._renderTree()
        }
    }

}

export default store;


