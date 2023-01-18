import { store } from "../../redux/store/store";
import { Timer } from "../../api/timer/timerController";
import { setTimerData, setStopWatchTime } from "./reducer";

export const timerAction = async () => {
    const { meta } = store.getState().userApi.userData
    if (meta) {
        let response = await Timer()
        if (response !== 'Error') {
            await store.dispatch(setTimerData(response.data))
        }
    }
}

export const formatTimeString = (time, showMsecs) => {
    let msecs = time % 1000;
    if (msecs < 10) {
        msecs = `00${msecs}`;
    } else if (msecs < 100) {
        msecs = `0${msecs}`;
    }
    let seconds = Math.floor(time / 1000);
    let minutes = Math.floor(time / 60000);
    let hours = Math.floor(time / 3600000);
    seconds = seconds - minutes * 60;
    minutes = minutes - hours * 60;
    let formatted;
    if (showMsecs) {
        formatted = `${hours < 10 ? 0 : ""}${hours}:${minutes < 10 ? 0 : ""
            }${minutes}:${seconds < 10 ? 0 : ""}${seconds}:${msecs}`;
    } else {
        formatted = `${hours < 10 ? 0 : ""}${hours}:${minutes < 10 ? 0 : ""
            }${minutes}:${seconds < 10 ? 0 : ""}${seconds}`;
    }

    return formatted;
}

export const runTimer = ({timer, punch_status}) => {
    let interval
    let startingTime = new Date() - timer * 1000
    if (punch_status?.break_status == true || punch_status?.check_status == true) {
        interval = setInterval(() => {
            let dateToBeSend = new Date() - startingTime
            store.dispatch(setStopWatchTime(dateToBeSend))
        }, 1000)
    } else {
        clearInterval(interval)
    }
    return interval
}