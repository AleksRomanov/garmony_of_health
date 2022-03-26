import Link from "next/link";
import Head from "next/head";
import {reduxWrapper} from "../store/store";
import {getData, getRunningOperationPromises} from "../store/api-reducer";

export function MainLayout({children, title = 'Garmony of Health'}) {

    return (
        <>
            <Head>
                <title>{title} | Health</title>
                <meta name="keywords" content=""/>
                <meta name="description" content="Factory from Krasnoyarsk"/>
                <meta charSet="utf-8"/>
            </Head>
            <main>
                {children}
            </main>
        </>

    )
}
