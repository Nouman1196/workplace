import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../../styles';
import { setSearchKeywords } from '../../../../../../redux/employee/reducer';

const ListHeader = ({ }) => {
    const { searchKeywords } = useSelector((state) => state.employeeApi);
    const dispatch = useDispatch()
    return (
        <View style={styles.searchContainer}>
            <TextInput value={searchKeywords} onChangeText={(text) => dispatch(setSearchKeywords(text))} style={styles.textInputStyle} placeholder="Search here..." />
            {searchKeywords &&
                <Text onPress={() => dispatch(setSearchKeywords(''))} style={styles.clearText}>Clear</Text>
            }
        </View>
    )
}
export default ListHeader