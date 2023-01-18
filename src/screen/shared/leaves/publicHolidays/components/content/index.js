// import React from 'react';
// import { View, Text } from 'react-native';
// import styles from './styles/styles';
// import { AiroplaneIcon } from "../../../../../../assets/svg/Svg";

// const Content = ({ title, holiday_from, holiday_to, list_color }) => {

//     return (
//         <>
//             <View style={styles.container}>
//                 <View style={styles.internalContainer}>
//                     <View style={styles.firstRowContainer}>
//                         <AiroplaneIcon color={'red'} />
//                         <Text style={styles.titleText}>{title}</Text>
//                     </View>
//                     <View style={styles.secondRowContainer}>
//                         <View style={styles.textContainer}>
//                             <Text style={styles.secondaryTitle}>From</Text>
//                             <Text style = {styles.descriptionText}>{holiday_from}</Text>
//                         </View>

//                         <View style={styles.textContainer}>
//                             <Text style={styles.secondaryTitle}>To</Text>
//                             <Text style = {styles.descriptionText}>{holiday_to}</Text>
//                         </View>
//                     </View>
//                 </View>
//                 <View style={styles.borderStyle} />
//             </View>
//         </>
//     );
// };
// export default Content;

import React from 'react';
import { View, Text } from 'react-native';
import { AiroplaneIcon } from "../../../../../../assets/svg";
import Color from '../../../../../../theme/colors/colors';
import styles from './styles';

const Content = ({ title, holiday_from, holiday_to, list_color}) => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.internalContainer}>
                <View style={styles.internalContentContainer}>
                    <View style={styles.iconContainer}>
                    <AiroplaneIcon color={Color.red} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View style={styles.bottomRowContainer}>
                        <View style={styles.bottomContentContainer}>
                
                                <Text style={styles.contentTitle}>From</Text>
                        
                            <Text style={styles.contentDetailedText}>{holiday_from}</Text>
                        </View>
                        <View style={styles.bottomContentContainer}>

                                <Text style={styles.contentTitle}>To</Text>
                        
                            <Text style={styles.contentDetailedText}>{holiday_to}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.borderStyle} />
            </View>
        </View>
    )
}

export default Content