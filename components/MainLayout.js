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
                    {/*<Link href={'/'}><a>List of Books</a></Link>*/}
                    {/*<Link href={'/bookTitle'}><a>Author Single Page</a></Link>*/}
                    <Link href={'/login'}><a>Login Page</a></Link>
                </div>
            </nav>
            <main>
                {children}
            </main>
        </>

    )
}
