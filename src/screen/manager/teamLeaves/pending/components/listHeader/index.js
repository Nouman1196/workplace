import React from "react";
import { useSelector } from "react-redux";
import { View } from "react-native";
import CheckBox from "../../../../../../components/checkBox";
import { ButtonGreen, ButtonRed } from "../Button";
import { updateLeaveRequest, multiSelect } from "../../../../../../redux/manageLeaves/action";
import styles from "./styles";

const ListHeader = ({ }) => {
    const { leavesData, leave_request_ids } = useSelector((state) => state.manageLeaveApi);
    return (
        <View style={styles.container}>
            {leavesData.length > 0 &&
                <CheckBox checked={leavesData.length == leave_request_ids.length ? true : false} onPress={multiSelect} title={"Select All"} />
            }
            {leave_request_ids.length > 0 &&
                <View style={styles.btnContainer}>
                    <ButtonGreen onPress={() => updateLeaveRequest('bulk_active')} style={styles.greenButton} title={"Approve"} />
                    <ButtonRed onPress={() => updateLeaveRequest('bulk_reject')} title={"Reject"} />
                </View>
            }
        </View>
    )
}
export default ListHeader