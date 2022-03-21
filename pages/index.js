import Link from "next/link";

import {MainLayout} from "../components/MainLayout";

export default function Index() {
    return (
        <MainLayout title={'Page Index'}>

            <h1>INDEX!!!!</h1>
            <p><Link href={'/header'}><a>header</a></Link></p>
            <p><Link href="/teaser"><a>teaser</a></Link></p>
            <p>kjgkjgsgsdgsdgvjksdjksdgklj</p>
        </MainLayout>
    )
}

