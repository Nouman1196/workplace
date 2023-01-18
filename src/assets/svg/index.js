import Svg, { RadialGradient, ClipPath, SvgXml, Defs, LinearGradient, Path, Rect, Stop, Circle, Use, G, Ellipse, Pattern, Mask, Image, } from 'react-native-svg';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View } from 'react-native';

export const MonthlyAttendanceIcon = ({ style }) => (
    <Svg style={style} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
        <G id="Group_2556" data-name="Group 2556" transform="translate(-41 -358)">
            <Rect id="Rectangle_438" data-name="Rectangle 438" width="30" height="30" rx="5" transform="translate(41 358)" fill="#faf0ff" />
            <Path id="check-square-o" d="M16.933,9.645v3.824a3.469,3.469,0,0,1-3.464,3.464H3.464a3.336,3.336,0,0,1-2.45-1.016A3.336,3.336,0,0,1,0,13.469V3.464a3.336,3.336,0,0,1,1.016-2.45A3.336,3.336,0,0,1,3.464,0H13.469a3.306,3.306,0,0,1,1.407.3.363.363,0,0,1,.216.277.373.373,0,0,1-.108.35l-.589.588a.38.38,0,0,1-.277.12.385.385,0,0,1-.108-.024,2.139,2.139,0,0,0-.541-.072h-10A1.853,1.853,0,0,0,2.1,2.1a1.853,1.853,0,0,0-.565,1.359V13.469A1.853,1.853,0,0,0,2.1,14.828a1.853,1.853,0,0,0,1.359.565H13.469a1.93,1.93,0,0,0,1.924-1.924V10.415a.36.36,0,0,1,.108-.264l.77-.77a.38.38,0,0,1,.277-.12.321.321,0,0,1,.144.036.35.35,0,0,1,.24.35Zm2.778-5.881-9.79,9.79a.958.958,0,0,1-1.371,0L3.379,8.382a.958.958,0,0,1,0-1.371L4.7,5.688a.958.958,0,0,1,1.371,0L9.235,8.849l7.781-7.78a.958.958,0,0,1,1.371,0l1.323,1.323a.958.958,0,0,1,0,1.371Z" transform="translate(46.001 365)" fill="#8d4fa9" />
        </G>
    </Svg>
)
export const AiroplaneIcon = ({style, color}) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
        <G id="Group_2633" data-name="Group 2633" transform="translate(-40 -208)">
            <Rect id="Rectangle_446" data-name="Rectangle 446" width="30" height="30" rx="5" transform="translate(40 208)" fill={"#ffe1e5"}/>
            <Path id="Layer_3" data-name="Layer 3" d="M10,2.5c-4.41,0-8,3.14-8,7s3.59,7,8,7a8.955,8.955,0,0,0,2.44-.34L15.2,17.92a.539.539,0,0,0,.8-.42V14.135A6.5,6.5,0,0,0,18,9.5C18,5.64,14.41,2.5,10,2.5Zm5.92,7.75H11.755a.21.21,0,0,0-.15.065l-2.65,2.82a.2.2,0,0,1-.145.065H7.6a.205.205,0,0,1-.185-.29l1.235-2.66H4.73a.21.21,0,0,1-.18-.11L3.2,7.64h.92a.265.265,0,0,1,.2.09l.78.845a.19.19,0,0,0,.165.07l3.09-.19-1-1.775H8.795a.235.235,0,0,1,.155.055L10.815,8.25l3.345-.175a1.22,1.22,0,0,1,.9.315L16.3,9.5a.46.46,0,0,1-.38.745Z" transform="translate(45 212.5)" fill={color} />
        </G>
    </Svg>
)
export const EditWhiteIcon = ({ style }) => (
    <Svg style={style} xmlns="http://www.w3.org/2000/svg" width="12.102" height="12.102" viewBox="0 0 12.102 12.102">
        <G id="Iconly_Bold_Edit-Square" data-name="Iconly/Bold/Edit-Square" transform="translate(-2 -2)">
            <G id="Edit-Square" transform="translate(2 2)">
                <Path id="Path_826" data-name="Path 826" d="M8.874.006a3.221,3.221,0,0,1,2.376.84A3.256,3.256,0,0,1,12.1,3.228h0V8.874a3.251,3.251,0,0,1-.84,2.382,3.235,3.235,0,0,1-2.382.84H3.228a3.226,3.226,0,0,1-2.382-.84,3.226,3.226,0,0,1-.84-2.382h0V3.228A3.226,3.226,0,0,1,.846.846,3.226,3.226,0,0,1,3.228.006H8.874ZM8.717,2.769a.956.956,0,0,0-1.354,0h0l-.405.411a.161.161,0,0,0,0,.224l.033.033.149.148.3.3.366.365c.076.077.127.128.131.133a.409.409,0,0,1,.109.278.4.4,0,0,1-.4.4.38.38,0,0,1-.266-.109h0l-1.009-1a.131.131,0,0,0-.181,0h0L3.307,6.831a1.089,1.089,0,0,0-.32.75h0L2.95,9.013a.283.283,0,0,0,.079.206.288.288,0,0,0,.206.085h1.42a1.118,1.118,0,0,0,.78-.32h0L9.5,4.9a.96.96,0,0,0,0-1.348h0Z" transform="translate(0)" fill="#fff" />
            </G>
        </G>
    </Svg>
)

export const MonthlyHoursIcon = ({ style }) => (
    <Svg style={style} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
        <G id="Group_2555" data-name="Group 2555" transform="translate(-250 -358)">
            <G id="Group_2553" data-name="Group 2553">
                <G id="Group_2554" data-name="Group 2554">
                    <Rect id="Rectangle_439" data-name="Rectangle 439" width="30" height="30" rx="5" transform="translate(250 358)" fill="#eefcff" />
                </G>
            </G>
            <Path id="clock-o" d="M11.666,5.416v5.833a.4.4,0,0,1-.416.416H7.083a.4.4,0,0,1-.416-.416v-.833A.4.4,0,0,1,7.083,10H10V5.416A.4.4,0,0,1,10.416,5h.833a.4.4,0,0,1,.416.416ZM17.083,10a6.921,6.921,0,0,0-.95-3.554,7.066,7.066,0,0,0-2.578-2.578A6.916,6.916,0,0,0,10,2.916a6.931,6.931,0,0,0-3.554.95A7.055,7.055,0,0,0,3.867,6.445,6.925,6.925,0,0,0,2.916,10a6.925,6.925,0,0,0,.95,3.554,7.055,7.055,0,0,0,2.578,2.578,6.931,6.931,0,0,0,3.555.95,6.916,6.916,0,0,0,3.554-.95,7.066,7.066,0,0,0,2.578-2.578A6.921,6.921,0,0,0,17.083,10ZM20,10a9.783,9.783,0,0,1-1.341,5.019,9.954,9.954,0,0,1-3.639,3.639A9.783,9.783,0,0,1,10,20,9.783,9.783,0,0,1,4.98,18.658a9.954,9.954,0,0,1-3.639-3.639A9.783,9.783,0,0,1,0,10,9.783,9.783,0,0,1,1.341,4.98,9.954,9.954,0,0,1,4.98,1.341,9.783,9.783,0,0,1,10,0a9.783,9.783,0,0,1,5.019,1.341A9.953,9.953,0,0,1,18.658,4.98,9.783,9.783,0,0,1,20,10Z" transform="translate(255 363)" fill="#0085a2" />
        </G>
    </Svg>
)

export const EditIcon = ({ style, onPress }) => (
    <TouchableOpacity style={style} onPress={onPress}>
        <Svg xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" width="17" height="17" viewBox="0 0 16 16">
            <Defs>
                <LinearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                    <Stop offset="0" stopColor="#2eb7d5" />
                    <Stop offset="1" stopColor="#0085a2" />
                </LinearGradient>
            </Defs>
            <Path id="Path_828" data-name="Path 828" d="M11.732.008a4.259,4.259,0,0,1,3.141,1.111,4.3,4.3,0,0,1,1.119,3.149h0v7.464a4.3,4.3,0,0,1-1.111,3.149,4.277,4.277,0,0,1-3.149,1.111H4.268a4.265,4.265,0,0,1-3.149-1.111A4.265,4.265,0,0,1,.008,11.732h0V4.268A4.265,4.265,0,0,1,1.119,1.119,4.265,4.265,0,0,1,4.268.008h7.464ZM11.524,3.66a1.264,1.264,0,0,0-1.79,0h0L9.2,4.2a.212.212,0,0,0,0,.3l.044.043.2.2.4.4.483.483c.1.1.168.169.173.176a.541.541,0,0,1,.144.368.527.527,0,0,1-.527.527.5.5,0,0,1-.352-.144h0L8.424,5.219a.174.174,0,0,0-.24,0h0L4.372,9.031a1.439,1.439,0,0,0-.424.991h0L3.9,11.916a.374.374,0,0,0,.1.272.381.381,0,0,0,.272.112H6.154a1.479,1.479,0,0,0,1.031-.424h0l5.378-5.394a1.269,1.269,0,0,0,0-1.782h0Z" fill="url(#linear-gradient)" />
        </Svg>
    </TouchableOpacity>
)

export const DeleteIcon = ({ style, onPress }) => (
    <TouchableOpacity style={style} onPress={onPress}>
        <Svg xmlns="http://www.w3.org/2000/svg" width="15" height="17" viewBox="0 0 14.4 16">
            <G id="Iconly_Bold_Delete" data-name="Iconly/Bold/Delete" transform="translate(-3 -2)">
                <G id="Delete" transform="translate(3 2)">
                    <Path id="Path_825" data-name="Path 825" d="M12.751,5.358a.581.581,0,0,1,.419.187.6.6,0,0,1,.145.446c0,.054-.426,5.446-.67,7.716a2.334,2.334,0,0,1-2.4,2.262C9.212,15.992,8.2,16,7.2,16c-1.058,0-2.093-.008-3.1-.031a2.333,2.333,0,0,1-2.345-2.262c-.251-2.278-.669-7.662-.677-7.716a.633.633,0,0,1,.152-.446.565.565,0,0,1,.419-.187ZM8.852,0a1.589,1.589,0,0,1,1.522,1.2h0l.131.584a1.024,1.024,0,0,0,.993.813H13.83a.578.578,0,0,1,.57.587h0v.3a.584.584,0,0,1-.57.587H.571A.584.584,0,0,1,0,3.486H0v-.3a.579.579,0,0,1,.571-.587H2.9A1.026,1.026,0,0,0,3.9,1.782h0l.122-.546A1.59,1.59,0,0,1,5.548,0h3.3Z" transform="translate(0 0)" fill="#757575" />
                </G>
            </G>
        </Svg>
    </TouchableOpacity>
)
export const CrossModalIcon = ({ onPress, style }) => (
    <TouchableOpacity style={style} onPress={onPress}>
        <Svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
            <Path id="Icon_ionic-md-close" data-name="Icon ionic-md-close" d="M21.523,8.923l-1.4-1.4-5.6,5.6-5.6-5.6-1.4,1.4,5.6,5.6-5.6,5.6,1.4,1.4,5.6-5.6,5.6,5.6,1.4-1.4-5.6-5.6Z" transform="translate(-7.523 -7.523)" fill="#343a40" />
        </Svg>
    </TouchableOpacity>
)
export const DesignationGrayIcon = ({ style }) => (
    <Svg style={style} xmlns="http://www.w3.org/2000/svg" width="16" height="15.2" viewBox="0 0 16 15.2">
        <Path id="bxs-briefcase" d="M17.4,6.2H15V4.6A1.6,1.6,0,0,0,13.4,3H8.6A1.6,1.6,0,0,0,7,4.6V6.2H4.6A1.6,1.6,0,0,0,3,7.8v2.4H19V7.8A1.6,1.6,0,0,0,17.4,6.2ZM8.6,4.6h4.8V6.2H8.6Zm4,8H9.4V11H3v5.6a1.6,1.6,0,0,0,1.6,1.6H17.4A1.6,1.6,0,0,0,19,16.6V11H12.6Z" transform="translate(-3 -3)" fill="#b0b0b0" />
    </Svg>
)
export const MonthlyLateIcon = ({ style }) => (
    <Svg style={style} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
        <G id="Group_2557" data-name="Group 2557" transform="translate(-43 -489)">
            <Rect id="Rectangle_440" data-name="Rectangle 440" width="30" height="30" rx="5" transform="translate(43 489)" fill="#daffea" />
            <Path id="user" d="M20,19.856a4.529,4.529,0,0,1-.976,2.921A2.926,2.926,0,0,1,16.667,24H3.327A2.925,2.925,0,0,1,.974,22.778,4.529,4.529,0,0,1,0,19.856,22.476,22.476,0,0,1,.132,17.35a13.469,13.469,0,0,1,.492-2.375,7.9,7.9,0,0,1,.914-2.048,4.377,4.377,0,0,1,1.47-1.39A4.052,4.052,0,0,1,5.108,11,6.752,6.752,0,0,0,10,13a6.752,6.752,0,0,0,4.89-2,4.058,4.058,0,0,1,2.1.539,4.377,4.377,0,0,1,1.47,1.39,7.9,7.9,0,0,1,.914,2.046,13.469,13.469,0,0,1,.492,2.375A22.476,22.476,0,0,1,20,19.857ZM16,6a5.779,5.779,0,0,1-1.758,4.241A5.783,5.783,0,0,1,10,12,5.776,5.776,0,0,1,5.756,10.24,5.781,5.781,0,0,1,4,6,5.781,5.781,0,0,1,5.756,1.757,5.776,5.776,0,0,1,10,0a5.783,5.783,0,0,1,4.241,1.758A5.779,5.779,0,0,1,16,6Z" transform="translate(48.002 492)" fill="#27ae60" />
        </G>
    </Svg>
)

export const RemainingLeavesIcon = ({ style }) => (
    <Svg style={style} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
        <G id="Group_2558" data-name="Group 2558" transform="translate(-251 -488)">
            <Rect id="Rectangle_441" data-name="Rectangle 441" width="30" height="30" rx="5" transform="translate(251 488)" fill="#fdf0d5" />
            <Path id="calendar" d="M1.538,20H5V16.539H1.538Zm4.231,0H9.615V16.539H5.769V20ZM1.538,15.77H5V11.923H1.538Zm4.231,0H9.615V11.923H5.769V15.77ZM1.538,11.154H5V7.692H1.538ZM10.385,20h3.846V16.539H10.385ZM5.769,11.154H9.616V7.692H5.769ZM15,20h3.462V16.539H15Zm-4.615-4.231h3.846V11.923H10.384V15.77ZM6.154,5.385V1.923a.391.391,0,0,0-.385-.385H5a.391.391,0,0,0-.385.385V5.385A.391.391,0,0,0,5,5.769h.769A.391.391,0,0,0,6.154,5.385ZM15,15.769h3.462V11.923H15V15.77Zm-4.616-4.615H14.23V7.692H10.385Zm4.615,0h3.462V7.692H15Zm.385-5.769V1.923A.391.391,0,0,0,15,1.538H14.23a.389.389,0,0,0-.384.385V5.385a.39.39,0,0,0,.385.385H15a.39.39,0,0,0,.385-.385ZM20,4.615V20a1.559,1.559,0,0,1-1.538,1.538H1.538a1.478,1.478,0,0,1-1.082-.456A1.478,1.478,0,0,1,0,20V4.615A1.478,1.478,0,0,1,.456,3.533a1.478,1.478,0,0,1,1.082-.456H3.076V1.923A1.852,1.852,0,0,1,3.641.565,1.852,1.852,0,0,1,5,0h.769A1.852,1.852,0,0,1,7.128.565a1.852,1.852,0,0,1,.565,1.358V3.077h4.615V1.923A1.852,1.852,0,0,1,12.872.565,1.852,1.852,0,0,1,14.23,0H15a1.852,1.852,0,0,1,1.358.565,1.852,1.852,0,0,1,.565,1.358V3.077h1.538a1.478,1.478,0,0,1,1.082.456A1.478,1.478,0,0,1,20,4.615Z" transform="translate(256 492)" fill="#feb003" />
        </G>
    </Svg>
)

export const TeamManagementIcon = ({ style, small }) => (
    <Svg style={style} xmlns="http://www.w3.org/2000/svg" width={small ? "30" : "40"} height={small ? "30" : "40"} viewBox="0 0 40 40">
        <G id="Group_2566" data-name="Group 2566" transform="translate(-38 -605)">
            <G id="Group_2565" data-name="Group 2565">
                <G id="Group_2559" data-name="Group 2559">
                    <G id="Group_2561" data-name="Group 2561">
                        <G id="Group_2564" data-name="Group 2564">
                            <Rect id="Rectangle_427" data-name="Rectangle 427" width="40" height="40" rx="5" transform="translate(38 605)" fill="#ffdddf" />
                        </G>
                    </G>
                </G>
            </G>
            <Path id="_3-Friends" data-name="3-Friends" d="M12.442,11.977c3.9,0,7.228.618,7.228,3.092s-3.308,3.113-7.228,3.113c-3.9,0-7.228-.618-7.228-3.091S8.522,11.977,12.442,11.977Zm6.234-1.489a17.675,17.675,0,0,1,3.685.322,3.133,3.133,0,0,1,2.422,1.482,2.185,2.185,0,0,1,0,1.9c-.523,1.135-2.209,1.5-2.864,1.593a.206.206,0,0,1-.23-.233,5.058,5.058,0,0,0-3.017-4.979.051.051,0,0,1-.033-.053A.043.043,0,0,1,18.676,10.487Zm-12.632,0,.281,0a.042.042,0,0,1,.036.029.053.053,0,0,1-.032.054,5.057,5.057,0,0,0-3.018,4.978.206.206,0,0,1-.229.234C2.426,15.689.74,15.324.217,14.189a2.178,2.178,0,0,1,0-1.9,3.135,3.135,0,0,1,2.421-1.483,17.774,17.774,0,0,1,3.686-.321ZM12.442,0a4.779,4.779,0,0,1,4.783,4.81,4.783,4.783,0,1,1-9.567,0A4.779,4.779,0,0,1,12.442,0Zm6.494.8a4.063,4.063,0,0,1,3.892,5.129,3.992,3.992,0,0,1-4.006,2.979,3.86,3.86,0,0,1-.549-.053.18.18,0,0,1-.121-.277,6.638,6.638,0,0,0-.1-7.514.117.117,0,0,1-.018-.125.147.147,0,0,1,.094-.056A3.984,3.984,0,0,1,18.936.8ZM6.064.8a4,4,0,0,1,.806.083.154.154,0,0,1,.094.056.119.119,0,0,1-.018.125,6.638,6.638,0,0,0-.1,7.514.18.18,0,0,1-.121.277,3.729,3.729,0,0,1-.549.053A3.992,3.992,0,0,1,2.173,5.931,4.062,4.062,0,0,1,6.064.8Z" transform="translate(46 616)" fill="#cc283d" />
        </G>
    </Svg>
)

export const DrawerIcon = ({ style }) => (
    <Svg style={style} xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" width="23" height="23" viewBox="0 0 25 25">
        <Image id="adjustment_1_" data-name="adjustment (1)" width="25" height="25" href="data:image/png;base64,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" />
    </Svg>
)

export const BellIcon = ({ style, read, color }) => (
    <Svg style={style} xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" width="20" height="26.529" viewBox="0 0 20 26.529">
        <Defs>
            <LinearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                <Stop offset="0" stopColor={color ? color : "#dd384a"} />
                <Stop offset="1" stopColor={color ? color : "#cc283d"} />
            </LinearGradient>
            <LinearGradient id="linear-gradient-2" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                <Stop offset="0" stopColor={color ? color : "#2eb7d5"} />
                <Stop offset="1" stopColor={color ? color : "#0085a2"} />
            </LinearGradient>
        </Defs>
        <G id="Group_2567" data-name="Group 2567" transform="translate(-381.5 -50)">
            <G id="Notification" transform="translate(381.5 53)">
                <Path id="Path_639" data-name="Path 639" d="M7.6,20.268a30.415,30.415,0,0,1,4.76,0c.5.116,1.046.388,1.046.98a1.832,1.832,0,0,1-.817,1.382,4.277,4.277,0,0,1-2.016.86,4.464,4.464,0,0,1-1.186,0,4.257,4.257,0,0,1-2.016-.861,1.826,1.826,0,0,1-.818-1.38C6.557,20.656,7.1,20.384,7.6,20.268ZM10.053,0a8.284,8.284,0,0,1,6.432,3.088,6.522,6.522,0,0,1,1.405,4.407h0V8a4.573,4.573,0,0,0,1.25,3.352A3.955,3.955,0,0,1,20,14.066a4.252,4.252,0,0,1-1.015,2.8,5.337,5.337,0,0,1-3.412,1.662c-1.849.158-3.7.29-5.573.29a48.987,48.987,0,0,1-5.573-.29,5.332,5.332,0,0,1-3.412-1.662A4.254,4.254,0,0,1,0,14.066a3.961,3.961,0,0,1,.859-2.718A4.468,4.468,0,0,0,2.11,8h0v-.5A6.621,6.621,0,0,1,3.62,2.955,8.322,8.322,0,0,1,9.948,0h.105Z" transform="translate(0 0)" fill="url(#linear-gradient)" />
            </G>
            {!read &&
                <Circle id="Ellipse_67" data-name="Ellipse 67" cx="5" cy="5" r="5" transform="translate(391.5 50)" fill="url(#linear-gradient)" />
            }
        </G>
    </Svg>
)
export const CoffeIcon = ({ style }) => (
    <Svg style={style} xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
        <Path id="coffee" d="M16.553,20.313H8.447a15.447,15.447,0,0,1-2.173-1.856,4.763,4.763,0,0,1-1.587.293,4.5,4.5,0,0,1-3.32-1.379A4.535,4.535,0,0,1,0,14.063a4.468,4.468,0,0,1,.9-2.747,4.782,4.782,0,0,1,2.319-1.7,1.543,1.543,0,0,0,.024-.244H21.753a26.174,26.174,0,0,1,.122,3.125,5.824,5.824,0,0,1-.513,2.3,9.381,9.381,0,0,1-1.343,2.222,18.885,18.885,0,0,1-1.7,1.843A15.816,15.816,0,0,1,16.553,20.313ZM3.125,12.5q0-.366.024-1.147a3.106,3.106,0,0,0-1.16,1.135,3.124,3.124,0,0,0,2.7,4.7,3.009,3.009,0,0,0,.391-.049A7.647,7.647,0,0,1,3.125,12.5ZM14.063,4.688a5.09,5.09,0,0,0,.219,1.343,3.134,3.134,0,0,1,1.245,1.782H13.965a4.027,4.027,0,0,0-.122-.586A2.926,2.926,0,0,1,12.5,4.688a3.012,3.012,0,0,1,.915-2.21,3.008,3.008,0,0,1,2.21-.915,3.412,3.412,0,0,1,.781.1,3.1,3.1,0,0,0-1.685,1.1A3.011,3.011,0,0,0,14.063,4.688ZM9.375,3.125a5.09,5.09,0,0,0,.219,1.343,2.99,2.99,0,0,1,1.221,3.344H9.277a3.641,3.641,0,0,0,.1-.781,5.151,5.151,0,0,0-.219-1.367A2.926,2.926,0,0,1,7.813,3.125,3.012,3.012,0,0,1,8.728.915,3.007,3.007,0,0,1,10.938,0a3.412,3.412,0,0,1,.781.1,3.1,3.1,0,0,0-1.685,1.1,3.011,3.011,0,0,0-.659,1.928ZM18.75,25H6.25a8.518,8.518,0,0,1-2.832-.525A8.771,8.771,0,0,1,.965,23.206Q0,22.461,0,21.875H25q0,.586-.965,1.331a8.771,8.771,0,0,1-2.453,1.269A8.518,8.518,0,0,1,18.75,25Z" fill="#fff" />
    </Svg>
)

export const LaptopIcon = ({ style }) => (
    <Svg style={style} xmlns="http://www.w3.org/2000/svg" width="25.479" height="19.448" viewBox="0 0 25.479 19.448">
        <G id="laptop" transform="translate(-0.857 -4.915)">
            <Path id="Path_655" data-name="Path 655" d="M4.588,19.374H23.839a1.332,1.332,0,0,0,1.331-1.332V6.246a1.331,1.331,0,0,0-1.331-1.331H4.588A1.331,1.331,0,0,0,3.257,6.246v11.8A1.331,1.331,0,0,0,4.588,19.374Zm1.331-11.8H22.508v9.134H5.919V7.577Z" transform="translate(-0.616)" fill="#fff" />
            <Path id="Path_656" data-name="Path 656" d="M25.723,26.167H1.471a.614.614,0,0,0-.614.614v1.486a.612.612,0,0,0,.163.417l.869.941a.616.616,0,0,0,.45.2h22.45a.615.615,0,0,0,.436-.182l.933-.942a.615.615,0,0,0,.178-.432V26.781a.614.614,0,0,0-.614-.614ZM15.916,28.3a.126.126,0,0,1-.111.136H11.389a.125.125,0,0,1-.111-.136v-.606a.124.124,0,0,1,.111-.135h4.417a.124.124,0,0,1,.111.135V28.3Z" transform="translate(0 -5.459)" fill="#fff" />
        </G>
    </Svg>
)
export const BuildingIcon = ({ style }) => (
    <Svg style={style} xmlns="http://www.w3.org/2000/svg" width="25.306" height="26.178" viewBox="0 0 25.306 26.178">
        <G id="building-solid" transform="translate(-4 -3)">
            <Path id="Path_653" data-name="Path 653" d="M29.854,8H22V29.815h9.6V9.745A1.745,1.745,0,0,0,29.854,8ZM25.49,22.834H23.745V21.089H25.49Zm0-4.363H23.745V16.726H25.49Zm0-4.363H23.745V12.363H25.49Zm3.49,8.726H27.236V21.089h1.745Zm0-4.363H27.236V16.726h1.745Zm0-4.363H27.236V12.363h1.745Z" transform="translate(-2.293 -0.637)" fill="#fff" />
            <Path id="Path_654" data-name="Path 654" d="M16.112,3H5.85A1.85,1.85,0,0,0,4,4.85V29.178H8.363V26.561H13.6v2.618h4.363V4.85A1.85,1.85,0,0,0,16.112,3ZM8.363,22.2H6.618V20.452H8.363Zm0-4.363H6.618V16.089H8.363Zm0-4.363H6.618V11.726H8.363Zm0-4.363H6.618V7.363H8.363ZM11.854,22.2H10.108V20.452h1.745Zm0-4.363H10.108V16.089h1.745Zm0-4.363H10.108V11.726h1.745Zm0-4.363H10.108V7.363h1.745ZM15.344,22.2H13.6V20.452h1.745Zm0-4.363H13.6V16.089h1.745Zm0-4.363H13.6V11.726h1.745Zm0-4.363H13.6V7.363h1.745Z" transform="translate(0 0)" fill="#fff" />
        </G>
    </Svg>
)

export const CalendarIcon = ({ style }) => (
    <Svg style={style} id="calendar-check-fill" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" width="15" height="15" viewBox="0 0 15 15">
        <Defs>
            <LinearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                <Stop offset="0" stopColor="#cc283d" />
                <Stop offset="1" stopColor="#cc283d" />
            </LinearGradient>
        </Defs>
        <Path id="Path_657" data-name="Path 657" d="M3.75.469a.469.469,0,0,0-.937,0V.938H1.875A1.875,1.875,0,0,0,0,2.813V3.75H15V2.813A1.875,1.875,0,0,0,13.125.938h-.937V.469a.469.469,0,0,0-.937,0V.938H3.75ZM0,4.688H15v8.438A1.875,1.875,0,0,1,13.125,15H1.875A1.875,1.875,0,0,1,0,13.125ZM10.175,8.3a.469.469,0,1,0-.664-.664l-2.48,2.482L5.957,9.043a.469.469,0,0,0-.664.664L6.7,11.113a.469.469,0,0,0,.664,0L10.175,8.3Z" fill-rule="evenodd" fill="url(#linear-gradient)" />
    </Svg>
)

export const TeamLeavesIcon = ({ style }) => (
    <Svg style={style} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
        <G id="Group_2578" data-name="Group 2578" transform="translate(-39 -361)">
            <G id="Group_2577" data-name="Group 2577">
                <Rect id="Rectangle_446" data-name="Rectangle 446" width="30" height="30" rx="5" transform="translate(39 361)" fill="#cdf2fa" />
            </G>
            <Path id="calendar" d="M1.384,18H4.5V14.885H1.384Zm3.808,0H8.654V14.885H5.192V18ZM1.384,14.193H4.5V10.731H1.384Zm3.808,0H8.654V10.731H5.192v3.462ZM1.384,10.038H4.5V6.923H1.384ZM9.346,18h3.462V14.885H9.346ZM5.192,10.038H8.654V6.923H5.192ZM13.5,18h3.116V14.885H13.5ZM9.346,14.192h3.462V10.731H9.346v3.462ZM5.539,4.846V1.73a.352.352,0,0,0-.346-.346H4.5a.352.352,0,0,0-.346.346V4.846a.352.352,0,0,0,.346.346h.692A.352.352,0,0,0,5.539,4.846ZM13.5,14.192h3.116V10.731H13.5v3.462ZM9.346,10.038h3.462V6.923H9.346Zm4.154,0h3.116V6.923H13.5Zm.346-5.192V1.73a.352.352,0,0,0-.346-.346h-.692a.35.35,0,0,0-.346.346V4.846a.351.351,0,0,0,.346.346H13.5a.351.351,0,0,0,.346-.346ZM18,4.154V18a1.4,1.4,0,0,1-1.384,1.384H1.384a1.33,1.33,0,0,1-.974-.411A1.33,1.33,0,0,1,0,18V4.154A1.33,1.33,0,0,1,.411,3.18a1.33,1.33,0,0,1,.974-.411H2.769V1.73A1.667,1.667,0,0,1,3.277.508,1.667,1.667,0,0,1,4.5,0h.692A1.667,1.667,0,0,1,6.415.508,1.667,1.667,0,0,1,6.923,1.73V2.769h4.154V1.73A1.667,1.667,0,0,1,11.585.508,1.667,1.667,0,0,1,12.807,0H13.5a1.667,1.667,0,0,1,1.222.508,1.667,1.667,0,0,1,.508,1.222V2.769h1.384a1.33,1.33,0,0,1,.974.411A1.33,1.33,0,0,1,18,4.154Z" transform="translate(45 366.309)" fill="#0085a2" />
        </G>
    </Svg>
)

export const TeamStatusIcon = ({ style }) => (
    <Svg style={style} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
        <G id="Group_2579" data-name="Group 2579" transform="translate(-39 -474)">
            <Rect id="Rectangle_446" data-name="Rectangle 446" width="30" height="30" rx="5" transform="translate(39 474)" fill="#a4fac9" />
            <G id="Iconly_Bold_Download" data-name="Iconly/Bold/Download" transform="translate(43 477.5)">
                <Path id="Path_647" data-name="Path 647" d="M8.307,4.311V.7A.692.692,0,0,1,9.687.609L9.693.7V4.311h4.3a4.074,4.074,0,0,1,4,3.942l0,.194v4.535A4.077,4.077,0,0,1,14.191,17.1L14,17.1H4A4.06,4.06,0,0,1,0,13.159l0-.195V8.438A4.079,4.079,0,0,1,3.8,4.316l.187,0h4.32v5.762L6.867,8.587a.68.68,0,0,0-.981,0,.752.752,0,0,0-.072.924l.072.089L8.5,12.314a.672.672,0,0,0,.914.064l.067-.064L12.1,9.6a.735.735,0,0,0,0-1.013.679.679,0,0,0-.9-.069l-.078.069L9.693,10.074V4.312Z" transform="translate(2 2.5)" fill="#046e31" />
            </G>
        </G>
    </Svg>
)

export const TeamRequestIcon = ({ style }) => (
    <Svg style={style} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
        <G id="Group_2580" data-name="Group 2580" transform="translate(-39 -604)">
            <Rect id="Rectangle_446" data-name="Rectangle 446" width="30" height="30" rx="5" transform="translate(39 604)" fill="#ffe9b7" />
            <G id="Edit" transform="translate(47 612)">
                <Path id="Path_646" data-name="Path 646" d="M13.214,12.408a.8.8,0,0,1,0,1.592H8.773a.8.8,0,0,1,0-1.592h4.441ZM10.134.544l1.147.911a2.384,2.384,0,0,1,.891,1.363,1.868,1.868,0,0,1-.38,1.589L4.959,13.244a1.637,1.637,0,0,1-1.271.635l-2.724.033a.311.311,0,0,1-.305-.243L.04,10.986a1.659,1.659,0,0,1,.314-1.4L5.2,3.32a.243.243,0,0,1,.33-.042L7.568,4.9a.658.658,0,0,0,.5.142.735.735,0,0,0,.636-.811.817.817,0,0,0-.256-.493L6.47,2.149a.294.294,0,0,1-.05-.409l.768-1A2.01,2.01,0,0,1,10.134.544Z" transform="translate(0 0)" fill="#fcb925" />
            </G>
        </G>
    </Svg>
)

export const SmallLeaveIcon = ({ style }) => (
    <Svg style={style} xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" width="14" height="16.471" viewBox="0 0 14 16.471">
        <Defs>
            <LinearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                <Stop offset="0" stopColor="#dd384a" />
                <Stop offset="1" stopColor="#cc283d" />
            </LinearGradient>
        </Defs>
        <G id="Iconly_Bold_Paper-Plus" data-name="Iconly/Bold/Paper-Plus" transform="translate(-3.5 -2)">
            <G id="Paper-Plus" transform="translate(3.5 2)">
                <Path id="Path_645" data-name="Path 645" d="M8.031,0a.376.376,0,0,1,.375.379h0V3.031A2.758,2.758,0,0,0,11.13,5.781c.62,0,1.109.008,1.484.008.253,0,.669-.008,1.019-.008A.367.367,0,0,1,14,6.152h0v6.621a3.681,3.681,0,0,1-3.669,3.7H3.849A3.868,3.868,0,0,1,0,12.592H0V3.714A3.7,3.7,0,0,1,3.677,0H8.031ZM6.849,6.4a.612.612,0,0,0-.612.609h0V8.433h-1.4a.614.614,0,0,0,0,1.227h1.4v1.425a.612.612,0,0,0,.612.609.605.605,0,0,0,.6-.609h0V9.66H8.863a.614.614,0,0,0,0-1.227H7.453V7.008A.605.605,0,0,0,6.849,6.4ZM9.594.746a.389.389,0,0,1,.67-.275l3.283,3.448a.393.393,0,0,1-.28.665c-.67,0-1.46,0-2.029-.006A1.661,1.661,0,0,1,9.594,2.917h0Z" transform="translate(0)" fill="url(#linear-gradient)" />
            </G>
        </G>
    </Svg>
)

export const SmallPunchIcon = ({ style }) => (
    <Svg style={style} xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" width="14" height="14" viewBox="0 0 14 14">
        <Defs>
            <LinearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                <Stop offset="0" stopColor="#dd384a" />
                <Stop offset="1" stopColor="#cc283d" />
            </LinearGradient>
        </Defs>
        <G id="Iconly_Bold_Edit-Square" data-name="Iconly/Bold/Edit-Square" transform="translate(-2 -2)">
            <G id="Edit-Square" transform="translate(2 2)">
                <Path id="Path_644" data-name="Path 644" d="M10.266.007a3.726,3.726,0,0,1,2.748.972,3.767,3.767,0,0,1,.979,2.755h0v6.531a3.761,3.761,0,0,1-.972,2.755,3.743,3.743,0,0,1-2.755.972H3.734a3.732,3.732,0,0,1-2.755-.972,3.732,3.732,0,0,1-.972-2.755h0V3.734A3.732,3.732,0,0,1,.979.979,3.732,3.732,0,0,1,3.734.007h6.531Zm-.182,3.2a1.106,1.106,0,0,0-1.566,0h0l-.469.476a.186.186,0,0,0,0,.259l.038.038.172.171.348.347.423.423c.088.089.147.148.151.154a.474.474,0,0,1,.126.322.461.461,0,0,1-.462.462.439.439,0,0,1-.308-.126h0L7.371,4.567a.152.152,0,0,0-.21,0h0L3.825,7.9a1.259,1.259,0,0,0-.371.867h0l-.042,1.657a.327.327,0,0,0,.091.238.333.333,0,0,0,.238.1H5.385a1.294,1.294,0,0,0,.9-.371h0l4.706-4.72a1.11,1.11,0,0,0,0-1.559h0Z" transform="translate(0 0)" fill="url(#linear-gradient)" />
            </G>
        </G>
    </Svg>
)

export const DashboardIcon = ({ style }) => (
    <Svg style={style} xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" width="26" height="26" viewBox="0 0 26 26">
        <Defs>
            <LinearGradient id="linear-gradient" y1="0.5" x2="1" y2="0.582" gradientUnits="objectBoundingBox">
                <Stop offset="0" stopColor="#dd384a" />
                <Stop offset="1" stopColor="#cc283d" />
            </LinearGradient>
        </Defs>
        <G id="Group_2581" data-name="Group 2581" transform="translate(-21 -319)">
            <Rect id="Rectangle_507" data-name="Rectangle 507" width="26" height="26" rx="13" transform="translate(21 319)" fill="url(#linear-gradient)" />
            <G id="Category" transform="translate(29 327)">
                <Path id="Path_668" data-name="Path 668" d="M2.96,5.735a1.271,1.271,0,0,1,1.27,1.28h0v1.7A1.274,1.274,0,0,1,2.96,10H1.27A1.277,1.277,0,0,1,0,8.72H0v-1.7a1.274,1.274,0,0,1,1.27-1.28H2.96Zm5.77,0A1.274,1.274,0,0,1,10,7.015h0v1.7A1.277,1.277,0,0,1,8.73,10H7.04A1.274,1.274,0,0,1,5.77,8.72h0v-1.7a1.271,1.271,0,0,1,1.27-1.28H8.73ZM2.96,0A1.274,1.274,0,0,1,4.23,1.28h0v1.7a1.271,1.271,0,0,1-1.27,1.28H1.27A1.274,1.274,0,0,1,0,2.985H0V1.28A1.277,1.277,0,0,1,1.27,0H2.96ZM8.73,0A1.277,1.277,0,0,1,10,1.28h0v1.7a1.274,1.274,0,0,1-1.27,1.28H7.04a1.271,1.271,0,0,1-1.27-1.28h0V1.28A1.274,1.274,0,0,1,7.04,0H8.73Z" transform="translate(0 0)" fill="#fff" />
            </G>
        </G>
    </Svg>
)

export const ReportIcon = ({ style }) => (
    <Svg style={style} xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" width="26" height="26" viewBox="0 0 26 26">
        <Defs>
            <LinearGradient id="linear-gradient" y1="0.5" x2="1" y2="0.582" gradientUnits="objectBoundingBox">
                <Stop offset="0" stopColor="#dd384a" />
                <Stop offset="1" stopColor="#cc283d" />
            </LinearGradient>
        </Defs>
        <G id="Group_2582" data-name="Group 2582" transform="translate(-21 -363)">
            <Rect id="Rectangle_507" data-name="Rectangle 507" width="26" height="26" rx="13" transform="translate(21 363)" fill="url(#linear-gradient)" />
            <G id="Document" transform="translate(29 370)">
                <Path id="Path_663" data-name="Path 663" d="M7.328,0A2.434,2.434,0,0,1,10,2.683h0V8.422a2.426,2.426,0,0,1-2.672,2.689H2.672A2.438,2.438,0,0,1,0,8.422H0V2.683A2.447,2.447,0,0,1,2.672,0H7.328ZM2.822,7.633a.436.436,0,0,0-.417.206.442.442,0,0,0,0,.467.432.432,0,0,0,.417.2H7.178a.439.439,0,0,0,0-.872H2.822ZM7.178,5.1H2.822a.434.434,0,0,0,0,.867H7.178a.434.434,0,0,0,0-.867Zm-2.7-2.516H2.822v.006a.433.433,0,0,0,0,.867H4.483a.436.436,0,0,0,0-.872Z" fill="#fff" />
            </G>
        </G>
    </Svg>
)

export const RequestIcon = ({ style }) => (
    <Svg style={style} xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" width="26" height="26" viewBox="0 0 26 26">
        <Defs>
            <LinearGradient id="linear-gradient" y1="0.5" x2="1" y2="0.582" gradientUnits="objectBoundingBox">
                <Stop offset="0" stopColor="#dd384a" />
                <Stop offset="1" stopColor="#cc283d" />
            </LinearGradient>
        </Defs>
        <G id="Group_2583" data-name="Group 2583" transform="translate(-21 -407)">
            <Path id="Path_824" data-name="Path 824" d="M13,0A13,13,0,0,1,26,13a13.193,13.193,0,0,1-2.2,7.231A12.853,12.853,0,0,1,13,26,13,13,0,0,1,13,0Z" transform="translate(21 407)" fill="url(#linear-gradient)" />
            <Path id="Path_664" data-name="Path 664" d="M5.737,0A.269.269,0,0,1,6,.271H6V2.165A1.97,1.97,0,0,0,7.95,4.129c.443,0,.792.006,1.06.006.181,0,.478-.006.728-.006A.262.262,0,0,1,10,4.394h0V9.124a2.629,2.629,0,0,1-2.621,2.641H2.749A2.763,2.763,0,0,1,0,8.994H0V2.653A2.644,2.644,0,0,1,2.627,0h3.11ZM4.892,4.571a.437.437,0,0,0-.437.435h0V6.024h-1a.438.438,0,0,0,0,.876h1V7.918a.437.437,0,0,0,.437.435.432.432,0,0,0,.431-.435h0V6.9H6.331a.438.438,0,0,0,0-.876H5.323V5.006A.432.432,0,0,0,4.892,4.571ZM6.853.533a.278.278,0,0,1,.479-.2L9.676,2.8a.28.28,0,0,1-.2.475c-.479,0-1.043,0-1.449,0A1.187,1.187,0,0,1,6.853,2.084h0Z" transform="translate(29 414)" fill="#fff" />
        </G>
    </Svg>
)

export const ManageTeamIcon = ({ style }) => (
    <Svg style={style} xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" width="26" height="26" viewBox="0 0 26 26">
        <Defs>
            <LinearGradient id="linear-gradient" y1="0.5" x2="1" y2="0.582" gradientUnits="objectBoundingBox">
                <Stop offset="0" stopColor="#dd384a" />
                <Stop offset="1" stopColor="#cc283d" />
            </LinearGradient>
        </Defs>
        <G id="Group_2584" data-name="Group 2584" transform="translate(-21 -451)">
            <Rect id="Rectangle_509" data-name="Rectangle 509" width="26" height="26" rx="13" transform="translate(21 451)" fill="url(#linear-gradient)" />
            <Path id="_3-Friends" data-name="3-Friends" d="M6.968,6.707c2.183,0,4.048.346,4.048,1.731s-1.852,1.743-4.048,1.743S2.92,9.836,2.92,8.451,4.772,6.707,6.968,6.707Zm3.491-.834a9.9,9.9,0,0,1,2.064.181,1.755,1.755,0,0,1,1.356.83,1.224,1.224,0,0,1,0,1.063c-.293.636-1.237.84-1.6.892a.115.115,0,0,1-.129-.131,2.833,2.833,0,0,0-1.689-2.788.029.029,0,0,1-.018-.03A.024.024,0,0,1,10.459,5.873Zm-7.074,0h.157a.023.023,0,0,1,.02.016.029.029,0,0,1-.018.03,2.832,2.832,0,0,0-1.69,2.788.115.115,0,0,1-.128.131c-.367-.053-1.311-.257-1.6-.892a1.22,1.22,0,0,1,0-1.063,1.755,1.755,0,0,1,1.356-.83,9.954,9.954,0,0,1,2.064-.18ZM6.968,0A2.676,2.676,0,0,1,9.646,2.694a2.679,2.679,0,1,1-5.357,0A2.676,2.676,0,0,1,6.968,0ZM10.6.449a2.275,2.275,0,0,1,2.179,2.872A2.236,2.236,0,0,1,10.54,4.99a2.161,2.161,0,0,1-.308-.03.1.1,0,0,1-.068-.155A3.717,3.717,0,0,0,10.111.6a.066.066,0,0,1-.01-.07A.082.082,0,0,1,10.153.5,2.231,2.231,0,0,1,10.6.449ZM3.4.449A2.24,2.24,0,0,1,3.847.5.086.086,0,0,1,3.9.527a.067.067,0,0,1-.01.07A3.718,3.718,0,0,0,3.835,4.8a.1.1,0,0,1-.068.155,2.088,2.088,0,0,1-.308.03A2.236,2.236,0,0,1,1.217,3.322,2.275,2.275,0,0,1,3.4.449Z" transform="translate(27 459)" fill="#fff" />
        </G>
    </Svg>
)

export const SearchIcon = ({ style, onPress }) => (
    <TouchableOpacity onPress={onPress} style={style}>
        <Svg xmlns="http://www.w3.org/2000/svg" width="20.265" height="20.722" viewBox="0 0 20.265 20.722">
            <G id="Iconly_Light-Outline_Search" data-name="Iconly/Light-Outline/Search" transform="translate(-2 -2)">
                <G id="Search" transform="translate(2 2)">
                    <Path id="Combined-Shape" d="M9.739,0a9.734,9.734,0,0,1,7.175,16.316l3.131,3.124a.75.75,0,0,1-1.06,1.062l-3.168-3.16A9.737,9.737,0,1,1,9.739,0Zm0,1.5a8.238,8.238,0,1,0,8.238,8.238A8.247,8.247,0,0,0,9.739,1.5Z" fill="#fff" fill-rule="evenodd" />
                </G>
            </G>
        </Svg>
    </TouchableOpacity>
)

export const CrossIcon = ({ style, onPress }) => (
    <TouchableOpacity onPress={onPress} style={style}>
        <Svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
            <Path id="Icon_ionic-md-close" data-name="Icon ionic-md-close" d="M21.523,8.923l-1.4-1.4-5.6,5.6-5.6-5.6-1.4,1.4,5.6,5.6-5.6,5.6,1.4,1.4,5.6-5.6,5.6,5.6,1.4-1.4-5.6-5.6Z" transform="translate(-7.523 -7.523)" fill="#fff" />
        </Svg>
    </TouchableOpacity>
)

export const MailIcon = ({ style }) => (
    <View style={style}>
        <Svg xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" width="85" height="86" viewBox="0 0 85 56">
            <Defs>
                <LinearGradient id="linear-gradient" x1="0.269" y1="0.5" x2="0.919" y2="0.5" gradientUnits="objectBoundingBox">
                    <Stop offset="0" stopColor="#dd384a" />
                    <Stop offset="1" stopColor="#cc283d" />
                </LinearGradient>
            </Defs>
            <G id="Group_2554" data-name="Group 2554" transform="translate(-20 -442)">
                <G transform="matrix(1, 0, 0, 1, 20, 442)" filter="url(#Ellipse_1)">
                    <Circle id="Ellipse_1-2" data-name="Ellipse 1" cx="27.5" cy="27.5" r="27.5" transform="translate(13)" fill="url(#linear-gradient)" />
                </G>
                <G id="Group_2148" data-name="Group 2148" transform="translate(10113 -2772)">
                    <G id="Group_2147" data-name="Group 2147" transform="translate(-10062 3235)">
                        <Path id="Path_648" data-name="Path 648" d="M19.894,6a1.141,1.141,0,0,0-.234,0H3.692a1.141,1.141,0,0,0-.3.046l8.241,8.207Z" transform="translate(-2.557 -5.989)" fill="#fff" />
                        <Path id="Path_649" data-name="Path 649" d="M20.111,7.39l-8.3,8.269a1.141,1.141,0,0,1-1.608,0L1.97,7.453a1.141,1.141,0,0,0-.04.285V19.144a1.141,1.141,0,0,0,1.141,1.141H19.039a1.141,1.141,0,0,0,1.141-1.141V7.738A1.141,1.141,0,0,0,20.111,7.39ZM3.852,19.144H3.059v-.816l4.146-4.112.8.8Zm15.176,0h-.8l-4.157-4.123.8-.8,4.146,4.112Z" transform="translate(-1.93 -6.591)" fill="#fff" />
                    </G>
                </G>
            </G>
        </Svg>
    </View>
)

export const PasswordMainIcon = ({ style }) => (
    <View style={style}>
        <Svg xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" width="85" height="86" viewBox="0 0 85 86">
            <Defs>
                <LinearGradient id="linear-gradient" x1="0.269" y1="0.5" x2="0.919" y2="0.5" gradientUnits="objectBoundingBox">
                    <Stop offset="0" stopColor="#dd384a" />
                    <Stop offset="1" stopColor="#cc283d" />
                </LinearGradient>
            </Defs>
            <G id="Group_2556" data-name="Group 2556" transform="translate(-20 -523)">
                <G transform="matrix(1, 0, 0, 1, 20, 523)" filter="url(#Ellipse_61)">
                    <Circle id="Ellipse_61-2" data-name="Ellipse 61" cx="27.5" cy="27.5" r="27.5" transform="translate(13)" fill="url(#linear-gradient)" />
                </G>
                <Path id="lock" d="M14.029,7.433A2,2,0,0,1,16,9.4V19.445a2,2,0,0,1-1.971,1.97H2.018a1.947,1.947,0,0,1-1.431-.587A1.893,1.893,0,0,1,0,19.445V9.4A1.893,1.893,0,0,1,.587,8.02a1.947,1.947,0,0,1,1.431-.587H3V5.415A4.833,4.833,0,0,1,4.481,1.873,4.83,4.83,0,0,1,8.023.395a4.759,4.759,0,0,1,3.519,1.478A4.868,4.868,0,0,1,13,5.416V7.434h1.032ZM8,16.442a1.918,1.918,0,0,0,1.407-.587,2.039,2.039,0,0,0,0-2.862,1.982,1.982,0,0,0-2.815,0,2.038,2.038,0,0,0,0,2.862A1.92,1.92,0,0,0,8,16.442Zm3.12-9.009V5.415a2.978,2.978,0,0,0-.915-2.182A3.006,3.006,0,0,0,8,2.319a2.93,2.93,0,0,0-2.182.915,3.017,3.017,0,0,0-.891,2.182V7.433H11.12Z" transform="translate(53 539.605)" fill="#fff" />
            </G>
        </Svg>
    </View>
)

export const CalendarDropDownIcon = ({ onPress, style }) => (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={style}>
        <Svg id="calendar-check-fill" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
            <Path id="Path_657" data-name="Path 657" d="M3.75.469a.469.469,0,0,0-.937,0V.938H1.875A1.875,1.875,0,0,0,0,2.813V3.75H15V2.813A1.875,1.875,0,0,0,13.125.938h-.937V.469a.469.469,0,0,0-.937,0V.938H3.75ZM0,4.688H15v8.438A1.875,1.875,0,0,1,13.125,15H1.875A1.875,1.875,0,0,1,0,13.125ZM10.175,8.3a.469.469,0,1,0-.664-.664l-2.48,2.482L5.957,9.043a.469.469,0,0,0-.664.664L6.7,11.113a.469.469,0,0,0,.664,0L10.175,8.3Z" fill="#dd384a" fill-rule="evenodd" />
        </Svg>
    </TouchableOpacity>
)

export const UserIcon = ({ style }) => (
    <Svg style={style} xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" width="16" height="20" viewBox="0 0 16 20">
        <Defs>
            <LinearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                <Stop offset="0" stopColor="#dd384a" />
                <Stop offset="1" stopColor="#cc283d" />
            </LinearGradient>
        </Defs>
        <G id="Iconly_Bold_Profile" data-name="Iconly/Bold/Profile" transform="translate(-4 -2)">
            <G id="Profile" transform="translate(4 2)">
                <Path id="Path_661" data-name="Path 661" d="M8,13.174c4.339,0,8,.7,8,3.425S12.315,20,8,20c-4.338,0-8-.7-8-3.425S3.685,13.174,8,13.174ZM8,0A5.292,5.292,0,1,1,2.706,5.291,5.273,5.273,0,0,1,8,0Z" fill="url(#linear-gradient)" />
            </G>
        </G>
    </Svg>
)
export const UserGrayIcon = ({ style }) => (
    <Svg style={style} xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20">
        <G id="Iconly_Bold_Profile" data-name="Iconly/Bold/Profile" transform="translate(-4 -2)">
            <G id="Profile" transform="translate(4 2)">
                <Path id="Path_661" data-name="Path 661" d="M8,13.174c4.339,0,8,.7,8,3.425S12.315,20,8,20c-4.338,0-8-.7-8-3.425S3.685,13.174,8,13.174ZM8,0A5.292,5.292,0,1,1,2.706,5.291,5.273,5.273,0,0,1,8,0Z" fill="#b0b0b0" />
            </G>
        </G>
    </Svg>

)
export const PhoneIcon = ({ style }) => (
    <Svg style={style} xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" width="15" height="15" viewBox="0 0 16 16">
        <Defs>
            <LinearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                <Stop offset="0" stopColor="#dd384a" />
                <Stop offset="1" stopColor="#cc283d" />
            </LinearGradient>
        </Defs>
        <Path id="Icon_material-call" data-name="Icon material-call" d="M7.718,11.424a13.466,13.466,0,0,0,5.858,5.858l1.956-1.956a.884.884,0,0,1,.907-.213,10.139,10.139,0,0,0,3.173.507.892.892,0,0,1,.889.889v3.1a.891.891,0,0,1-.889.889A15.11,15.11,0,0,1,4.5,5.389.892.892,0,0,1,5.389,4.5H8.5a.892.892,0,0,1,.889.889A10.1,10.1,0,0,0,9.9,8.562a.892.892,0,0,1-.222.907Z" transform="translate(-4.5 -4.5)" fill="url(#linear-gradient)" />
    </Svg>
)
export const EmailIcon = ({ style }) => (
    <Svg style={style} xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" width="19" height="12.825" viewBox="0 0 19 12.825">
        <Defs>
            <LinearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                <Stop offset="0" stopColor="#dd384a" />
                <Stop offset="1" stopColor="#cc283d" />
            </LinearGradient>
        </Defs>
        <Path id="Icon_zocial-email" data-name="Icon zocial-email" d="M.072,15.757V5.2q0-.018.055-.348l6.211,5.313L.145,16.124a1.553,1.553,0,0,1-.073-.366ZM.9,4.123a.79.79,0,0,1,.311-.055H17.936a1.038,1.038,0,0,1,.33.055l-6.23,5.332-.824.66L9.581,11.452,7.95,10.114l-.824-.66ZM.915,16.838l6.248-5.991,2.419,1.96L12,10.847l6.248,5.991a.88.88,0,0,1-.311.055H1.208a.83.83,0,0,1-.293-.055Zm11.909-6.669,6.193-5.313a1.094,1.094,0,0,1,.055.348V15.757a1.4,1.4,0,0,1-.055.366Z" transform="translate(-0.072 -4.068)" fill="url(#linear-gradient)" />
    </Svg>
)
export const EmailGreyIcon = ({ style }) => (
    <Svg style={style} xmlns="http://www.w3.org/2000/svg" width="19" height="12.825" viewBox="0 0 19 12.825">
        <Path id="Icon_zocial-email" data-name="Icon zocial-email" d="M.072,15.757V5.2q0-.018.055-.348l6.211,5.313L.145,16.124a1.553,1.553,0,0,1-.073-.366ZM.9,4.123a.79.79,0,0,1,.311-.055H17.936a1.038,1.038,0,0,1,.33.055l-6.23,5.332-.824.66L9.581,11.452,7.95,10.114l-.824-.66ZM.915,16.838l6.248-5.991,2.419,1.96L12,10.847l6.248,5.991a.88.88,0,0,1-.311.055H1.208a.83.83,0,0,1-.293-.055Zm11.909-6.669,6.193-5.313a1.094,1.094,0,0,1,.055.348V15.757a1.4,1.4,0,0,1-.055.366Z" transform="translate(-0.072 -4.068)" fill="#b0b0b0" />
    </Svg>
)

export const TimeGrayIcon = ({ style }) => (
    <Svg style={style} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
        <Path id="time" d="M12.375,3.375a9,9,0,1,0,9,9A9,9,0,0,0,12.375,3.375ZM16.529,13.76H12.375a.692.692,0,0,1-.692-.692V6.837a.692.692,0,1,1,1.385,0v5.538h3.462a.692.692,0,0,1,0,1.385Z" transform="translate(-3.375 -3.375)" fill="#b0b0b0" />
    </Svg>
)
export const PasswordGreyIcon = ({ style }) => (
    <Svg style={style} xmlns="http://www.w3.org/2000/svg" width="14.225" height="18.687" viewBox="0 0 14.225 18.687">
        <Path id="lock" d="M12.472,6.652A1.781,1.781,0,0,1,14.224,8.4v8.927a1.78,1.78,0,0,1-1.752,1.752H1.794a1.731,1.731,0,0,1-1.272-.521A1.683,1.683,0,0,1,0,17.33V8.4A1.683,1.683,0,0,1,.521,7.173a1.731,1.731,0,0,1,1.272-.522H2.67V4.858a4.3,4.3,0,0,1,1.314-3.15A4.294,4.294,0,0,1,7.133.395a4.231,4.231,0,0,1,3.128,1.314,4.328,4.328,0,0,1,1.293,3.15V6.652h.918Zm-5.36,8.009a1.705,1.705,0,0,0,1.251-.521,1.813,1.813,0,0,0,0-2.545,1.762,1.762,0,0,0-2.5,0,1.812,1.812,0,0,0,0,2.545,1.706,1.706,0,0,0,1.251.521ZM9.886,6.652V4.858a2.648,2.648,0,0,0-.813-1.94,2.672,2.672,0,0,0-1.961-.813,2.6,2.6,0,0,0-1.94.813,2.682,2.682,0,0,0-.793,1.94V6.652H9.886Z" transform="translate(0 -0.395)" fill="#b0b0b0" />
    </Svg>

)

export const CompanyGrayIcon = ({ style }) => (
    <Svg style={style} xmlns="http://www.w3.org/2000/svg" width="17.316" height="17.913" viewBox="0 0 17.316 17.913">
        <G id="Group_2553" data-name="Group 2553" transform="translate(1342 -4347)">
            <G id="building-solid" transform="translate(-1342 4347)">
                <Path id="Path_653" data-name="Path 653" d="M27.374,8H22V22.927h6.568V9.194A1.194,1.194,0,0,0,27.374,8ZM24.388,18.151H23.194V16.956h1.194Zm0-2.985H23.194V13.971h1.194Zm0-2.985H23.194V10.985h1.194Zm2.388,5.971H25.583V16.956h1.194Zm0-2.985H25.583V13.971h1.194Zm0-2.985H25.583V10.985h1.194Z" transform="translate(-11.252 -5.015)" fill="#b0b0b0" />
                <Path id="Path_654" data-name="Path 654" d="M12.288,3H5.266A1.266,1.266,0,0,0,4,4.266V20.913H6.985V19.122h3.583v1.791h2.985V4.266A1.266,1.266,0,0,0,12.288,3Zm-5.3,13.136H5.791V14.942H6.985Zm0-2.985H5.791V11.956H6.985Zm0-2.985H5.791V8.971H6.985Zm0-2.985H5.791V5.985H6.985Zm2.388,8.956H8.18V14.942H9.374Zm0-2.985H8.18V11.956H9.374Zm0-2.985H8.18V8.971H9.374Zm0-2.985H8.18V5.985H9.374Zm2.388,8.956H10.568V14.942h1.194Zm0-2.985H10.568V11.956h1.194Zm0-2.985H10.568V8.971h1.194Zm0-2.985H10.568V5.985h1.194Z" transform="translate(-4 -3)" fill="#b0b0b0" />
            </G>
        </G>
    </Svg>
)

export const AddressGrayIcon = ({ style }) => (
    <Svg style={style} xmlns="http://www.w3.org/2000/svg" width="13" height="18.572" viewBox="0 0 13 18.572">
        <Path id="Icon_material-location-on" data-name="Icon material-location-on" d="M14,3A6.5,6.5,0,0,0,7.5,9.5c0,4.875,6.5,12.071,6.5,12.071s6.5-7.2,6.5-12.071A6.5,6.5,0,0,0,14,3Zm0,8.821A2.321,2.321,0,1,1,16.321,9.5,2.322,2.322,0,0,1,14,11.821Z" transform="translate(-7.5 -3)" fill="#b0b0b0" />
    </Svg>
)

export const WebsiteURLGrayIcon = ({ style }) => (
    <Svg style={style} xmlns="http://www.w3.org/2000/svg" width="15" height="14.985" viewBox="0 0 15 14.985">
        <Path id="website" d="M12.905,4.7a1.242,1.242,0,0,0-.22-.029,1.333,1.333,0,0,0-.937.366,17,17,0,0,0-1.67-.645,22.2,22.2,0,0,0-2.666-.674,1.447,1.447,0,0,0-.4-.586A16.17,16.17,0,0,1,8,0a7.54,7.54,0,0,1,5.889,3.53A14.758,14.758,0,0,0,12.905,4.7Zm-6.8-1.9A1.359,1.359,0,0,0,5.39,3,17.209,17.209,0,0,0,3,1.509,7.305,7.305,0,0,1,7.075,0a15.174,15.174,0,0,0-.923,2.8Zm-5.083.908a7.859,7.859,0,0,1,1.26-1.582A18.022,18.022,0,0,1,4.35,3.384a12.368,12.368,0,0,0-3.325.322ZM4.7,4.292a1.354,1.354,0,0,0,.315.8,1.382,1.382,0,0,0,.71.461Q5.639,6.577,5.639,7.5q0,.645.044,1.48a1.4,1.4,0,0,0-.571.352,13.463,13.463,0,0,1-1.523-.7,1.457,1.457,0,0,0,.161-.659,1.357,1.357,0,0,0-.41-1,1.354,1.354,0,0,0-1-.41,1.346,1.346,0,0,0-1.069.5A10.123,10.123,0,0,1,.176,5.9a6.557,6.557,0,0,1,.4-1.245A12.754,12.754,0,0,1,4.7,4.292ZM.952,8.086A1.357,1.357,0,0,0,1.4,9a1.347,1.347,0,0,0,.945.374A1.2,1.2,0,0,0,2.7,9.316a13.025,13.025,0,0,0,2.007.937v.059a1.353,1.353,0,0,0,.388.974,1.383,1.383,0,0,0,.96.432,15.806,15.806,0,0,0,1.025,3.267,7.392,7.392,0,0,1-2.769-.71,7.406,7.406,0,0,1-3.75-3.962A7.306,7.306,0,0,1,0,7.5q0-.015.015-.4A8.007,8.007,0,0,0,.952,8.086Zm6.386,2.886a17.275,17.275,0,0,0,2.124.249,1.631,1.631,0,0,0,.322.542,18.233,18.233,0,0,0-.41,2.988A7.832,7.832,0,0,1,8,14.985a16.63,16.63,0,0,1-1.069-3.545,1.192,1.192,0,0,0,.41-.469Zm4.541.7a1.371,1.371,0,0,0,.264-.5,19.518,19.518,0,0,0,2.065-.278,7.45,7.45,0,0,1-1.934,2.387,12.821,12.821,0,0,0-.4-1.611ZM9.492,10.283a13.986,13.986,0,0,1-2.022-.264,1.341,1.341,0,0,0-.835-1.011Q6.576,8.144,6.576,7.5q0-.967.088-2.007a.144.144,0,0,0,.073-.029A.153.153,0,0,1,6.8,5.435q.571.557,1,1.025A14.135,14.135,0,0,1,9.961,9.653a1.433,1.433,0,0,0-.469.63Zm1.3,1.9q.029,0,.161-.015a12.981,12.981,0,0,1,.366,1.772,8.407,8.407,0,0,1-1.025.5,17.951,17.951,0,0,1,.352-2.27q.117.015.147.015Zm-.073-3.5q-.015.029-.037.088t-.037.088A15.8,15.8,0,0,0,8.481,5.83Q8.027,5.318,7.4,4.717q.015,0,.022-.022l.007-.022a21.355,21.355,0,0,1,2.358.615,14.7,14.7,0,0,1,1.509.586,1.242,1.242,0,0,0-.029.22,1.349,1.349,0,0,0,.264.806A15.691,15.691,0,0,0,10.722,8.686Zm.688.85q.176-.512.176-.527a16.7,16.7,0,0,1,.732-1.567,1.241,1.241,0,0,0,.366.059,1.342,1.342,0,0,0,.894-.337,14.569,14.569,0,0,1,1.406,1.113,7.4,7.4,0,0,1-.352,1.611,20.043,20.043,0,0,1-2.534.352,1.31,1.31,0,0,0-.688-.7Zm2.681-3.457a1.358,1.358,0,0,0-.322-.879,9.356,9.356,0,0,1,.615-.718A7.379,7.379,0,0,1,15,6.958q-.483-.366-.937-.659a1.051,1.051,0,0,0,.029-.22Z" fill="#b0b0b0" />
    </Svg>
)

export const GenderIcon = ({ style }) => (
    <Svg style={style} xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" width="22" height="16" viewBox="0 0 22 16">
        <Defs>
            <LinearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                <Stop offset="0" stopColor="#dd384a" />
                <Stop offset="1" stopColor="#cc283d" />
            </LinearGradient>
        </Defs>
        <G id="Iconly_Bold_3-User" data-name="Iconly/Bold/3-User" transform="translate(-1 -4)">
            <G id="_3-User" data-name="3-User" transform="translate(1 4)">
                <Path id="_3-Friends" data-name="3-Friends" d="M10.949,10.54c3.431,0,6.361.544,6.361,2.721S14.4,16,10.949,16c-3.431,0-6.361-.544-6.361-2.72S7.5,10.54,10.949,10.54Zm5.486-1.311a15.554,15.554,0,0,1,3.243.284,2.757,2.757,0,0,1,2.131,1.3,1.923,1.923,0,0,1,0,1.67c-.46,1-1.944,1.319-2.521,1.4a.181.181,0,0,1-.2-.205A4.451,4.451,0,0,0,16.431,9.3a.045.045,0,0,1-.029-.047A.038.038,0,0,1,16.435,9.229Zm-11.117,0,.247,0a.037.037,0,0,1,.031.025.046.046,0,0,1-.028.048,4.45,4.45,0,0,0-2.656,4.381.181.181,0,0,1-.2.206c-.577-.083-2.06-.4-2.521-1.4a1.916,1.916,0,0,1,0-1.67,2.758,2.758,0,0,1,2.13-1.3,15.641,15.641,0,0,1,3.244-.283ZM10.949,0a4.206,4.206,0,0,1,4.209,4.233,4.209,4.209,0,1,1-8.419,0A4.206,4.206,0,0,1,10.949,0Zm5.714.706A3.576,3.576,0,0,1,20.088,5.22a3.513,3.513,0,0,1-3.525,2.622,3.4,3.4,0,0,1-.484-.047.158.158,0,0,1-.107-.244A5.842,5.842,0,0,0,15.889.938a.1.1,0,0,1-.016-.11.129.129,0,0,1,.082-.05A3.506,3.506,0,0,1,16.663.706ZM5.336.706a3.521,3.521,0,0,1,.709.073.136.136,0,0,1,.082.05.105.105,0,0,1-.016.11A5.842,5.842,0,0,0,6.027,7.55a.158.158,0,0,1-.107.244,3.282,3.282,0,0,1-.484.047A3.513,3.513,0,0,1,1.912,5.22,3.575,3.575,0,0,1,5.336.706Z" fill="url(#linear-gradient)" />
            </G>
        </G>
    </Svg>
)
export const LocationIcon = ({ style }) => (
    <Svg style={style} xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" width="13" height="18.571" viewBox="0 0 13 18.571">
        <Defs>
            <LinearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                <Stop offset="0" stopColor="#dd384a" />
                <Stop offset="1" stopColor="#cc283d" />
            </LinearGradient>
        </Defs>
        <Path id="Icon_material-location-on" data-name="Icon material-location-on" d="M14,3A6.5,6.5,0,0,0,7.5,9.5c0,4.875,6.5,12.071,6.5,12.071s6.5-7.2,6.5-12.071A6.5,6.5,0,0,0,14,3Zm0,8.821A2.321,2.321,0,1,1,16.321,9.5,2.322,2.322,0,0,1,14,11.821Z" transform="translate(-7.5 -3)" fill="url(#linear-gradient)" />
    </Svg>
)

export const SkillIcon = ({ style }) => (
    <Svg style={style} xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16">
        <Defs>
            <LinearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                <Stop offset="0" stopColor="#dd384a" />
                <Stop offset="1" stopColor="#cc283d" />
            </LinearGradient>
        </Defs>
        <Path id="Icon_material-stars" data-name="Icon material-stars" d="M10.992,3A8,8,0,1,0,19,11,8,8,0,0,0,10.992,3Zm3.392,12.8L11,13.76,7.616,15.8l.9-3.848L5.528,9.368l3.936-.336L11,5.4l1.536,3.624,3.936.336-2.984,2.584.9,3.856Z" transform="translate(-3 -3)" fill="url(#linear-gradient)" />
    </Svg>
)

export const ProjectsIcon = ({ style }) => (
    <Svg style={style} xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" width="16" height="17.778" viewBox="0 0 16 17.778">
        <Defs>
            <LinearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                <Stop offset="0" stopColor="#dd384a" />
                <Stop offset="1" stopColor="#cc283d" />
            </LinearGradient>
        </Defs>
        <G id="Iconly_Bold_Document" data-name="Iconly/Bold/Document" transform="translate(-3 -2)">
            <G id="Document" transform="translate(3 2)">
                <Path id="Path_662" data-name="Path 662" d="M11.725,0C14.471,0,16,1.582,16,4.293h0v9.182c0,2.756-1.529,4.3-4.275,4.3H4.276c-2.7,0-4.276-1.547-4.276-4.3H0V4.293A3.915,3.915,0,0,1,4.276,0h7.45ZM4.516,12.213a.7.7,0,0,0-.667.329.707.707,0,0,0,0,.747.69.69,0,0,0,.667.32h6.969a.7.7,0,0,0,0-1.4H4.516Zm6.969-4.054H4.516a.694.694,0,0,0,0,1.388h6.969a.694.694,0,0,0,0-1.388ZM7.172,4.133H4.516v.009a.693.693,0,0,0,0,1.387H7.172a.7.7,0,0,0,0-1.4Z" fill="url(#linear-gradient)" />
            </G>
        </G>
    </Svg>
)
export const DepartmentIcon = ({ style }) => (
    <Svg style={style} xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" width="16.684" height="17.259" viewBox="0 0 16.684 17.259">
        <Defs>
            <LinearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                <Stop offset="0" stopColor="#dd384a" />
                <Stop offset="1" stopColor="#cc283d" />
            </LinearGradient>
        </Defs>
        <G id="Group_2396" data-name="Group 2396" transform="translate(1342 -4347)">
            <G id="building-solid" transform="translate(-1342 4347)">
                <Path id="Path_653" data-name="Path 653" d="M27.178,8H22V22.383h6.328V9.151A1.151,1.151,0,0,0,27.178,8ZM24.3,17.78H23.151V16.63H24.3Zm0-2.877H23.151V13.753H24.3Zm0-2.877H23.151V10.877H24.3Zm2.3,5.753H25.452V16.63H26.6Zm0-2.877H25.452V13.753H26.6Zm0-2.877H25.452V10.877H26.6Z" transform="translate(-11.644 -5.123)" fill="url(#linear-gradient)" />
                <Path id="Path_654" data-name="Path 654" d="M11.985,3H5.22A1.22,1.22,0,0,0,4,4.22v16.04H6.877V18.533h3.452v1.726H13.2V4.22A1.22,1.22,0,0,0,11.985,3ZM6.877,15.657H5.726V14.506H6.877Zm0-2.877H5.726V11.63H6.877Zm0-2.877H5.726V8.753H6.877Zm0-2.877H5.726V5.877H6.877Zm2.3,8.63H8.027V14.506H9.178Zm0-2.877H8.027V11.63H9.178Zm0-2.877H8.027V8.753H9.178Zm0-2.877H8.027V5.877H9.178Zm2.3,8.63H10.328V14.506h1.151Zm0-2.877H10.328V11.63h1.151Zm0-2.877H10.328V8.753h1.151Zm0-2.877H10.328V5.877h1.151Z" transform="translate(-4 -3)" fill="url(#linear-gradient)" />
            </G>
        </G>
    </Svg>
)

export const WorkshiftIcon = ({ style }) => (
    <Svg style={style} xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16">
        <Defs>
            <LinearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                <Stop offset="0" stopColor="#dd384a" />
                <Stop offset="1" stopColor="#cc283d" />
            </LinearGradient>
        </Defs>
        <Path id="time" d="M11.375,3.375a8,8,0,1,0,8,8A8,8,0,0,0,11.375,3.375Zm3.692,9.231H11.375a.615.615,0,0,1-.615-.615V6.452a.615.615,0,1,1,1.231,0v4.923h3.077a.615.615,0,0,1,0,1.231Z" transform="translate(-3.375 -3.375)" fill="url(#linear-gradient)" />
    </Svg>
)