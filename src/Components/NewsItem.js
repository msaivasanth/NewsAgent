import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, date, name, source} = this.props;
    return (
      <div className='my-3'>
        <div className="card"  style={{width: "18rem"}}>
          <div style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0"
          }}>
            <span className="badge rounded-pill bg-danger" style={{left: "90%", zIndex: "1"}}>
              {source}
            </span>
          </div>
          <img src={!imageUrl ? "https://cdn.ndtv.com/common/images/ogndtv.png" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">By {!name ? "Unknown" : name} on {new Date(date).toDateString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
