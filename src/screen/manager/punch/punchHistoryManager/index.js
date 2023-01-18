import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsUser } from "../../../../redux/punchHistories/reducer";
import PunchHistory from "../../../common/punch/punchHistory";
import { onMount } from "../../../../redux/punchHistories/action";

const PunchHistoryManager = ({ navigation }) => {
    const { index, routes } = useSelector((state) => state.punchHistoriesApi);
    const dispatch = useDispatch()

    useEffect(() => {
        navigation.addListener('focus', () => {
            dispatch(setIsUser(false))
        });
        onMount({ isUser: false })
    }, [index])

    return (
        <PunchHistory index={index} routes={routes} />
    )
}

export default PunchHistoryManager