var submitBtnSelector, messageInputSelector;
submitBtnSelector = document.getElementById('jsSubmitMessage');
messageInputSelector = document.getElementById('message');

submitBtnSelector.addEventListener('click', (event) => {
    // message sample: I can't believe Tweeter now supports chunking my messages, so I don't have to do it myself.
    let inputValue = messageInputSelector.value;
    let ouputMessage = messageSpliter(inputValue, 50);
    console.log(ouputMessage);
});

function messageSpliter(message, length) {
    var strs = [];
    while (message.length > length) {
        var pos = message.substring(0, length).lastIndexOf(' ');
        pos = pos <= 0 ? length : pos;
        strs.push(message.substring(0, pos));
        var i = message.indexOf(' ', pos) + 1;
        if (i < pos || i > pos + length)
            i = pos;
        message = message.substring(i);
    }
    strs.push(message);
    return strs;
}