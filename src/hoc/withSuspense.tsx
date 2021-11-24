import React, {ComponentType} from "react";
import {Preloader} from "../common/Preloader/Preloader";

export const withSuspense = <T extends any>(Component: ComponentType<T>) => {
    return (props: any) => {
        return <React.Suspense fallback={<Preloader/>}>
            <Component {...props}/>
        </React.Suspense>;
    };

};

