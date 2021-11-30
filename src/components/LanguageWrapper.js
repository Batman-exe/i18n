import React, {useState} from 'react';
import {IntlProvider} from 'react-intl';
import Spanish from '../locales/es.json';
import English from '../locales/en.json';

export const Context = React.createContext();
const local = navigator.language;

let language;
if (local === 'en') {
    language = English;
} else {
    language = Spanish;
}

const LanguageWrapper = (props) => {
    const [locale, setLocale] = useState(local);
    const [messages, setMessages] = useState(language);

    function selectLanguage(e) {
        const newLocale = e.target.value;
        setLocale(newLocale);
        if (newLocale === 'en') {
            setMessages(English);
        } else {
            setMessages(Spanish);
        }
    }

    return (
        <Context.Provider value={{locale, selectLanguage}}>
            <IntlProvider messages={messages} locale={locale}>
                {props.children}
            </IntlProvider>
        </Context.Provider>
    );
}

export default LanguageWrapper;