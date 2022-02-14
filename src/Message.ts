import { Event } from './GoogleCalendar'

export module Message {
    export function getNameHeader(text: string, newLine: boolean): string {
        const FORMAT_TEXT = `■${text}の予定■`
        if (newLine) {
            return FORMAT_TEXT + '\n'
        } else {
            return FORMAT_TEXT
        }
    }

    export function build(event: Event[]): string {
        let text: string = '';
        for(let i=0; i < event.length; i++){
            if (event[i].isAllDayEvent()) {
                text += Utilities.formatDate(event[i].getStartTime(),'GMT+0900','MM/dd  ');
            } else {
                text += Utilities.formatDate(event[i].getStartTime(),'GMT+0900','MM/dd HH:mm');
                text += Utilities.formatDate(event[i].getEndTime(), 'GMT+0900','-HH:mm  ');
            }
            text += event[i].getTitle();
            text += '\n';
        }
        return text
    }
}