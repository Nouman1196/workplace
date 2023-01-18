import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import CheckBox from "../../../../../../../components/checkBox";
import { ButtonGreen, ButtonRed } from "../Button";
import { multiSelect } from "../../../../../../../redux/missedRequests/action";
import { updatePunchRequest } from "../../../../../../../redux/missedRequests/action";
import styles from "./styles";

const ListHeader = ({ }) => {
    const { missedRequestData, history_ids } = useSelector((state) => state.missedRequestsApi);
    return (
        <View style={styles.container}>
            {missedRequestData.length > 0 &&
                <CheckBox checked={missedRequestData.length == history_ids.length ? true : false} onPress={multiSelect} title={"Select All"} />
            }
            {history_ids.length > 0 &&
                <View style={styles.btnContainer}>
                    <ButtonGreen onPress={() => updatePunchRequest('bulk_active')} style={styles.greenButton} title={"Approve"} />
                    <ButtonRed onPress={() => updatePunchRequest('bulk_reject')} title={"Reject"} />
                </View>
            }
        </View>
    )
}
export default ListHeader