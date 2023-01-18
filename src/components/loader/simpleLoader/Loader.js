import React from "react";
import Color from "../../../theme/colors/colors";
import { ActivityIndicator, Modal } from "react-native";

const Loader = ({ animating }) => {
    return (
        <Modal visible={animating} transparent={true}>
            <ActivityIndicator style={{ flex: 1 }} size="large" color={Color.red} animating={animating} />
        </Modal>
    )
}

export default Loader