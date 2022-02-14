import { GoogleCalendar, Event } from './GoogleCalendar'
import { Message } from './Message'
import { Slack } from './Slack'

const id: string = PropertiesService.getScriptProperties().getProperty('id');
const userName: string = PropertiesService.getScriptProperties().getProperty('userName');
const url: string = PropertiesService.getScriptProperties().getProperty('url');

function main() {
    let calendar: GoogleAppsScript.Calendar = GoogleCalendar.getCalendar(id);
    let calendarEvent: Event[] = GoogleCalendar.getTodayEvent(calendar);
    let text: string = Message.getNameHeader(userName, true);
    text += Message.build(calendarEvent);
    Slack.post(url, text);
}

function setProperty() {
    PropertiesService.getScriptProperties().setProperty('id', 'your gmail address');
    PropertiesService.getScriptProperties().setProperty('userName', 'your userName (free setting)');
    PropertiesService.getScriptProperties().setProperty('url', 'your slack hook url');
}