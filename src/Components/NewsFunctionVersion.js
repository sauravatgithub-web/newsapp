import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    // if(props.category !== "general") {
    //     document.title = `News-${this.capitalize(props.category)}`;
    // }

    const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1); 
    }


    const updateNews  = async() => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        try {
            setLoading(true);
            let data = await fetch(url);
            props.setProgress(35);
            let parsedData = await data.json();
            props.setProgress(70);
            setArticles(parsedData.articles);
            setTotalResults(parsedData.totalResults);
            setLoading(false);
        }
        catch(e) {
            console.log("Something is not working.");
        }
        props.setProgress(100);
    };
    
    useEffect(() => {
        updateNews();
    })

    const fetchMoreData = async() => {
        setPage(page+1);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        try {
            let data = await fetch(url);
            let parsedData = await data.json();
            setArticles(articles.concat(parsedData.articles));
            setTotalResults(parsedData.totalResults);
        }
        catch(e) {
            console.log("Something is not working.");
        }
    }  

    return (
    <>
        <h1 className="text-center">Daily News - Top {props.category === "general" ? "" : capitalize(props.category)} Headlines</h1>
        <InfiniteScroll
            dataLength = {articles.length}
            next = {fetchMoreData}
            hasMore = {articles.length !== totalResults}
            loader = {<Spinner/>}>
            
            <div className="container">
                <div className = "row">
                    {articles.map((element) => {
                        return <div className = "col-md-4" key = {element.url}>
                            <NewsItem title = {element.title} description = {element.description} imageUrl = {element.urlToImage} newsUrl = {element.url} author = {element.author} publishedAt = {element.publishedAt}/>
                        </div>
                    })}
                </div>
            </div>
        </InfiniteScroll>
    </>
    )
}

News.defaultProps = {
    country: "in",
    category: "general",
    pageSize : 9
}
News.propType = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number
}

export default News
