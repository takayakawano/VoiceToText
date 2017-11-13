function startrec() {
    parent.Xrm.Page.getAttribute("description").setValue("");

    client = Microsoft.CognitiveServices.SpeechRecognition.SpeechRecognitionServiceFactory.createMicrophoneClient(
        0, //Recognition modes: Interactive mode, Conversation mode, Dictation mode
        "en-us", // Recognition language
        ""); // Please set YOUR_BING_SPEECH_API_KEY.

    client.onFinalResponseReceived = function (response) {
        parent.Xrm.Page.getAttribute("description").setValue(JSON.stringify(response[0].transcript));
    }

    client.startMicAndRecognition();
    setTimeout(function () {
        client.endMicAndRecognition();
    }, 8000); // Please set the recording time(ms).
}