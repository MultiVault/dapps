import * as React from 'react';
import Item from './Item';
import IDappProps from './DAppProps';

export interface IRowItemsProps {
    readonly name: string;
    readonly items: IDappProps[];
}

const RowItems: React.SFC<IRowItemsProps> =  (props) => {
    const {items} = props;
    return (
        <div className="block">
            <div className="block-header">
                <h2>{props.name}</h2>
            </div>
            <div className="block-body">
                <div className="row">
                    {items.map(item => {
                        return (
                            <Item key={item.name} {...item} />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default RowItems;