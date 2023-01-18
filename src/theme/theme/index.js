import Color from "../colors/colors";
import { StyleSheet, Platform, Dimensions } from 'react-native';
import { WP, HP } from '../responsivenes';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import TextStyle from "../textStyle/textStyle";
const { height, width } = Dimensions.get('window')


const boxWithShadow = {
    shadowColor: Color.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 6
}
const noRecord = {
    alignSelf: 'center',
    height: height / 3.5,
    width: height / 3,
}
export const sideMargin = 15
const reportButtons = {
    backgroundColor: Color.white,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    borderRadius: 4,
    paddingVertical: 8,
}
const Theme = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Color.backgroundColor
    },
    container: {
        flex: 1,
        backgroundColor: Color.backgroundColor
    },
    redcontainer: {
        flex: 1,
        backgroundColor: '#DD384A'
    },
    whiteContainer: {
        flex: 1,
        backgroundColor: Color.backgroundColor
    },
    innerWhiteContainer: {
        flex: 1,
        backgroundColor: '#FAFAFA',
        marginTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },

    innerWhiteProfileContainer: {
        flex: 1,
        backgroundColor: '#FAFAFA',
        marginTop: 60,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    dropDownContainer: {
        flex: 1,
        backgroundColor: Color.white,
    },
    subContainer: {
        flex: 1,
        backgroundColor: Color.white,
        marginHorizontal: 50,
        marginTop: WP(5),
    },
    titleList: {
        fontWeight: 'bold',
        color: '#000',
        fontSize: 15,
        marginHorizontal: 5,
    },
    punchtitleList: {
        fontWeight: 'bold',
        color: '#000',
        marginHorizontal: 5,
        fontSize: RFValue(9, 580)

    },
    heading: {
        fontSize: RFPercentage(3.5),
        color: '#000',
        textAlign: 'center',
        fontFamily: 'Rubik-Medium'
    },
    gif: {
        alignSelf: 'center',
        height: HP(20),
        width: WP(50)
    },
    grp: {
        alignSelf: 'center',
        height: height / 8,
        width: height / 6.8
    },
    subHeading: {
        color: '#000',
        fontFamily: 'Rubik-Regular',
    },
    forgetPassword: {
        marginTop: 4,
        fontSize: RFPercentage(2),
        paddingLeft: 21,
        color: '#000',
        alignSelf: 'flex-end',
        fontFamily: 'Rubik-Medium'
    },
    textinput: {
        flex: 1,
        color: "black",
        fontFamily: 'Rubik-Regular',
        width: WP(75),
        height: WP(11)
    },
    btnStyle: {
        marginTop: HP(10),
        backgroundColor: 'red',
        color: Color.white,
        borderRadius: 4,
        marginBottom: WP(10),
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 4,
        width: WP(40),
        alignSelf: 'center'
    },
    innerBtnStyle: {
        backgroundColor: 'red',
        color: Color.white,
        borderRadius: 4,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 4,
    },
    btnTextstyle: {
        color: Color.white,
        paddingVertical: 12,
        fontSize: RFValue(15, 580),
        fontWeight: 'bold',
        fontFamily: 'Rubik-Medium'
    },
    textinputViewList: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center'
    },
    imageNewUser: {
        height: WP(25),
        width: WP(25),
        borderRadius: 200,
        alignSelf: 'center',
        borderColor: Color.lightGray,
        borderWidth: 2
    },
    flatlistView: {
        marginHorizontal: 2,

    },
    textinputSection: {
        backgroundColor: '#fc4a4b',
        height: WP(11),
        width: WP(11),
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '-3%',
        marginRight: Platform.OS == 'ios' ? 5 : 0
    },
    InputView: {
        backgroundColor: "#fff",
        color: '#000',
        borderRadius: 4,
        // paddingHorizontal: 10,
        fontWeight: 'bold',
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 4,
    },

    SearchInputView: {
        backgroundColor: "#fff",
        color: '#000',
        marginVertical: 20,
        // borderWidth: 1,
        borderRadius: 2,
        // borderColor: 'red',
        fontWeight: 'bold',
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 4,
        marginHorizontal: 10
    },

    InputView2: {

        backgroundColor: "#fff",
        color: '#000',
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginTop: 5,
        borderRadius: 100,
        fontWeight: 'bold',
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 4,
    },
    inputLabel: {
        // color: Color.black,
        color: "#343A40",
        marginLeft: 5,
        marginTop: 10,
        marginBottom: 5,
        fontSize: 12,
        fontFamily: "Rubik-Medium",

    },
    headerProfile: {
        color: Color.white,
        fontWeight: 'bold',
        fontSize: 25,
        fontFamily: 'Rubik-Regular'
    },
    profileInpuView: {
        backgroundColor: "#fff",
        color: '#000',
        fontWeight: 'bold',
        paddingBottom: 5,
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
    },
    profileHeaderSection: {
        height: HP(30),
        borderBottomLeftRadius: 50
    },
    headerSection: {
        flex: 1
    },
    headerInputSection: {
        backgroundColor: "#fff",
        color: '#000',
        flexDirection: 'row',
        paddingHorizontal: 10,
        borderRadius: 100,
        fontWeight: 'bold',
        flexDirection: 'row',
        alignItems: 'center', width: 250
    },
    DashBoardTouchableOpacity: {
        borderRadius: 4,
        marginVertical: 15,
        padding: 10,
        width: '100%'
    },
    cardRaper: {
        marginTop: WP(-20),
        justifyContent: 'center'
    },
    flatlistTitle: {
        fontWeight: 'bold',
        flex: 1,
        textAlignVertical: 'center',
        color: Color.white,
        fontSize: 20,
        fontFamily: 'Rubik-Medium'
    },
    chavronIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '55%'
    },
    historyHeader: {
        fontSize: RFPercentage(1.6),
        textAlign: 'center',
        fontFamily: 'Rubik-Medium',
        color: Color.white
    },

    modalViewContainerBlack: {
        backgroundColor: 'rgba(0,0,0,0.4)',
        flex: 1,
    },
    modalViewContainerTransparent: {
        backgroundColor: Color.transparent,
        flex: 1,
        marginBottom: 10
    },

    //Main
    horizontalPaddingContainer: {
        paddingHorizontal: sideMargin,

    },
    //Custom Drawer
    DrawerDpContainer: {
        alignItems: 'center',
        flex: 0.5,
        justifyContent: 'center',
        backgroundColor: "#DD384A",
        borderBottomRightRadius: 120
    },
    DrawerDpIcon: {
        width: 80,
        height: 80,
        borderRadius: 200,
        alignSelf: 'center',
    },
    drawerNameText: {
        ...TextStyle.lMediumWhiteText,
        marginVertical: 6
    },
    drawerSecondContainer: {
        flex: 1,
        marginTop: '20%'
    },
    logoutBtnContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        padding: 18,
    },
    DrawercustomItem: {
        // padding: 18,
        bottom: 0,
    },
    logoutBtnText: {
        ...TextStyle.mediumRegularBlackText,
        marginLeft: 16
    },
    drawerPoweredByTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 16,
    },
    // custom Header 
    customHeaderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Color.transparent,
        marginTop: 5,
        opacity: 0.2,

    },

    // Drawer Navigation style 
    drawerLinearGradientContainer: {
        borderRadius: 50,
        padding: 5,
    },
    drawerLinearGradientContainerAddLeave: {
        borderRadius: 50,
        padding: 6.5
    },
    drawerLabelText: {
        ...TextStyle.mediumRegularBlackText,
        marginLeft: -20,
        // fontWeight:"bold"
    },
    // Custom Tab bar
    customTabBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'green',
        ...boxWithShadow,
        paddingVertical: 14,
        position: "absolute",
        right: 25,
        bottom: 0
    },
    customTabBarTouchableContainer: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center'
    },
    customTabBarAddButtonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        ...boxWithShadow,
        bottom: 0,
        right: 10,
        position: 'absolute'
    },
    customTabBarButtonGradient: {
        width: 55,
        height: 55,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    //bottom tab
    worlplacegifModal: {
        flex: 1,
        backgroundColor: 'rgba(225,225,225,0.7)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    workplaceGif: {
        height: width / 2,
        width: height / 3
    },
    flexOne: {
        flex: 1
    },
    modalButtonsContainer: {
        backgroundColor: Color.white,
        padding: 10,
    },
    bottomBarModalMinButton: {
        marginHorizontal: '40%',
    },
    bottomBarModalGradient: {
        borderRadius: 5,
        padding: 2.5,
    },
    bottomBarModalContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 30,
        justifyContent: 'space-around'
    },
    alignItemCenter: {
        alignItems: 'center'
    },
    bottomBarModalButtonGradientContainer: {
        borderRadius: 54,
        padding: 2.5,
        ...boxWithShadow,
        marginBottom: 8,
        height: 54,
        width: 54
    },

    //login
    loginGifContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    loginFieldContainer: {
        justifyContent: 'flex-start',
        marginHorizontal: 50,
        flex: 2
    },

    // global for every input
    textInputText: {
        flex: 1,
        padding: 10,
        ...TextStyle.mediumRegularBlackText,

    },
    textInputTextplaceholderColor: {
        flex: 1,
        padding: 10,
        ...TextStyle.mediumRegularplaceholderColorText,

    },
    textInputTextMultiline: {
        flex: 1,
        padding: 10,
        maxHeight: 100,
        ...TextStyle.mediumRegularBlackText
    },
    textInputContainer: {
        marginTop: 10,
    },

    // global for gradient buttons
    gradientButtonStyle: {
        alignSelf: 'center',
        paddingVertical: 8,
        paddingHorizontal: 40,

    },

    smallGradientButton: {
        alignSelf: 'center',
        marginTop: '10%',
        paddingVertical: 5,
        paddingHorizontal: 20
    },
    notificationGradientButtonStyle: {
        alignSelf: 'center',
        paddingVertical: 5,
        paddingHorizontal: 5
        // paddingVertical: 10,
        // paddingHorizontal: 90,

    },
    center: {
        alignItems: 'center'
    },
    end: {
        alignItems: 'flex-end'
    },
    // dashboard Header
    dashboardHeaderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#F5F5F5',
        paddingVertical: 38,
        paddingHorizontal: 16
    },
    dashboardheaderDp: {
        height: 58,
        width: 58,
        borderRadius: 30,
        borderWidth: 3,
        borderColor: Color.red
    },
    alignItemEnd: {
        alignItems: 'flex-end'
    },

    // dashboard
    timerContainer: {
        borderRadius: 10,
        margin: sideMargin,
        ...boxWithShadow,
        padding: 10
    },
    timerInterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5
    },
    dashboardCard: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        justifyContent: 'space-between',
        elevation: 4
    },
    managerdashboardCard: {
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        // alignItems: "center",
        marginHorizontal: sideMargin,
        marginTop: 20,
        borderBottomColor: Color.darkRed,
        borderBottomWidth: 4,
        elevation: 4,

    },
    dashboardCardGradient: {
        height: 50,
        width: 50,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
    },
    dashboardCardImage: {
        height: 100,
        width: 100,
        resizeMode: 'contain'
    },

    // Report 
    reportFlatlistContainer: {
        paddingHorizontal: sideMargin
    },
    nothingToShowReport: {
        ...noRecord,
        marginVertical: height / 10
    },
    reportButtonContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    reportButtonGradientContainer: {
        borderRadius: 10,
        alignItems: 'center',
        // flex: 1,
        paddingVertical: 25,
        // marginTop: 6,
        // marginBottom: 11,
        ...boxWithShadow
    },
    reportButtonGradientImage: {
        height: 30,
        width: 30,
        marginBottom: 5
    },
    reportStartButtonContainer: {
        ...reportButtons
    },
    reportEndButtonContainer: {
        ...reportButtons,
        marginLeft: 10
    },
    reportSearchContainer: {
        backgroundColor: Color.white,
        justifyContent: 'center',
        flex: 1,
        marginLeft: 10,
    },
    reportSearchGradient: {
        justifyContent: 'center',
        paddingVertical: 12,
        ...boxWithShadow,
        alignItems: 'center',
        borderRadius: 4,
    },
    reportButtonIcons: {
        alignSelf: 'center'
    },
    reportitemMainContainer: {
        marginVertical: 10,
    },
    reportItemContainer: {
        // ...boxWithShadow,
        backgroundColor: Color.white
    },
    reportItemDetailsContainer: {
        flexDirection: 'row'
    },
    reportItemSepratorContainer: {
        justifyContent: 'space-between',
        borderWidth: 1,
        flex: 1,
        alignItems: 'center',
        borderColor: '#F6F6F6',
        borderStartColor: Color.transparent,
    },
    reportItemDetailedContainer: {
        paddingVertical: 19,
        alignItems: 'center'
    },
    reportItemSeprator: {
        borderWidth: 1,
        borderTopColor: '#F6F6F6',
        borderColor: Color.transparent,
        width: '100%'
    },

    // punch History
    punchHistoryBtn: {
        // borderBottomLeftRadius: 5,
        // borderBottomRightRadius: 5,
        padding: 20,
        shadowOffset: { width: 1, height: 1 },
        ...boxWithShadow,
        backgroundColor: Color.white
    },
    punchHistoryListTextWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    punchHistoryListTextInternalWrapper: {
        alignItems: 'center',
        flex: 1
    },

    // detailed punch history
    detailedPunchHistoryInternalContainer: {
        flex: 1,
        backgroundColor: "#FAFAFA"
    },
    detailedPunchHistoryFlatlistContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Color.white,
        padding: 15,
        margin: 5,
        borderRadius: 5,
    },
    detailedFlatlistText: {
        flex: 1,
        ...TextStyle.mediumBRedText
    },
    detailedFlatlistText1: {
        flex: 1,
        ...TextStyle.mediumBlackText
    },
    flatlistContainer: {
        margin: sideMargin
    },
    googleMaps: {
        flex: 1,
        // marginBottom: HP(-3),

    },

    floatingButtonsInnerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 6,
        marginBottom: 11,
        ...boxWithShadow,
    },

    floatingButtonsInnerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 6,
        marginBottom: 11,
        ...boxWithShadow,
    },
    floatingButtonsInner: {
        padding: 14,
        flex: 1,
        justifyContent: 'center',
        borderRadius: 10
    },
    floatingButtonContainer: {
        backgroundColor: 'transparent',
        position: 'absolute',
        zIndex: 1,
        width: '100%'
    },

    //Leave tab bar
    tabBarContainer: {
        flexDirection: 'row',
        paddingTop: 20,
        justifyContent: 'space-between',
        marginHorizontal: sideMargin
    },
    tabBarButton: {
        borderRadius: 4,
        justifyContent: 'center',
        paddingVertical: 12,
        ...boxWithShadow,
        paddingHorizontal: 18
    },
    // LeaveForm
    leaveContainer: {
        flex: 1
    },
    leaveFormContainer: {
        flex: 1
    },
    leaveKeyboardContainer: {
        marginBottom: 10,
        marginHorizontal: sideMargin
    },
    leaverInnerFlatlistContainer: {
        flexDirection: 'row',
        flex: 1,

    },
    leaveMaxLengthText: {
        ...TextStyle.smallRegularBlackText,
        textAlign: 'right',
        padding: 5
    },
    //Holidays
    leaveInnerTitle: {
        margin: sideMargin,
        ...TextStyle.lMediumBlackText,
    },
    headerItem: {
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        padding: WP(2),
    },
    holidaysFlatlistContent: {
        backgroundColor: '#F5F5F5',
    },
    flatlistSeprator: {
        height: 1,
        backgroundColor: Color.lightGray
    },
    leaveInnerFlatlistBoldText: {
        ...TextStyle.smallSemiBoldBlackText,
        padding: 15,
        borderRightWidth: 0.5,
        textAlign: 'center',
        flex: 1,
        borderRightColor: Color.lightGray,
    },
    leaveInnerFlatlistText: {
        ...TextStyle.smallRegularBlackText,
        padding: 15,
        borderRightWidth: 0.5,
        textAlign: 'center',
        flex: 1,
        borderRightColor: Color.lightGray,
    },
    noRecordsText: {
        ...TextStyle.mediumBRedText,
        textAlign: 'center'
    },

    //Leave History
    leaveHistoryBtnContainer: {
        flexDirection: 'row',
        margin: sideMargin
    },
    noRecordLeaveHistory: {
        ...noRecord,
        marginVertical: height / 8
    },
    noRecordNotification: {
        ...noRecord,
        marginVertical: height / 4
    },
    leaveHistoryBtnTitlemediumBlackText: {
        ...TextStyle.mediumBlackText,
        textAlign: 'center'
    },
    leaveHistoryBtnTitlemediumWhiteText: {
        ...TextStyle.mediumWhiteText,
        textAlign: 'center'
    },
    leaveHistoryBtnInnerContainer: {
        flex: 1
    },
    leaveHistoryFloatingBtn: {
        borderRadius: 4,
        padding: 6,
        flex: 1,
        marginRight: 5,
        ...boxWithShadow,
        alignItems: 'center',
        justifyContent: 'center'
    },
    leaveHistoryFloatingBtnNoShadow: {
        borderRadius: 4,
        padding: 6,
        flex: 1,
        marginRight: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    leaveHistoryFloatingBtnM0: {
        borderRadius: 4,
        padding: 6,
        flex: 1,
        ...boxWithShadow,
        alignItems: 'center',
        justifyContent: 'center'
    },
    leaveHistoryTitle: {
        margin: sideMargin,
        ...TextStyle.lMediumBlackText
    },
    leaveHitoryListContainer: {
        marginVertical: 8,
        paddingHorizontal: sideMargin
    },
    leaveHistoryInnerListContainer: {
        // borderBottomLeftRadius: 5,
        // borderBottomRightRadius: 5,
        padding: 20,
        backgroundColor: Color.white,
        flex: 1,
        alignItems: 'center',
        ...boxWithShadow,
        flexDirection: 'row'
    },
    HolidayContainor: {
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        padding: 10,
        backgroundColor: Color.white,
        flex: 1,
        alignItems: 'center',
        ...boxWithShadow,
        flexDirection: 'row'
    },
    leaveHistoryContentRed: {
        ...TextStyle.mediumRegularRedText,
        flex: 1
    },
    leaveHistoryContentBlack: {
        ...TextStyle.mediumRegularBlackText,
        flex: 1,
        marginLeft: 20
    },
    HolidayText: {
        ...TextStyle.mediumSemiBoldGrayText,
        marginTop: 10, color: '#B0B0B0', textAlign: "center"
    },
    leaveHistoryContentLeftBlue: {
        ...TextStyle.mediumRegularThemeBlueText,
        flex: 1,
        textAlign: 'left',
        marginHorizontal: 5
    },
    leaveHistoryModalContainer: {
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        backgroundColor: Color.white,
        paddingHorizontal: 10,
        // paddingBottom: 30,
        flex: 1
    },
    notificationModalContainer: {
        backgroundColor: Color.white,
        paddingHorizontal: 10,
        marginHorizontal: 15,
        borderRadius: 10,
        flex: 1,
        // justifyContent: 'center'
    },
    leaveHistoryModalButton: {
        marginHorizontal: '40%',
        paddingBottom: 30,
        paddingTop: 10
    },
    leaveHistoryModalGradientButton: {
        borderRadius: 5,
        padding: 2.5,
    },
    leaveHistoryModalContentContainer: {
        backgroundColor: "#F8F8F8",
        flexDirection: 'row',
        margin: 5,
        padding: '3%'
    },
    // profile
    profileContainer: {
        backgroundColor: Color.white,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        flex: 1,
        marginTop: Platform.OS == 'android' ? '30%' : '20%'
    },
    profileDpContainer: {
        bottom: 55,
        alignItems: 'center'
    },
    profileEditButton: {
        backgroundColor: Color.white,
        borderRadius: 20,
        padding: 3,
        position: 'absolute',
        right: WP(38),
        top: WP(18),
        borderWidth: 1,
        borderColor: Color.grey
    },
    profileInputContainer: {
        marginHorizontal: sideMargin,
        flex: 1
    },
    profileLeftIcon: {
        borderRadius: 5,
        textAlign: 'center',
        textAlignVertical: 'center',
        marginLeft: 0
    },
    mainItem: {
        flex: 1,
        justifyContent: 'space-evenly',
        backgroundColor: Color.white,
        borderTopLeftRadius: 35
    },
    headerBar: {
        height: 3,
        backgroundColor: Color.white,
        position: 'absolute',
        bottom: 1,
    },


    //Employee
    employeeTitle: {
        margin: sideMargin,
        ...TextStyle.lMediumBlackText,

    },
    flatlistContent: {
        flex: 1,
        marginBottom: 10
    },

    //MissedRequest

    MissedRequsetContainer: {
        borderTopLeftRadius: 35,
        backgroundColor: Color.white,
        paddingHorizontal: 10,
        borderTopLeftRadius: 0,
        marginHorizontal: 10
    },
    FilterButton: {
        marginTop: 10
    },

    MissedReqGradientBtn: {
        padding: 15,
        marginRight: 15,
        marginLeft: 5, height: 50,
        borderRadius: 4
    },
    //ManagerLeave

    filterCheckbox: {
        marginLeft: sideMargin
    },
    SelectAll: {
        color: Color.red,
        marginHorizontal: 5
    },

    //HeaderContent

    headerContent: {
        alignContent: 'center',
        alignItems: 'center',
    },

    //RowContent

    rowContent: {
        flexDirection: 'row',
    },
    rowContentAlign: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rowContentSpace: {
        flexDirection: "row", justifyContent: "space-between"
    },
    logOut: {
        alignSelf: 'center', paddingVertical: 5, paddingHorizontal: 50, marginVertical: 10
    },
    camera: {
        position: 'absolute', bottom: 5, right: 10, backgroundColor: Color.placeholderColor, padding: 5, borderRadius: 30
    },
    selectPhoto: {
        paddingVertical: 15, justifyContent: 'center', alignItems: 'center', borderTopColor: 'gray', borderColor: 'transparent', borderWidth: 0.5
    },
    takePhoto: {
        paddingVertical: 15, justifyContent: 'center', alignItems: 'center', borderTopColor: 'gray', borderColor: 'transparent', borderWidth: 0.5
    },
    showModal: {
        paddingVertical: 15, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', borderRadius: 10
    },
    mutualButton: {
        flexDirection: 'row', justifyContent: "space-between", marginTop: 20
    },
    messageData: {
        color: "black", fontWeight: 'bold', textAlign: "center", fontSize: 20, marginTop: 20
    },
    messageModal: { backgroundColor: '#f9f9f9', borderTopRightRadius: 30, borderTopLeftRadius: 30 },
    notificationView: {
        padding: 20, flexDirection: 'row', alignItems: "center", elevation: 5, backgroundColor: 'white',
    },
    markRead: {
        textAlign: "right", color: Color.black, fontWeight: 'bold', marginRight: 12, marginTop: 10
    },
    notificationContent: {
        marginLeft: 10, paddingHorizontal: 10, width: "100%"
    },

    notificationImage: {
        borderRadius: 20, borderWidth: 2, borderColor: Color.lightGray, padding: 2, backgroundColor: Color.white
    },
    message: { color: "#8A8A8A", width: '83%' },
    swipeItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',

    },
    swipeOut: { marginVertical: 5, marginHorizontal: 12, borderRadius: 10 },

    adjustRow: {
        flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "center"
    },

    iconBox: {
        backgroundColor: "#FFDDDF", padding: 8, borderRadius: 4
    },
    holidayTitle: {
        fontWeight: "400", marginLeft: 10, color: "#343A40", textAlignVertical: 'center', fontSize: 20
    }

});
export default Theme;