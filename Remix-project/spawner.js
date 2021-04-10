// Todo: change wording of yours to them, and last to first (for message tails)

let lastMessage
let selectedFriend = document.querySelector(".friend.selected")
let selectedFriendName = selectedFriend.innerHTML.slice(0, selectedFriend.childNodes[3].innerHTML.indexOf("<span")).trim()

let friendsList = $(".friend")
let lastThread = "";

let threads = []
for (var i = 0;  i < friendsList.length; i ++) {
    var n = friendsList[i].childNodes[3].innerHTML.slice(0, friendsList[i].childNodes[3].innerHTML.indexOf("<span")).trim()
    var threadDiv = document.createElement("DIV")
    threadDiv.classList.add("thread")
    threadDiv.classList.add(n.replace(/ /g, '-'))
    threads.push({
        name: n,
        div: threadDiv,
        lastParent: null
    })

    document.querySelector("body > div.chat.main > div.messages").appendChild(threadDiv)
}

function findObjectByKey (array, key, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i][key] == value) {
            return array[i]
        }
    }
    return null
}

var pingSound = new Audio("notif.mp3")

function spawnMessageParent(sender, lastParent, thread) {


    var messagesParents = $(".messages")
    var lastParent = messagesParents[messagesParents.length - 1]

    // console.log("Spawn Message Parent in thread: " + thread + "\nlast thread: " + lastThread )

    
    var messageParent
    
    if (sender == "them") {
        sender = "yours"
        // pingSound.play()
    }
    
    pContains = function (p, className) {
        return p.classList.contains(className)
    }
    
    // Use the last message parent if its owner is the same as the current sender
    if (pContains(lastParent, sender) && thread == lastThread) {
        // If the last globally stored message parent is from the local sender, and is in the same thread, then use it
        messageParent = lastParent
        findObjectByKey(threads, 'name', thread).lastParent = messageParent
    } else if (findObjectByKey(threads, 'name', thread).lastParent != null) {
        if (pContains(findObjectByKey(threads, 'name', thread).lastParent, sender)) {
            // If this thread has a last parent stored locally, then use it instead
            messageParent = findObjectByKey(threads, 'name', thread).lastParent
            findObjectByKey(threads, 'name', thread).lastParent = messageParent
        }
    } else {
        // If there is no last parent to use, create a new parent
        messageParent = document.createElement("DIV")
        messageParent.classList.add(sender)
        messageParent.classList.add("messages")
        findObjectByKey(threads, 'name', thread).lastParent = null
    }

    if (messageParent == null) {
        // If for some reason those checks above failed, create a new message parent
        messageParent = document.createElement("DIV")
        messageParent.classList.add(sender)
        messageParent.classList.add("messages")
        findObjectByKey(threads, 'name', thread).lastParent = null
    }   

    return messageParent
}

function spawnMessageChild(str, sender, lastParent, thread) {
    var message = document.createElement("DIV")
    message.classList.add("message")

    if (sender == "them") {
        sender = "yours"
    }
    if (!lastParent.classList.contains(sender) || thread != lastThread) {
        if (findObjectByKey(threads, 'name', thread).lastParent != null) {
            if (!findObjectByKey(threads, 'name', thread).lastParent.classList.contains(sender)) {
                // If this thread's most recent parent message is not from the same sender, add the class to give it a tail
                message.classList.add("last")
            }
        } else {
            // If this is the first message of a group, add a little tail with css
            message.classList.add("last")
        }
    }
    message.style.opacity = 0
    message.innerHTML = str
    return message
}

function fade(msg) {
    var increment = 0.025;
    var opacity = 0;
    var instance = window.setInterval(function() {
        msg.style.opacity = opacity
        opacity += increment;
        if (opacity > 1) {
            window.clearInterval(instance);
        }
    }, 10)
}

function getTime() {
    var d = new Date();
    var hr = d.getHours();
    var min = d.getMinutes();
    if (min < 10) {
        min = "0" + min;
    }
    var ampm = "AM";
    if (hr > 12) {
        hr -= 12;
        ampm = "PM";
    }
    return time = hr + ":" + min + " " + ampm
}

function truncate(str, n, useWordBoundary){
    // credit: https://stackoverflow.com/questions/1199352/smart-way-to-truncate-long-strings
    if (str.length <= n) { return str; }
    const subString = str.substr(0, n - 1)
    return (useWordBoundary 
      ? subString.substr(0, subString.lastIndexOf(" ")) 
      : subString) + "&hellip;"
};

function addMessage(msgParent, thread) {

    if (thread == "") {
        console.log("[ERROR] Thread empty, could not send message.")
        return
    }

    thread = findObjectByKey(threads, 'name', thread)
    thread.div.appendChild(msgParent)

    selectedFriend.childNodes[5].innerHTML = truncate(msgParent.childNodes[msgParent.childNodes.length - 1].innerHTML, 40, true);
    selectedFriend.childNodes[3].childNodes[1].innerHTML = "At " + getTime()

    fade(msgParent.childNodes[msgParent.childNodes.length - 1])

    if (typeof lastMessage != 'undefined') {
        lastMessage.classList.remove("lastMessage")
    }

    lastMessage = msgParent.childNodes[msgParent.childNodes.length - 1]
    lastMessage.classList.add("lastMessage")
}

function scrollToBottom() {
    window.scrollTo({
        left: 0,
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
}

function spawnMessage(msg, sender, thread) {
    try {
        // console.log("Spawn message in " + thread + "\nlast thread: " + lastThread)
        
        
        selectedFriendName = thread
        
        var currentParents = document.getElementsByClassName("messages")
        var lastParent = currentParents[currentParents.length - 1]
        var messageParent = spawnMessageParent(sender, lastParent, thread)

        messageParent.appendChild(spawnMessageChild(msg, sender, lastParent, thread))

        addMessage(messageParent, thread)
        scrollToBottom()
        lastThread = thread
    } catch (e) {
        console.log(e)
    }
}