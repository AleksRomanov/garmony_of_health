import Link from "next/link";
import Head from "next/head";

export function MainLayout({children, title = 'NUTS'}) {
    return (
        <>
            <Head>
                <title>{title} | Next Course</title>
                <meta name="keywords" content="nut, nuts, krasnoyarsk"/>
                <meta name="description" content="Factory from Krasnoyarsk"/>
                <meta charSet="utf-8"/>
            </Head>
            <nav>
                <Link href={'/'}><a>Index</a></Link>
                <Link href={'/header'}><a>Header</a></Link>
                <Link href={'/teaser'}><a>Teaser</a></Link>
            </nav>
            <main>
                {children}
            </main>
            <style jsx>{`
            nav {
            position: fixed;
            height: 60px;
            left: 0;
            top: 0;
            right: 0;
            background: blue;
            display: flex;
            justify-content: space-around;
            align-items: center;
            }
            
            nav a {
            color: #fff;
            text-decoration: none;
            }
            
            main {
            margin-top: 60px;
            padding: 1rem;
            }
            `}</style>
        </>

    )
}
