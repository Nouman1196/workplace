import React from "react";
import MainComponent from "../components/mainComponent";

const Pending = ({ route }) => {
    return (
        <MainComponent route={route} pending={true} />
    )
}
export default Pending