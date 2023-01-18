import React from 'react';
import { Image } from 'react-native';
import styles from './styles';

const NothingToShow = ({ }) => {
    return (
        <Image style={styles.nothingToShow} source={require('../../assets/images/nothing.png')} />
    );
};
export default NothingToShow;