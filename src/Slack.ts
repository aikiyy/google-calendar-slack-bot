export module Slack {
    export function post(url: string, text: string): GoogleAppsScript.HTTPResponse {
        let body = {
            'method': 'POST',
            'payload': JSON.stringify({'text': text})
        };
        return UrlFetchApp.fetch(url, body)
    }
}