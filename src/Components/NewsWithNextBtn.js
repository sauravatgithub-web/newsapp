import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'


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
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e288e0abcb214f919ab5b6f6cae21970&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        try {
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                articles: parsedData.articles,
                totalResults : parsedData.totalResults
            });
        }
        catch(e) {
            console.log("Something is not working.");
        }
    };
    
    async componentDidMount () { // ye render ke baad run hota hai
        this.updateNews();
    };

    handlePreClick = async () => {
        this.setState({page : this.state.page - 1});
        this.updateNews();
    };

    handleNextClick = async () => {
        this.setState({page : this.state.page + 1});
        this.updateNews();
    };    

    render() {
        return (
        <div className = "container my-3">
            <h1 className="text-center">Daily News - Top {this.props.category === "general" ? "" : this.capitalize(this.props.category)} Headlines</h1>
            {this.state.loading && <Spinner/>}
            <div className = "row">
                {this.state.articles.map((element) => {
                    if(!this.state.loading) {
                        return <div className = "col-md-4" key = {element.url}>
                            <NewsItem title = {element.title} description = {element.description} imageUrl = {element.urlToImage} newsUrl = {element.url} author = {element.author} publishedAt = {element.publishedAt}/>
                        </div>
                    }
                    else {
                        return null;
                    }
                })}
            </div>
            <div className = "container d-flex justify-content-between">
                <button type = "button" disabled = {this.state.page <= 1} className = "btn btn-secondary mx-2" onClick = {this.handlePreClick}>&larr; Previous</button>
                <button type = "button" className = "btn btn-secondary mx-2" onClick = {this.handleNextClick}disabled = {this.state.page + 1 > Math.ceil(this.state.totalResults / 20)}>Next &rarr;</button>
            </div>
        </div>
        )
    }
}

export default News
