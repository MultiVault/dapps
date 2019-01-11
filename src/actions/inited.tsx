import ActionTypes from '../constants/ActionTypes';
import IDAppProps from '../components/DAppProps';

const inited = () => {
    const dapps = require('../_data/dapps');
    const exchanges = require('../_data/exchanges');
    const games = require('../_data/games');

    const newDapps: IDAppProps[] = [];

    dapps.map(app => {
        newDapps.push({...app, logo_url: 'https://raw.githubusercontent.com/MultiVault/tokens/master/dapps/' + app.logo});
    });

    const exchangeDapps: IDAppProps[] = [];
    exchanges.map(app => {
        exchangeDapps.push({...app, logo_url: 'https://raw.githubusercontent.com/MultiVault/tokens/master/dapps/' + app.logo});
    });

    const gameDapps: IDAppProps[] = [];
    games.map(app => {
        gameDapps.push({...app, logo_url: 'https://raw.githubusercontent.com/MultiVault/tokens/master/dapps/' + app.logo});
    });

    return {
        type: ActionTypes.INITED,
        new_dapps: newDapps,
        exchange_dapps: exchangeDapps,
        game_dapps: gameDapps
    }
}

export default inited;