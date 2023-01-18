import React, { useState } from "react";
import { Alert } from "react-native";
import { useDispatch } from "react-redux";
import { setTitle, setId } from "../../../../redux/department/reducer";
import ModalView from "../modalView";
import Content from "../../components/content";
import { editAction, onDeleteAction } from "../../../../redux/department/action";

const ContentView = (props) => {
    const dispatch = useDispatch()
    const [visible, setVisible] = useState(false)

    return (
        <>
            <ModalView onSave={() => { editAction({ index: props.index }), setVisible(false) }} modalTitle={"Edit Departments"} edit={true} visible={visible} setVisible={setVisible} />
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
            }} onEdit={() => { dispatch(setTitle(props?.title)), dispatch(setId(props?.id)), setVisible(true) }} {...props} />
        </>
    )
}
export default ContentView