import IDAppProps from '../components/DAppProps';
import ActionTypes from 'src/constants/ActionTypes';

export interface IRootProps {
    new_dapps: IDAppProps[];
    exchange_dapps: IDAppProps[];
    game_dapps: IDAppProps[];
} 
const initialState: IRootProps = {
    new_dapps: [],
    exchange_dapps: [],
    game_dapps: []
};

export default (state = initialState, action: any) => {
    switch (action.type) {
        case ActionTypes.INITED:
            return {
                ...state,
                new_dapps: action.new_dapps,
                exchange_dapps: action.exchange_dapps,
                game_dapps: action.game_dapps
            }
        default:
            return state;
    }
};