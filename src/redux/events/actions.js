import { getAllEvents } from "../../api/events/eventsController";
import { setEventsData } from "./reducer";
import { store } from "../store/store";

export const getEventsAction = async () => {
    let response = await getAllEvents()
    if (response !== 'Error') {
        store.dispatch(setEventsData(response.data))
    }
}