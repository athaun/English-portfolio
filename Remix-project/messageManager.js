let dev = true;

let currentThread = []
let clickableThreads = []
let currentThreadId = 0

for (var i = 0; i < friendsList.length; i ++) {
    clickableThreads.push(false)
}

function setThread (t) {
    var tmp = currentThreadId
    for (var i = 0; i < currentThread.length; i++) {
        currentThread[i] = false;
    }
    currentThread[t] = true;
    currentThreadId = t
    return tmp
}

function threadClickable (t) {
    if (clickableThreads[t] == null || clickableThreads[t] == false) {
        console.log(false)
        return false
    }
    console.log(true)
    return true
}

function makeNextThreadClickable (t) {
    clickableThreads[t + 1] = true
}

function showCurrentThread (threadName) {
    t = $(".thread")
    for (var i = 0; i < t.length; i ++) {
        if (t[i].classList.contains(threadName)) {
            t[i].classList.remove("hide")
        } else {
            t[i].classList.add("hide")
        }
    }
}

$(".friend").click(function(e) {
    var name = e.currentTarget.childNodes[3].innerHTML
    name = name.slice(0, name.indexOf("<span")).trim()
    
    selectedFriend = document.querySelector(".friend.selected")

    if (e.currentTarget.classList.contains("disabled")) {
        console.log("Denied access to thread " + e)
        $("#modal2").show()
        return
    }

    document.querySelector("body > div.topBar > h2").innerHTML = name

    selectedFriend.classList.remove("selected")
    e.currentTarget.classList.add("selected")
    selectedFriend = e.currentTarget

    selectedFriendName = name

    showCurrentThread(name.replace(/ /g, '-'))

    document.querySelector("#box").focus()

})

$("#messageForm").submit(function(e) {
    var message = document.getElementById("box").value;

    if (message != "") {
        var lorem = `"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident`

        if (message == "/help") {
            spawnMessage("/help", "mine", selectedFriendName)
            spawnMessage(`
            These commands are for debugging purposes.
            <table class="tg">
                <tbody>
                    <tr>
                        <td class="tg-0lax">/lorem them</td>
                        <td class="tg-0lax">sends lorem text from "them"</td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">/lorem me</td>
                        <td class="tg-0lax">sends lorem text from "you"</td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">/yt</td>
                        <td class="tg-0lax">sends embedded youtube video</td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">//message</td>
                        <td class="tg-0lax">sends your "message" from "them"</td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">/dev</td>
                        <td class="tg-0lax">Removes timer from automatic messages</td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">/restart</td>
                        <td class="tg-0lax">Restarts the presentation</td>
                    </tr>
                </tbody>
            </table>
            `, "them", selectedFriendName)
        } else if (message.startsWith("/lorem them")) {
            spawnMessage(lorem, "them", selectedFriendName)
        } else if (message.startsWith("/lorem me")) {
            spawnMessage(lorem, "mine", selectedFriendName)
        } else if (message.startsWith("/yt")) {
            spawnMessage(`<iframe src="https://www.youtube.com/embed/Hk2E1Tunoc8" style="border-radius: 5px;" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`, "them", selectedFriendName)
            spawnMessage("Random LTT video lol", "them", selectedFriendName)
        } else if (message.startsWith("/dev")) {
            dev = !dev
            spawnMessage("Changed devmode to " + dev, "them", selectedFriendName)
        } else if (message.startsWith("/restart")) {
            document.location.reload(true);
        } else if (message.startsWith("//")) {
            spawnMessage(message, "them", selectedFriendName)
        } else {
            spawnMessage(message, "mine", selectedFriendName)
        }
    }

    $("#messageForm")[0].reset()
    e.preventDefault()
})

document.querySelector("#box").focus()
