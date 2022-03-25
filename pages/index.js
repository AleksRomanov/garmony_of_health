import {MainLayout} from "../components/MainLayout";
import {reduxWrapper} from "../store/store";
import {getData, getRunningOperationPromises} from "../store/api-reducer";
import {Card, Col, Image, Input, Row} from "antd";
import {nanoid} from "@reduxjs/toolkit";
import styled from "styled-components";
import {fromEvent} from "rxjs";
import {map, debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators'
import Text from "antd/lib/typography/Text";
import Search from "antd/lib/input/Search";
import {useEffect, useState} from "react";
import {log} from "util";


const StyledCard = styled(Card)`
  .ant-card-body {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .ant-input-group-addon {
      background-color: white;
    }
  }

  span {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }

  .ant-card-head {
  }
`;

const search = () => {
    return document.getElementById(search())
}


export default function Index({data}) {
    // const [searchByAuthorInput, setSearchByAuthorInput] = useState([]);
    // const [searchByTitleInput, setSearchByTitleInput] = useState([]);
    const parseData = (value) => {
        const matchData = (book) => {
            // console.log(book.title.match(RegExp(`${value}`)));
            return !!book.title.match(RegExp(`${value}`))
        }
        return data.bookList.filter(book => matchData(book) === true);
    }

    let search = undefined;
    useEffect(() => {
        if (!search) {
            search = document.getElementById('search');

            const stream$ = fromEvent(search, 'input')
                .pipe(
                    map(event => event.target.value),
                    debounceTime(1000),
                    distinctUntilChanged(),
                    // switchMap(value => {data.value}),
                    switchMap(value => parseData(value))
                )

            stream$.subscribe(value => {
                console.log(value)
            })
        }


    }, [])


    function renderBook(book) {
        return (
            <Col key={nanoid()} span={8}>
                <StyledCard>
                    <p title={book.title}>{book.title}</p>
                    <span author={book.author}>{book.author}</span>
                    <Image height={200}
                           src={book.img}
                    />
                </StyledCard>
            </Col>
        );
    }

    // const {Search} = Input;
    // const onSearch = value => console.log(value);

    return (
        <MainLayout class="container" title={'Page Index'}>
            {/*<h1 style={{display: "flex", justifyContent: "center", opacity: "0", }}>The World Bestsellers</h1>*/}
            <Text style={{display: "flex", justifyContent: "center", fontSize: "4.2em", marginBottom: "30px"}} mark>The World Bestsellers</Text>
            {/*<Search id="search" placeholder="Поиск по автору или названию книги" allowClear onSearch={onSearch} style={{width: "100%"}}/>*/}
            <Search id="search" placeholder="Поиск по автору или названию книги" allowClear style={{width: "100%"}}/>

            {/*<div style={{width: "50%", margin: "0 auto", paddingBottom: "30px"}} className="input-field">*/}
            {/*    <input type="text" id="search" onSearch={onSearch}/>*/}
            {/*    <label style={{}} htmlFor="search">Поиск по автору или названию книги</label>*/}
            {/*</div>*/}

            <div>
                <Row gutter={8}>
                    {data.bookList.map((item) => renderBook(item))}
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
