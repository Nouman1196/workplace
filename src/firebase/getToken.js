import messaging from '@react-native-firebase/messaging';
const getToken = async () => {
    let token = await messaging().getToken()
    return token
}
export default getToken