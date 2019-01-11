import * as React from 'react';
import Card from './Card';
import IDAppProps from './DAppProps';

export interface ICardsDeckProps {
    readonly name: string;
    readonly cards: IDAppProps[];
}

const CardsDeck: React.SFC<ICardsDeckProps> =  (props) => {
    const {cards} = props;
    return (
        <div className="block">
            <div className="block-header">
                <h2>{props.name}</h2>
            </div>
            <div className="block-body">
                <div className="card-deck">
                    {cards.map(card => {
                        return (
                            <Card key={card.name} {...card} />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default CardsDeck;