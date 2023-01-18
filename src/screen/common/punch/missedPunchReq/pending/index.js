import React from "react";
import MainComponent from "../component/mainComponent";

const Pending = ({ route }) => {
    return (
        <MainComponent pending={true} route={route} />
    )
}
export default Pending