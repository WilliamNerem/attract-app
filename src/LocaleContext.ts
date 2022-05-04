import React from "react";

const defaultValue = {
    locale: 'no',
    setLocale: () => {}
};

export default React.createContext(defaultValue);