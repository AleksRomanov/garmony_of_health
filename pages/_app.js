import '../styles/globals.scss';
import {MainLayout} from "../components/MainLayout";
import {reduxWrapper} from "../store/store";
import 'antd/dist/antd.min.css';

function MyApp({Component, pageProps}) {
    return (
        <MainLayout>
            <Component {...pageProps} />
        </MainLayout>
    )
}

export default reduxWrapper.withRedux(MyApp);
