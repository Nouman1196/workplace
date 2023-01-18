import React from "react";
import { View, Modal } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ModalHeader from "../../components/modalHeader";
import { styles } from "./styles";
import ButtonGradient from "../../../../components/buttons";
import { FormInput, DropDown } from "../../../../components/FormInput";
import { setTitle, setDepartment } from "../../../../redux/designation/reducer";

const ModalView = ({ visible, setVisible, onSave, modalTitle }) => {
    const { title, department } = useSelector((state) => state.designationApi);
    const { departmentsDropDown } = useSelector((state) => state.departmentApi);
    const dispatch = useDispatch()
    return (
        <Modal animationType="fade" visible={visible} onRequestClose={() => setVisible(false)} transparent={true}>
            <View style={styles.modalContainer}>
                <View style={styles.modalInternalContainer}>
                    <ModalHeader onCross={() => setVisible(false)} title={modalTitle} />
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
                        title={"Department"}
                        placeholder={"Please Select Department"}
                        onConfirm={(data) => { dispatch(setDepartment(data)) }}
                        data={departmentsDropDown}
                        placeholderStyle={styles.placeholderStyle}
                        containerStyle={styles.dropDownContainer}
                        titleStyle={styles.dropDownTitle}
                        textInputContainerStyle={styles.textInputContainerStyle}
                        value={department?.value}
                    />
                    <ButtonGradient onPress={onSave} btnContainer={styles.btnContainer} style={styles.btn} textStyle={styles.btnTitle} title={'Save'} />
                </View>
            </View>
        </Modal>
    )
}

export default ModalView       