import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description, imageUrl, newsUrl, author, publishedAt} = this.props;
        return (
            <div className = "my-3">
                <div className ="card" style = {{width: "18rem"}}>
                    <img src = {imageUrl ? imageUrl : "https://images.moneycontrol.com/static-mcnews/2023/05/Collage-Maker-01-May-2023-12-01-PM-8961-770x433.jpg"}  className ="card-img-top" alt="..."/>
                    <div className = "card-body">
                        <h5 className = "card-title">{title}</h5>
                        <p className = "card-text">{description ? description : title}</p>
                        <p className ="card-text"><small className = "text-body-secondary">{author ? "By "+author : ""} on {new Date(publishedAt).toTimeString()}</small></p>
                        <a href = {newsUrl} className ="btn btn-sm btn-primary">Read More ...</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
