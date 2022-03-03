import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./redux";

export const ResetStates = () => {
    const dispatch = useDispatch();
    const { resetStates } = bindActionCreators(actionCreators, dispatch);
    resetStates();
};