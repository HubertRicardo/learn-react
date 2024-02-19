import { useDispatch, useSelector } from "react-redux";
import {
  onAddNewEvent,
  onDeleteEvent,
  onSetActiveEvent,
  onUpdateEvent,
} from "../store/calendar/calendarSlice";
import { calendarApi } from "../api";

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);
  const { user } = useSelector((state) => state.auth);

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  const startSavingEvent = async (calendarEvent) => {
    //Todo: llegar al backend

    //todo bien
    if (calendarEvent._id) {
      //Actaulizado
      dispatch(onUpdateEvent({ ...calendarEvent }));
    } else {
      //Crear
      const { data } = await calendarApi.post("/events", calendarEvent);

      dispatch(onAddNewEvent({ ...calendarEvent, id: data.evento.id, user }));
    }
  };

  const startDeletingEvent = () => {
    //Todo: llegar al backend
    dispatch(onDeleteEvent());
  };

  return {
    //Properties
    events,
    activeEvent,
    hasEventSelected: !!activeEvent,

    //Metodos
    setActiveEvent,
    startSavingEvent,
    startDeletingEvent,
  };
};
