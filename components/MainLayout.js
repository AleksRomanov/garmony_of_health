import Link from "next/link";
import Head from "next/head";

export function MainLayout({children, title = 'Garmony of Health'}) {

    return (
        <>
            <Head>
                <title>{title} | Health</title>
                <meta name="keywords" content=""/>
                <meta name="description" content="Factory from Krasnoyarsk"/>
                <meta charSet="utf-8"/>
            </Head>
            <nav>
                <div>
                    <Link href={'/login'}><a>Login Page</a></Link>
                </div>
            </nav>
            <main>
                {children}
            </main>
        </>

    )
}
