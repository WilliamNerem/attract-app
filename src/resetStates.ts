import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./redux";
import {useEffect} from "react";

export const ResetStates = () => {
    const dispatch = useDispatch();
    const { resetStates } = bindActionCreators(actionCreators, dispatch);
    useEffect(() => {
        resetStates();
    }, []);
};