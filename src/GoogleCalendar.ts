export interface Event {
    isAllDayEvent(): boolean;
    getStartTime(): Date;
    getEndTime(): Date;
    getTitle(): string;
}

export module GoogleCalendar {
    export function getCalendar(id: string): GoogleAppsScript.Calendar {
        return CalendarApp.getCalendarById(id)
    }

    export function getTodayEvent(calendar: GoogleAppsScript.Calendar): Event[] {
        return calendar.getEventsForDay(new Date())
    }
}