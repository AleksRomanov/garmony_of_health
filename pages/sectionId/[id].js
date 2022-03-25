import {useRouter} from "next/router";
import {MainLayout} from "../../components/MainLayout";

export default function SectionId() {
    const router = useRouter()
    return (
        <MainLayout>
            <h1>SectionId {router.query.id}</h1>
        </MainLayout>

    )


}
