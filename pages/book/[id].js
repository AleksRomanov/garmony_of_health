import {useRouter} from "next/router";
import {MainLayout} from "../../components/MainLayout";
import {Card, Col, Image, Row} from "antd";
import Text from "antd/lib/typography/Text";
import {nanoid} from "@reduxjs/toolkit";
import Link from "next/link";
import {reduxWrapper} from "../../store/store";
import {getData, getRunningOperationPromises} from "../../store/api-reducer";

function renderItemBook(book) {
    return (
        <Col key={nanoid()} span={8}>

        </Col>
    );
}

export default function SectionId() {
    // const router = useRouter()
    return (
        <MainLayout>
            <h1>SectionId {router.query.id}</h1>
            <div>
                <h1>gdfxdbdfbdf</h1>
            </div>
        </MainLayout>
    )
}
