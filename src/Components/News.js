import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

export class News extends Component {
    static defaultProps = {
        country: "in",
        category: "general",
        pageSize : 9
    }
    static propType = {
        country: PropTypes.string,
        category: PropTypes.string,
        pageSize: PropTypes.number
    }

    capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1); 
    }

    constructor(props) {  // sabse pehle constructor run hota hai and then render
        super(props);
        this.state = {
            articles : [],
            loading : false,
            page : 1,
            totalResults : 0
        }
        if(this.props.category !== "general") {
            document.title = `News-${this.capitalize(this.props.category)}`;
        }
    }

    async updateNews () {
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        try {
            let data = await fetch(url);
            this.props.setProgress(35);
            let parsedData = await data.json();
            this.props.setProgress(70);
            this.setState({
                articles: parsedData.articles,
                totalResults : parsedData.totalResults
            });
        }
        catch(e) {
            console.log("Something is not working.");
        }
        this.props.setProgress(100);
    };
    
    async componentDidMount () { // ye render ke baad run hota hai
        this.updateNews();
    };

    fetchMoreData = async() => {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({page : this.state.page + 1});
        try {
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                articles: this.state.articles.concat(parsedData.articles),
                totalResults : parsedData.totalResults
            });
        }
        catch(e) {
            console.log("Something is not working.");
        }
    }  

    render() {
        return (
        <>
            <h1 className="text-center" style = {{margin : '55px 0px 10px'}}>Daily News - Top {this.props.category === "general" ? "" : this.capitalize(this.props.category)} Headlines</h1>
            <InfiniteScroll
                dataLength = {this.state.articles.length}
                next = {this.fetchMoreData}
                hasMore = {this.state.articles.length !== this.state.totalResults}
                loader = {<Spinner/>}>
                
                <div className="container">
                    <div className = "row">
                        {this.state.articles.map((element) => {
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
}

export default News
