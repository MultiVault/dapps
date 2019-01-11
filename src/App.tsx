import * as React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';

import en_US from './locales/en-US';
import ILocale from './locales';
import CardsDeck from './components/CardsDeck';
import RowItems from './components/RowItems';
import {IRootProps} from './reducers';

import inited from './actions/inited';

import { connect } from 'react-redux';

import './App.scss';

interface IAppProps extends IRootProps {
    inited: () => void
}

interface IAppState {
    appLocale: ILocale
}

class App extends  React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props);

        const appLocale = en_US;
        addLocaleData(appLocale.data);
        this.state = {
            appLocale
        };
    }

    public componentDidMount () {
        this.props.inited();
    }

    public render() {
        const {appLocale} = this.state;

        const {new_dapps, exchange_dapps, game_dapps} = this.props;

        return (
            <IntlProvider locale={appLocale.locale} messages={appLocale.messages}>
                <div className="container">
                    <CardsDeck name={'New'} cards={new_dapps}/>
                    <RowItems name={'Exchanges'} items={exchange_dapps}/>
                    <RowItems name={'Games'} items={game_dapps}/>
                </div>
            </IntlProvider>
        );
    }
};

const mapStateToProps = (state: IRootProps) => ({
    new_dapps: state.new_dapps,
    exchange_dapps: state.exchange_dapps,
    game_dapps: state.game_dapps
});

const mapDispatchToProps = dispatch => ({
    inited: () => dispatch(inited())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
