import { useState, useEffect } from 'react';

interface props {
    key: string
    defaultValue: boolean
}

const getState = ({key, defaultValue}: props) => {
    const stored = sessionStorage.getItem(key);
    if (!stored) {
        return (defaultValue);
    }
    return (JSON.parse(stored));
};

export const useGetSetState = ({key, defaultValue}: props) => {
    const [value, setValue] = useState(
        getState({key: key, defaultValue: defaultValue})
    );

    useEffect(() => {
        sessionStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};