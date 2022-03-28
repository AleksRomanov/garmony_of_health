import {MainLayout} from "../components/MainLayout";
import {reduxWrapper} from "../store/store";
import {getData, getRunningOperationPromises} from "../store/api-reducer";
import {Card, Image, List, Select} from "antd";
const { Option } = Select;
import styled from "styled-components";
import {fromEvent} from "rxjs";
import {map, debounceTime, distinctUntilChanged, switchMap, tap, filter} from 'rxjs/operators'
import Text from "antd/lib/typography/Text";
import Search from "antd/lib/input/Search";
import React, {useEffect, useState} from "react";
import Link from "next/link";


const StyledCard = styled(Card)`
  .ant-card {
  }
  .ant-card-body {
    
    display: flex;
    height: 400px;

    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 30px;

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

export default function Index({data, initialData}) {

    const [searchResult, setSearchResult] = useState(null);
    const [searchInput, setSearchInput] = useState(null);
    const [searchStream, setSearchStream] = useState(false);
    const [sortType, setSortType] = useState('byAuthor');

    const [books, setBooks] = useState(data);

    const [authStatus, setAuthStatus] = useState(initialData.authStatus);

    useEffect(() => {

        !!books && sortItems(sortType);
        setBooks(books)
    }, [])



    useEffect(() => {
        setAuthStatus(initialData.authStatus)
    }, [initialData.authStatus]);


    const sortItems = (sortType) => {
        // console.log(sortType)
        if (sortType === 'byAuthor') {
            console.log('byAuthor')

            const res = books.sort(function(a, b){
                let nameA=a.author.toLowerCase(), nameB=b.author.toLowerCase()
                if (nameA < nameB) {
                    return -1
                }
            });
            setBooks(res)
        }

        if (sortType === 'byTitle') {
            const res = books.sort(function(a, b){
                let nameA=a.title.toLowerCase(), nameB=b.title.toLowerCase()
                if (nameA < nameB) {
                    return -1
                }
            });
            setBooks(res)
        }

        if (sortType === 'byRate') {
            const res = books.sort(function(a, b){
                let nameA= Number(a.rating), nameB=Number(b.rating)
                if (nameA < nameB) {
                    return -1
                }
            });
            setBooks(res)
        }
    }

    function onSort(e) {
        setSortType(e);
        sortItems(e);
    }


    useEffect(() => {
        setSearchResult(document.getElementById('result'))
        setSearchInput(document.getElementById('search'))

    }, [])


    useEffect(() => {
        const parseData = (value) => {
            const matchTitle = (book) => !!book.title.toLowerCase().match(RegExp(`${value.toLowerCase()}`));
            const matchAuthor = (book) => !!book.author.toLowerCase().match(RegExp(`${value.toLowerCase()}`));
            let titleList = data.filter(book => matchTitle(book) === true);
            let authorList = data.filter(book => matchAuthor(book) === true);
            return titleList.concat(authorList);
        }

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
    }, [searchInput, searchStream, searchResult, data])

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
    }, [searchStream, searchResult])


    function logout() {
        initialData.authStatus = false;
        setAuthStatus(false);
    }


    console.log("render");
    console.log(books);
    return (
        <MainLayout class="container" title={'Page Index'}>
            <nav>
                <div>

                    {authStatus ? <span>{localStorage.userMail}</span> : <Link href={'/login'}><a>Login Page</a></Link>}
                    {authStatus && <button onClick={logout}>Logout</button>}
                </div>
            </nav>
            <Text style={{display: "flex", justifyContent: "center", fontSize: "4.2em", marginBottom: "30px"}} mark>The World Bestsellers</Text>
            <Search id="search" placeholder="Поиск по автору или названию книги" allowClear style={{width: "100%", marginBottom: "20px"}}/>
            <div id="result"></div>

            {/*    <Row gutter={8}>*/}
            {/*    </Row>*/}

            <Select defaultValue="byAuthor" style={{ width: 120 }} onChange={onSort}>
                <Option value="byAuthor">Автор</Option>
                <Option value="byTitle">Название</Option>
                <Option value="byRate">Рейтинг</Option>
            </Select>


            <List
                grid={{gutter: 16, column: 3}}
                itemLayout="horizontal"
                size="large"
                pagination={{
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 6,
                }}
                dataSource={books ? books : []}
                renderItem={item => (
                    <List.Item
                        key={item.title}
                    >
                        <Link href={`/book/${item.bookId}`}>
                            <a>
                                <StyledCard>
                                <p title={item.title}>{item.title}</p>
                                <span author={item.author}>{item.author}</span>
                                <Image height={200}
                                       alt={item.title}
                                       src={item.img}
                                       preview={false}
                                />
                            </StyledCard>
                            </a>
                        </Link>
                    </List.Item>
                )}
            />

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
        return {props: {data: res[0].data, initialData: {authStatus: false}}};
    }
);
