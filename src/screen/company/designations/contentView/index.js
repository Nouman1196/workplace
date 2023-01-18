import React, { useState } from "react";
import { Alert } from "react-native";
import { useDispatch } from "react-redux";
import { setTitle, setId, setDepartment } from "../../../../redux/designation/reducer";
import ModalView from "../modalView";
import Content from "../../components/content";
import { onEditAction, onDeleteAction } from "../../../../redux/designation/action";

const ContentView = (props) => {
    const dispatch = useDispatch()
    const [visible, setVisible] = useState(false)

    return (
        <>
            <ModalView onSave={() => { onEditAction({ index: props.index }), setVisible(false) }} modalTitle={"Edit Designation"} edit={true} visible={visible} setVisible={setVisible} />
            <Content key={props.index} onDelete={() => {
                Alert.alert(
                    props?.title,
                    "Are you sure to delete this?",
                    [
                        {
                            text: "Cancel",
                            onPress: () => console.log("Cancel Pressed"),
                            style: "cancel"
                        },
                        { text: "OK", onPress: () => { dispatch(setId(props.id)), onDeleteAction({ index: props.index }) } }
                    ]
                );
            }} onEdit={() => { dispatch(setId(props?.id)), dispatch(setDepartment({ key: props?.department?.id, value: props?.department?.name })), dispatch(setTitle(props?.title)), setVisible(true) }} {...props} />
        </>
    )
}
export default ContentView