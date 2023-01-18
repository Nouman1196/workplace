import React, { useState } from "react";
import { View } from "react-native";
import ButtonGradient from "../../../../components/buttons";
import { EditWhiteIcon } from "../../../../assets/svg";
import { styles } from "./styles";
import ModalView from "../modalView";
import { onCreateAction } from "../../../../redux/department/action";

const ListHeader = ({ btnTitle }) => {
    const [visible, setVisible] = useState(false)

    return (
        <View style={styles.listHeaderContainer}>
            <ModalView onSave={() => { onCreateAction(), setVisible(false) }} visible={visible} setVisible={setVisible} modalTitle={"Add Departments"} />
            <ButtonGradient btnContainer={styles.btnContainer} children={<EditWhiteIcon />} onPress={() => setVisible(true)} style={styles.btn} textStyle={styles.btnTitle} title={btnTitle} />
        </View>
    )
}

export default ListHeader