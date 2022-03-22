import {MainLayout} from "../components/MainLayout";
import {reduxWrapper} from "../store/store";
import {getData, getRunningOperationPromises} from "../store/api-reducer";
import {useAppSelector} from "../services/useAppSelector";
import {Card, Col, Image, Row} from "antd";
import {nanoid} from "@reduxjs/toolkit";
import styled from "styled-components";
// import React, {useEffect, useState} from "react";

const StyledCard = styled(Card)`
       align-items: center;
  .ant-card-body   {
    display: flex;
    justify-content: center;
  }
`;

export default function Index({data}) {
    // console.log(data);
    // const data = useAppSelector((state) => state.offersReducer.pickedOffers);

    // const [bookList, setBookList] = useState([]);
    //
    // useEffect(() => {
    //     async function load() {
    //         const response = await fetch('http://localhost:4200/bookList')
    //         const json = await response.json()
    //         setBookList(json)
    //     }
    //     load()
    // }, [])

    function renderBook(book) {
        return (
            <Col key={nanoid()} span={8}>

                {/*<Card title={book.title} bordered={false}>*/}
                {/*    <div>*/}
                <StyledCard>
                    <Image height={200}
                           src={book.img}
                    />
                </StyledCard>
                {/*</div>*/}
                {/*</Card>*/}
            </Col>
        );
    }

    return (
        <MainLayout title={'Page Index'}>
            <h1 style={{display: "flex", justifyContent: "center"}}>List of Books</h1>
            <div>
                <Row gutter={16}>
                    {/*<ul>*/}
                    {data.bookList.map((item) => renderBook(item))}
                    {/*</ul>*/}
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

