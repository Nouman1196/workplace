import { store } from "../store/store";
import { setPublicHolidays, setLoading } from "./reducer";
import { getHolidays } from "../../api/publicHolidays/publicHolidaysController";

export const publicHolidaysAction = async () => {
    store.dispatch(setLoading(true))
    let response = await getHolidays()
    if (response !== "Error") {
        store.dispatch(setPublicHolidays(response.data?.holidays))
        store.dispatch(setLoading(false))
    }
}