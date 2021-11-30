import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';

import JobsList from "./components/jobslist";
import localeEsMessages from "./locales/es";


ReactDOM.render(
    <IntlProvider locale="es-ES" messages={localeEsMessages}>
        <JobsList/>
    </IntlProvider>, document.getElementById("root"));
