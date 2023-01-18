import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { onMount } from "../../../../redux/missedRequests/action";
import MissedPunchRequest from "../../../common/punch/missedPunchReq";

const PunchMissedManager = () => {
    const dispatch = useDispatch()
    const { routes, index } = useSelector((state) => state.missedRequestsApi);

    useEffect(() => {
        onMount()
    }, [index])
    return (
        <MissedPunchRequest routes={routes} index={index} />
    )
}

export default PunchMissedManager