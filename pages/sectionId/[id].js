import {useRouter} from "next/router";

export default function SectionId() {
    const router = useRouter()
    return (
        <MainLayout>
            <h1>SectionId {router.query.id}</h1>
        </MainLayout>

    )


}
