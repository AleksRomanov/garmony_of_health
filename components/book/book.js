import Router from "next/router";
import {MainLayout} from "../MainLayout";

export default function Book({item}) {
    const linkClickHandler = () => {
        Router.push('/')
    }

    return (
        <MainLayout title={'List of Books'}>
            <h1>BOOOOOOKSSSS</h1>


            <button onClick={linkClickHandler}>Go Back!!</button>
            <button onClick={() => Router.push('/login')}>Please login in</button>

        </MainLayout>
    )
}

