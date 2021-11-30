import React from 'react';
import ReactDOM from "react-dom";

import JobsList from "./components/jobslist";
import LanguageWrapper from "./components/LanguageWrapper";

ReactDOM.render(
    <LanguageWrapper>
        <JobsList/>
    </LanguageWrapper>, document.getElementById("root"));
