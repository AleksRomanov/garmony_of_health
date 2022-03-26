import {useRouter} from "next/router";
import {MainLayout} from "../../components/MainLayout";
import {Card, Col, Image, Row} from "antd";
import Text from "antd/lib/typography/Text";
import {nanoid} from "@reduxjs/toolkit";
import Link from "next/link";
import {reduxWrapper} from "../../store/store";
import {getData, getRunningOperationPromises} from "../../store/api-reducer";
import {useEffect, useState} from "react";


export default function SectionId({data}) {
    // console.log(router.query.id)
    // console.log(data)
    const router = useRouter();
    const [bookData, setBookData] = useState(undefined);

    useEffect(() => {
        setBookData(data.bookList.find(book => book.bookId.toString() === router.query.id))
    }, [])

    console.log(bookData)

    return (
        <MainLayout>
            <div>
                <Row gutter={8}>
                    <Card>
                        <Text mark>{bookData && bookData.title}</Text>

                    </Card>
                </Row>
            </div>
        </MainLayout>
    )
}

export const getServerSideProps = reduxWrapper.getServerSideProps(
    (store) => async (context) => {
        store.dispatch(getData.initiate());
        let res = await Promise.all(getRunningOperationPromises()).then(
            result => result,
            error => console.log("Rejected")
        );
        return {props: {data: res[0].data}};
    }
);
