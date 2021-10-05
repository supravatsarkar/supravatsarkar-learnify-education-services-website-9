import React from 'react';

const SingleBlog = props => {
    const { title, author, description, img, date } = props.blog;
    return (
        <div className="card mb-3 shadow" >
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={img} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description.slice(0, 200)}</p>
                        <p className="card-text"><small className="text-muted">By: {author}</small></p>
                        <p className="card-text"><small className="text-muted">Data: {date}</small></p>
                        <div className="btn btn-success">Read More</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBlog;