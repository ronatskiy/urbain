import React from "react";
import PropTypes from "prop-types";

import { showWizard, wizardIds } from "./components/tutorials/index";
import Header from "./components/header/header";
import MainView from "./components/main-view/main-view";
import Footer from "./components/footer/footer";
import { config } from "../configuration";
import "./components/common/app-layout.scss";

const IS_FOOTER_VISIBLE = config.isFooterVisible;

class App extends React.Component {
    static propTypes = {
        viewportId: PropTypes.string.isRequired,
    };

    componentDidMount() {
        showWizard({ wizardId: wizardIds.GETTING_STARTED_WIZARD });
    }

    render() {
        return (
            <>
                <Header className="app-layout__header" />
                <MainView className="app-layout__main" viewportId={this.props.viewportId} />
                {IS_FOOTER_VISIBLE && <Footer className="app-layout__footer" />}
            </>
        );
    }
}

export default App;
