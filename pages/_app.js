import '../styles/globals.scss';
import {MainLayout} from "../components/MainLayout";
import {reduxWrapper, useAppDispatch} from "../store/store";
import 'antd/dist/antd.min.css';
import {getData, getRunningOperationPromises, } from "../store/api-reducer";
import {useEffect, useState} from "react";
import AppProvider from "../components/AppProvider";

function MyApp({Component, pageProps}) {



    useEffect(() => {
        // console.log(pageProps)
        const checkAuth = () => {
            // console.log(pageProps)
            if (!!localStorage.key_auth) {
                pageProps.initialData.authStatus = true;
            }
        }

        pageProps.initialData && checkAuth();
    }, [pageProps]);

    return (
        <MainLayout>
            <AppProvider initialData={pageProps.initialData}>
                <Component {...pageProps} />
            </AppProvider>

        </MainLayout>
    )
}

export default reduxWrapper.withRedux(MyApp);


