import {MainLayout} from "../components/MainLayout";
import {reduxWrapper} from "../store/store";
import {getData, getRunningOperationPromises} from "../store/api-reducer";
import {useAppSelector} from "../services/useAppSelector";
import {Card, Col, Image, Row} from "antd";
import {nanoid} from "@reduxjs/toolkit";
import styled from "styled-components";
// import React, {useEffect, useState} from "react";

const StyledCard = styled(Card)`
  .ant-card {
  }

  .ant-card-body {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  span {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }

  .ant-card-head-title {
  }

  .ant-card-head {
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
                <StyledCard>
                    <h2 title={book.title} bordered={false}>{book.title}</h2>
                    <span author={book.author}>{book.author}</span>
                    {/*<img*/}
                    {/*    alt="example"*/}
                    {/*    src={book.img}*/}
                    {/*/>*/}
                    <Image height={200}
                           src={book.img}
                    />
                </StyledCard>
            </Col>
        );
    }

    return (
        <MainLayout title={'Page Index'}>
            <h1 style={{display: "flex", justifyContent: "center"}}>The World Bestsellers</h1>
            {/*<div style={{display: "flex", justifyContent: "center"}}>*/}
            <div>
                {/*<ul style={{padding: "0"}}>*/}
                <Row gutter={8}>
                    {data.bookList.map((item) => renderBook(item))}
                </Row>
                {/*</ul>*/}

                {/*<Row gutter={8}>*/}
                {/*    /!*<ul>*!/*/}
                {/*    {data.bookList.map((item) => renderBook(item))}*/}
                {/*    /!*</ul>*!/*/}
                {/*</Row>*/}
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
