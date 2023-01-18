import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Color from '../../theme/colors/colors';
import styles from './styles';
import DropDownModal from './components/dropDownModal';

const FormInput = (data) => {
    let { error, LeftChild, containerStyle, RightChild, forgetPassword, forget, textInputContainerStyle, title, titleContainer, titleStyle } = data
    return (
        <View style={containerStyle} >
            <View style={titleContainer}>
                {title &&
                    <Text style={titleStyle}>{title}</Text>
                }
                <View style={[styles.inputContainer, textInputContainerStyle]}>
                    {LeftChild &&
                        LeftChild
                    }

                    <TextInput
                        {...data}
                        style = {[styles.textInput, data.style]}
                        autoCapitalize="none"
                    />

                    {RightChild &&
                        RightChild
                    }
                </View>
            </View>
            {data.value && data.maxLength &&
                <Text style={styles.maxText}>{data.value?.length}/{data.maxLength}</Text>
            }
            {error && <Text style={styles.errorText} >{error}</Text>
            }
            {forget &&
                <TouchableOpacity style={styles.forgotButton} onPress={forgetPassword}>
                    <Text style={styles.forgotPasswordTitle}>Forgot password?</Text>
                </TouchableOpacity>
            }
        </View>
    );
}

const DropDown = (data) => {
    let { error, LeftChild, containerStyle, RightChild, textInputContainerStyle, title, titleContainer, titleStyle, placeholderStyle, onPress, calendar, onConfirm, maximumDate, isSearchable, onChangeText } = data
    const [open, setOpen] = useState(false)
    const [openCalendar, setOpenCalendar] = useState(false)

    return (
        <View style={containerStyle} >
            {calendar &&
                <DateTimePickerModal
                    isVisible={openCalendar}
                    mode="date"
                    maximumDate={maximumDate}
                    onConfirm={(date) => { onConfirm(date), setOpenCalendar(false) }}
                    onCancel={() => setOpenCalendar(false)}
                />
            }
            <DropDownModal onChangeText={onChangeText} isSearchable={isSearchable} title={data.title} data={data.data} loading={data.loading} visible={open} onConfirm={onConfirm} setVisible={setOpen} />
            <View style={titleContainer}>
                {title &&
                    <Text style={titleStyle}>{title}</Text>
                }
                <TouchableOpacity onPress={() => { onPress ? onPress() : (calendar ? setOpenCalendar(previousState => !previousState) : setOpen(previousState => !previousState)) }} activeOpacity={0.8} style={[styles.dropDownContainr, textInputContainerStyle]}>
                    {LeftChild &&
                        LeftChild
                    }
                    {data.value ?
                        <Text {...data} style={[styles.text, data.style]} >{data.value}</Text>
                        :
                        <Text style={[styles.text, placeholderStyle]}>{data.placeholder}</Text>
                    }
                    {RightChild ?
                        RightChild :
                        <MaterialIcons color={Color.mehroonIcon} size={28} onPress={() => { (calendar ? setOpenCalendar(previousState => !previousState) : setOpen(previousState => !previousState)) }} name={open ? "arrow-drop-up" : "arrow-drop-down"} />
                    }
                </TouchableOpacity>
            </View>
            {error && <Text style={styles.errorText} >{error}</Text>
            }
        </View>
    );
}

export { FormInput, DropDown }