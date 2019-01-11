import * as React from 'react';
import IDAppProps from './DAppProps';

const Card: React.SFC<IDAppProps> =  (props) => {
    const handleClick = () => {
        window.open(props.url, '_self');
    };
    return (
        <div className="card" onClick={handleClick}>
            <img className="card-img-top" src={props.logo_url} alt={props.name}/>
            <div className="card-body">
              <h5 className="card-title">{props.name}</h5>
              <p className="card-text">{props.description}</p>
            </div>
        </div>
    );
}

export default Card;