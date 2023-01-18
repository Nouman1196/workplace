import React from "react";
import { View, Text, Modal } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { CrossModalIcon } from "../../../../assets/svg";
import ModalHeader from "../../components/modalHeader";
import { styles } from "./styles";
import ButtonGradient from "../../../../components/buttons";
import { FormInput, DropDown } from "../../../../components/FormInput";
import { setStatus, setTitle, setDescription } from "../../../../redux/project/reducer";

const ModalView = ({ visible, setVisible, onSave, modalTitle }) => {
    const { title, statusList, status, description } = useSelector((state) => state.projectApi);
    const dispatch = useDispatch()
    return (
        <Modal animationType="fade" visible={visible} onRequestClose={() => setVisible(false)} transparent={true}>
            <View style={styles.modalContainer}>
                <View style={styles.modalInternalContainer}>
                    <ModalHeader onCross={() => setVisible(false)} title = {modalTitle} />
                    <FormInput
                        title={"Title"}
                        placeholder={"Please Enter Title"}
                        onChangeText={(text) => dispatch(setTitle(text))}
                        style={styles.leftIconSpace}
                        containerStyle={styles.inputContainer}
                        titleStyle={styles.titleStyle}
                        value={title}
                        textInputContainerStyle={styles.textInputContainerStyle}
                    />

                    <DropDown
                        title={"Status"}
                        placeholder={"Please Enter Title"}
                        onConfirm={(data) => { dispatch(setStatus(data)) }}
                        data={statusList}
                        placeholderStyle={styles.placeholderStyle}
                        containerStyle={styles.dropDownContainer}
                        titleStyle={styles.dropDownTitle}
                        textInputContainerStyle={styles.textInputContainerStyle}
                        value={status?.value}
                    />
                    <FormInput
                        title={"Description"}
                        placeholder={"Please Enter Description"}
                        onChangeText={(text) => dispatch(setDescription(text))}
                        style={styles.leftIconSpace}
                        containerStyle={styles.inputContainer}
                        titleStyle={styles.titleStyle}
                        value={description}
                        textInputContainerStyle={styles.textInputContainerStyle}
                    />
                    <ButtonGradient onPress={onSave} btnContainer={styles.btnContainer} style={styles.btn} textStyle={styles.btnTitle} title={'Save'} />
                </View>
            </View>
        </Modal>
    )
}

export default ModalView       