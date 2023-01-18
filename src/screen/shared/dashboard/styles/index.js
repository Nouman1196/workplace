import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Color from '../../../../theme/colors/colors';

const shadow = {
    shadowColor: "#B0B0B0",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
}

const styles = StyleSheet.create({
    boxes: {
        backgroundColor: Color.white,
        borderRadius: 10,
        paddingHorizontal: 16,
        paddingVertical: 28,
        width: '45%',
        ...shadow
    },
    teamManagementBarContainer: {
        backgroundColor: Color.white,
        borderRadius: 10,
        padding: 15,
        justifyContent: 'space-between',
        ...shadow
    },
    calendar: {
        flex: 1,
        paddingBottom: 10,
        marginTop: 10,
        borderRadius: 10,
        marginBottom: '10%',
        ...shadow
    },

    teamModal: {
        backgroundColor: '#f9f9f9', borderRadius: 20, marginHorizontal: 15
    },
    signUPHeader: {
        marginVertical: '10%', flexDirection: "row", marginHorizontal: '5%'
    },
    calendarTheme: {
        backgroundColor: Color.white,
        calendarBackground: Color.white,
        textSectionTitleColor: '#0085A2',
        textSectionTitleDisabledColor: '#D9E1E8',
        selectedDayBackgroundColor: '#CC283D',
        selectedDayTextColor: '#2D4150',
        todayTextColor: '#00ADF5',
        dayTextColor: '#2D4150',
        textDisabledColor: '#D9E1E8',
        dotColor: '#00ADF5',
        selectedDotColor: Color.red,
        arrowColor: Color.black,
        disabledArrowColor: '#D9E1E8',
        monthTextColor: Color.black,
        indicatorColor: Color.red,
        textDayFontWeight: '300',
        textMonthFontWeight: 'bold',
        textDayHeaderFontWeight: '300',
        textDayFontSize: RFValue(10),
        textMonthFontSize: RFValue(10),
        textDayHeaderFontSize: RFValue(10),
    },
    contentContainer: {
        marginHorizontal: 25
    },
    columnWrapperStyle: {
        marginBottom: 10,
        justifyContent: 'space-between'
    }
})

export default styles