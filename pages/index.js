import {MainLayout} from "../components/MainLayout";
import {reduxWrapper} from "../store/store";
import {getData, getRunningOperationPromises} from "../store/api-reducer";
import {Card, Col, Image, Input, Row} from "antd";
import {nanoid} from "@reduxjs/toolkit";
import styled from "styled-components";
import {fromEvent} from "rxjs";
import {map, debounceTime, distinctUntilChanged, switchMap, tap, filter} from 'rxjs/operators'
import Text from "antd/lib/typography/Text";
import Search from "antd/lib/input/Search";
import {useEffect, useState} from "react";
import Link from "next/link";

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
`;

const search = () => {
    return document.getElementById(search())
}


export default function Index({data}) {
    const [searchResult, setSearchResult] = useState(null);
    const [searchInput, setSearchInput] = useState(null);
    const [searchStream, setSearchStream] = useState(false);

    const parseData = (value) => {
        const matchTitle = (book) => !!book.title.toLowerCase().match(RegExp(`${value.toLowerCase()}`));
        const matchAuthor = (book) => !!book.author.toLowerCase().match(RegExp(`${value.toLowerCase()}`));
        let titleList = data.bookList.filter(book => matchTitle(book) === true);
        let authorList = data.bookList.filter(book => matchAuthor(book) === true);
        return titleList.concat(authorList);
    }

    useEffect(() => {
        setSearchResult(document.getElementById('result'))
        setSearchInput(document.getElementById('search'))
    }, [])

    useEffect(() => {
        if (searchResult && searchInput) {
            if (!searchStream) {
                let stream$ = fromEvent(searchInput, 'input')
                    .pipe(
                        map(event => event.target.value),
                        debounceTime(1000),
                        distinctUntilChanged(),
                        tap(() => searchResult.innerHTML = ''),
                        filter(v => v !== ''),
                        switchMap(value => parseData(value))
                    );
                setSearchStream(stream$);

            }
        }
    }, [searchInput, searchStream, searchResult])

    useEffect(() => {
        if (searchStream) {
            !searchStream.subscribe(book => {
                const html = `
                 <div class="card">
                  <div class="card-image">
                    <img src="${book.img}" />
                  </div>
                  <div class="card-description">
                    <span class="card-author">${book.author}</span>
                    <span class="card-title">${book.title}</span>
                  </div>
                  
                </div>
            `;
                searchResult.insertAdjacentHTML('beforeend', html)
            })
        }
    }, [searchStream])

    function renderBook(book) {
        return (
            <Col key={nanoid()} span={8}>
                <Link href={`/book/${book.bookId}`}>
                    <a><StyledCard>
                        <p title={book.title}>{book.title}</p>
                        <span author={book.author}>{book.author}</span>
                        <Image height={200}
                               src={book.img}
                               preview={false}
                        />
                    </StyledCard>
                    </a>
                </Link>
            </Col>
        );
    }

    return (
        <MainLayout class="container" title={'Page Index'}>
            <nav>
                <div>
                    <Link href={'/login'}><a>Login Page</a></Link>
                </div>
            </nav>
            <Text style={{display: "flex", justifyContent: "center", fontSize: "4.2em", marginBottom: "30px"}} mark>The World Bestsellers</Text>
            {/*<Search id="search" placeholder="Поиск по автору или названию книги" allowClear onSearch={onSearch} style={{width: "100%"}}/>*/}
            <Search id="search" placeholder="Поиск по автору или названию книги" allowClear style={{width: "100%"}}/>
            <div id="result"></div>

            {/*<div style={{width: "50%", margins: "0 auto", paddingBottom: "30px"}} className="input-field">*/}
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
