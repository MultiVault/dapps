import * as React from 'react';
import IDAppProps from './DAppProps';

const Item: React.SFC<IDAppProps> =  (props) => {
    const handleClick = () => {
        window.open(props.url, '_self');
    };

    return (
        <div className="col col-12 col-sm-6 col-md-4" onClick={handleClick}>
            <div className="media">
                <img className="media-logo mr-3" src={props.logo_url} alt={props.name}/>
                <div className="media-body">
                    <h5 className="media-title mt-0 mb-1">{props.name}</h5>
                    <p className="media-text">{props.description}</p>
                </div>
            </div>
        </div>
    );
}

export default Item;