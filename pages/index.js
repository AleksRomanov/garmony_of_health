import Link from "next/link";

import {MainLayout} from "../components/MainLayout";
import React from "react";

export default function Index() {
    return (
        <MainLayout title={'Page Index'}>
            <h1 style={{display: "flex", justifyContent: "center"}}>List of Books</h1>
            {/*<p><Link href={'/main'}><a>Main</a></Link></p>*/}
            {/*<p><Link href="/bookTitle"><a>Author Single Page</a></Link></p>*/}
            {/*<p><Link href="/login"><a>Login Page</a></Link></p>*/}
        </MainLayout>
    )
}

