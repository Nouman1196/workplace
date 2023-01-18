import { store } from "../store/store";
import { getLeavesType, getRequestType, submitLeave } from "../../api/addLeaves/addLeavesController";
import { setLeavesTypes, setRequestTypes, setDayParts, setDaysCheck } from "./reducer";

const getLeaves = async () => {
    let response = await getLeavesType()
    if (response !== 'Error') {
        let array = []
        let dataArray = response?.data?.leave_types
        for (const data of dataArray) {
            let dataObj = { key: data.id, value: data.name }
            array.push(dataObj)
        }
        store.dispatch(setLeavesTypes(array))
    }
}

const getRequestLeaves = async () => {
    let response = await getRequestType()
    if (response !== 'Error') {
        const data = response.data.data
        let unPaidArr = [{ value: 'Un-Paid' }]
        let paidArr = [{ value: 'Paid' }]
        for (const [key, value] of Object.entries(data)) {
            let textArray = value.split(' ')
            if (textArray.some(item => item == 'Un-Paid')) {
                let Obj = { key: key, value: value }
                unPaidArr.push(Obj)
            } else {
                let Obj = { key: key, value: value }
                paidArr.push(Obj)
            }
        }
        let sorted = paidArr.concat(unPaidArr)
        console.log(sorted);
        store.dispatch(setRequestTypes(sorted))
    }
}

export const addLeavesAction = () => {
    getLeaves()
    getRequestLeaves()
}

export const requestTypeHandling = (data) => {
    store.dispatch(setDayParts([]))
    store.dispatch(setDayValue(''))
    const check = data?.value == 'Half Day' || data?.value == 'Quarter' ? true : false || data?.value == 'Un-Paid Half Day' ? true : false || data?.value == 'Un-Paid Quarter' ? true : false
    store.dispatch(setDaysCheck(check))
    if (check) {
        const days = data?.value == 'Quarter' || data?.value == 'Un-Paid Quarter' ? [{ key: 1, value: 'First' }, { key: 2, value: 'Second' }, { key: 3, value: 'Third' }, { key: 4, value: 'Fourth' }] : [{ key: 1, value: 'First' }, { key: 2, value: 'Second' }]
        store.dispatch(setDayParts(days))
    }
}