import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class AllPosts extends Component {

    render() {
        const allFiles = (ctx => {
            let keys = ctx.keys();
            let values = keys.map(ctx);
            return keys.reduce((o, k, i) => { o[k] = values[i]; return o; }, {});
        })(require.context('./json', true, /.json/));
        return (
            <Fragment>
                {allFiles && <div className="row w-100 py-5">
                    <div className="col-lg-12 justify-content-center">
                        <h3 className="text-center">All Posts</h3>
                    </div>

                    {Object.values(allFiles).map((data, key) => {
                        return (
                            <div className="col-md-4 pb-4" key={key}>
                                <div className="card w-100">
                                    <div className="card-body">
                                        <h5 className="card-title">{data.title}</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">{data.time}</h6>
                                        <p className="card-text">{data.description}</p>
                                    </div>
                                    <Link className="stretched-link" to={{ pathname: `/post/${data.id}` }}></Link>
                                </div>
                            </div>
                        )
                    })}

                </div>}
            </Fragment>
        );
    }

}

export default AllPosts;