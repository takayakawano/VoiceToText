# VoiceToText
This solution is the solution of voice to text by using Bing Speech API with Dynamics 365.

# Overview
The support agent can set the description field of case entity a text of them voice.
This solution contribute standadize input level each support agents.

# how to work?
1. Open a Case form.
2. Click [Start Recording] button.
3. Talk to your microphone about few seconds.
4. Set to description field the text of voice.

# how to implement?
## 1. Enable Bing Speech API.

## 2. Setting the voicetotext solution file to Dynamics 365.
1. Open solution menu.
2. import the voicetotext solution file.
3. Open the voicetotext solution record.
4. Open [Trrigerforspeechtotext.js] file.
5. Set the subscription key of Bing Speech API.
6. Save [Trrigerforspeechtotext.js] file.
7. Open Case form
8. Set Web Resource
