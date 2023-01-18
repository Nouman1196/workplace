import Toast from 'react-native-simple-toast';
import { launchImageLibrary } from 'react-native-image-picker';
import { getProfile, updateProfile } from "../../api/profile/profileController";
import { updateEmployeeApi, getEmployeeApi } from '../../api/employee/employesController';
import { store } from "../../redux/store/store";
import { setUserData } from "../../redux/user/reducer";
import { setUserProfile, setLoading, setHasUnsavedChanges, setProfilePicture, setIsUpdating } from "./reducer";
import { setEmployesData } from '../employee/reducer';

export const getProfileAction = async (othersId) => {
    const { userData } = store.getState().userApi
    const { id } = userData?.user
    store.dispatch(setLoading(true))
    if (othersId) {
        let response = await getEmployeeApi({ id: othersId })
        if (response !== "Error") {
            store.dispatch(setUserProfile(response.data?.user))
        }
    } else {
        let response = await getProfile({ id })
        if (response !== "Error") {
            store.dispatch(setUserData({ ...userData, user: response.data }))
            store.dispatch(setUserProfile(response.data))
        }
    }

    store.dispatch(setLoading(false))
}

export const compareData = (othersId) => {
    const { employesData } = store.getState().employeeApi
    const { user } = store.getState().userApi.userData
    const { userProfile, otherProfileIndex } = store.getState().profileApi
    if (othersId) {
        let employesList = [...employesData]
        if (JSON.stringify(employesList[otherProfileIndex]) === JSON.stringify(userProfile)) {
            store.dispatch(setHasUnsavedChanges(false))
        } else {
            store.dispatch(setHasUnsavedChanges(true))
        }
    } else {
        if (JSON.stringify(user) === JSON.stringify(userProfile)) {
            store.dispatch(setHasUnsavedChanges(false))
        } else {
            store.dispatch(setHasUnsavedChanges(true))
        }
    }
}

export const onUpdate = async (othersId) => {
    const { employesData } = store.getState().employeeApi
    const { userData } = store.getState().userApi
    const { id } = userData?.user
    const { profilePicture, userProfile, otherProfileIndex } = store.getState().profileApi
    const { name, mobile_number } = userProfile

    store.dispatch(setIsUpdating(true))
    if (othersId) {
        const body = new FormData();
        if (profilePicture) {
            body.append('employee[avatar]',
                {
                    uri: profilePicture?.assets[0].uri,
                    type: profilePicture?.assets[0].type,
                    name: profilePicture?.assets[0].fileName,
                });
        }
        body.append('employee[name]', name);
        body.append('employee[mobile_number]', mobile_number);
        let response = await updateEmployeeApi({ id: othersId, body })
        if (response !== "Error") {
            let employesList = [...employesData]
            if (profilePicture) {
                employesList[otherProfileIndex].profile_image_url = profilePicture?.assets[0].uri
            }
            employesList[otherProfileIndex].name = name
            employesList[otherProfileIndex].mobile_number = mobile_number
            store.dispatch(setEmployesData(employesList))
            setTimeout(() => {
                Toast.show(response?.data?.meta?.message, Toast.LONG)
            }, 100)
        }
    } else {
        const body = new FormData();
        if (profilePicture) {
            body.append('user[avatar]',
                {
                    uri: profilePicture?.assets[0].uri,
                    type: profilePicture?.assets[0].type,
                    name: profilePicture?.assets[0].fileName,
                });
        }
        body.append('user[name]', name);
        body.append('user[mobile_number]', mobile_number);
        let response = await updateProfile({ id, body })
        if (response !== "Error") {
            let user = { ...userData.user, name, mobile_number }
            store.dispatch(setUserData({ ...userData, user }))
            setTimeout(() => {
                Toast.show(response?.data?.meta?.message, Toast.LONG)
            }, 100)
        }
    }
    store.dispatch(setIsUpdating(false))

}

export const updatePicture = async () => {
    const { userProfile } = store.getState().profileApi
    launchImageLibrary({ mediaType: 'photo', quality: 0.2 }, response => {
        if (response.didCancel) {
            Toast.show('Photo uploading is cancelled', Toast.LONG)
            return null
        } else if (response.error) {
            Toast.show(response?.error, Toast.LONG)
            return null
        }
        else {
            let data = { ...userProfile, profile_image_url: response?.assets[0].uri }
            store.dispatch(setUserProfile(data))
            store.dispatch(setProfilePicture(response))
            return response
        }
    });
}

export const resetData = () => {
    store.dispatch(setUserProfile(''))
    store.dispatch(setProfilePicture(''))
}