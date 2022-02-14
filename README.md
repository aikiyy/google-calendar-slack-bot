# Google Calendar Slack Bot
当日のGoogleCalendarの予定をSlack通知するBot

![参考画像](https://user-images.githubusercontent.com/6613111/153869630-e9393b3e-c9cd-4027-b8ea-65d9c6be9d64.png)

# How to
```
# .clasp.json のscriptIdを自分のidに修正する
# src/Main.ts のsetProperty関数内に自分のGmailアドレス・名前・SlackのHookURLを設定する

$ clasp login
$ clasp push
$ clasp open

# 手動でsetProperty関数を実行する
# 手動でmain関数をスケジュール実行するようトリガーを設定する
```