# VoiceToText
This solution is the voice to text by using Bing Speech API with Dynamics 365.

# Overview
A support agent can exchange to text by own voice. This solution contribute standadize input level each support agents.

# How to work?
1. Open a Case form.
2. Click the [Start Recording] button.
3. Talk to your microphone about few seconds.
4. Set text of own voice to description field automatically.

I tested Dynamics 365 Online (8.2.1.341) with Bing Speech APIs.

# How to implement?
## 1. Enable Bing Speech API.
1. Login to Azure.
2. Search [Cognitive Services APIs] in search the market place.
3. Create [Cognitive Services APIs] also Select [Bing Speech API] to API type.
4. Copy subscription keys.

## 2. Setting the voicetotext solution file to Dynamics 365.
1. Open solution menu.
2. Import the voicetotext solution file.
3. Open the voicetotext solution record.
4. Open [Trrigerforspeechtotext.js] file.
5. Past the subscription key of Bing Speech API.
6. Save [Trrigerforspeechtotext.js] file.
7. Open Case form Editor.
8. Insert [new_Button.html] Web Resource to the Case form.
9. Publish All customizations
 
