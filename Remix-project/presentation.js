let them = "them"
let mine = "mine"
let asher = "Asher Haun"
let martin = "Martin Luther"
let roos = "Dave Roos"
let minion = "Minion"
let stats = "The Great Statistician"
let conclusion = "Conclusion"
let credits = "Credits"

spawnMessage("Hey! Welcome to my presentation.<br><button id='startPresentation'>Start Presentation</button>", them, asher)

function sleep(ms, threadId) {
    return new Promise(resolve => {
        if (!currentThread[threadId]){
            console.log("Waiting on " + threadId)
            setTimeout(sleep, 100, ms, threadId); // wait until thread is active again
        } else {
            setTimeout(resolve, (!dev?ms * 1000:.1)) // wait for amount of time passed
        }
    })
}

function cont (name, thread) {
    spawnMessage("<strong>Please continue to " + name + ".</strong>", them, thread)
}

async function disableThreads () {
    new Promise(resolve => {
        for (var i = 0; i < friendsList.length; i ++) {
            if (!threadClickable(i)) {
                friendsList[i].classList.add("disabled")
            } else {
                friendsList[i].classList.remove("disabled")
            }
        }
        setTimeout(disableThreads, 100); // wait until thread is active again
    })
}

disableThreads()


// Asher
var clickedAsher = false
makeNextThreadClickable(-1)
$("#startPresentation").click(async () => {
    let t = 0
    setThread(t)
    if (clickedAsher || !threadClickable(t)) {
        return
    }
    await sleep(.4, 0)
    spawnMessage("start", mine, asher)

    await sleep(.4, 0)
    spawnMessage("All of the messages in this presentation are automatic, so if you type something and get a dumb response it is because I have no idea how to code a context aware AI :D", them, asher)

    await sleep(4, 0)
    spawnMessage("The best way to follow the presentation is in order from Martin Luther all the way to texting.", them, asher)

    await sleep(1, 0)
    spawnMessage("Now open the thread to " + martin + "." , them, asher)
    
    await sleep(1, 0)
    spawnMessage("Enjoy!<br>-Asher", them, asher)
    clickedAsher = true
    makeNextThreadClickable(t)
})

// Martin
var clickedMartin = false
$("body > div.sidenav > div:nth-child(3)").click(async () => {
    let t = 1
    setThread(t)
    if (clickedMartin || !threadClickable(t)) {
        return
    }
    await sleep(.6, t)
    spawnMessage("Hey", them, martin)

    await sleep(1.5, t)
    spawnMessage("I am heading into town today to nail a few ideas to the doors of the Castle Church.", them, martin)

    await sleep(2.3, t)
    spawnMessage("You know they don't like ideas, right?", mine, martin)

    await sleep(2, t)
    spawnMessage("¯\\_(ツ)_/¯", them, martin)

    await sleep(3, t)
    cont(roos, martin)

    clickedMartin = true
    makeNextThreadClickable(t)
})

// Roos
var clickedRoos = false
$("body > div.sidenav > div:nth-child(4)").click(async () => {
    let t = 2
    setThread(t)
    if (clickedRoos || !threadClickable(t)) {
        return
    }
    await sleep(.6, t)
    spawnMessage("Hi, I am Dave Roos, a writer for History.com", them, roos)

    await sleep(2.6, t)
    spawnMessage("Don't worry about the timeline here, I can talk to you at the same time as Martin even though I am in 2019, he is in 1517, and you are in 2021.", them, roos)

    await sleep(3.5, t)
    spawnMessage("Here is a picture of Martin I found from genius.com:", them, roos)
    
    await sleep(1, t)
    spawnMessage("<img src='images/nailing.png' width='170px'>", them, roos)

    await sleep(6, t)
    spawnMessage("It was taken just a few hours after he told you he was heading into town.", them, roos)

    await sleep(2.4, t)
    spawnMessage("That day, he sparked a revolution in Christianity, but perhaps unknowingly, he also transformed the German language.", them, roos)

    await sleep(2.4, t)
    spawnMessage("\"Thanks to the printing press and the timely power of his message, Luther became the world’s first best-selling author\"", them, roos)

    await sleep(3.4, t)
    spawnMessage("Wait, how did he transform a language by nailing his 95 Theses to the door?", mine, roos)

    await sleep(3.4, t)
    spawnMessage("Good question.", them, roos)

    await sleep(4.4, t)
    spawnMessage("His ideas, along with the standardized printing of the Bible on printing presses gave Germans a single standardized German that they could all speak, read, and write.", them, roos)

    await sleep(5, t)
    spawnMessage("This is how my friend, Grigor Bahhdadaryan, puts it:", them, roos)
    await sleep(3.4, t)
    spawnMessage(`“Historically, technological advances [tend] to increase the social and economic phenomena to
    talk about thus requiring new words, new phrases or semantic expansion of old words and phrases”`, them, roos)

    await sleep(3, t)
    cont(minion, roos)
    clickedRoos = true
    makeNextThreadClickable(t)
})

var clickedMinion = false
$("body > div.sidenav > div:nth-child(5)").click(async () => {
    let t = 3
    setThread(t)
    if (clickedMinion || !threadClickable(t)) {
        return
    }
    await sleep(.6, t)
    spawnMessage("Hi, I am a robotic minion that Asher made to talk for him.", them, minion)

    await sleep(2.8, t)
    spawnMessage("Now that you have had a very one sided conversation with " + roos + ", sit back and enjoy while I spiel more info at you.", them, minion)

    await sleep(2.9, t)
    spawnMessage(`Martin Luther's use of the printing press transformed a language.
    <br>There have been other interesting advancements made in written communication since then, but one of the most exciting is the invention of the internet.`, them, minion)

    await sleep(6, t)
    spawnMessage("<img src='images/comNet.gif' width='300' style='border-radius: 15px;'><br>(<a href='https://www.britannica.com/technology/Internet/Foundation-of-the-Internet'>Brittanica</a>)", them, minion)
    
    await sleep(2, t)
    spawnMessage("^^^ The internet started out with government and universities connecting giant computers like this.", them, minion)

    await sleep(3.6, t)
    spawnMessage("<img src='images/modem.jpg' width='300' style='border-radius: 15px;'><br>(Modem from <a href='https://en.wikipedia.org/wiki/Modem#/media/File:Analogue_modem_-_acoustic_coupler.jpg'>Wikipedia</a>)", them, minion)
    
    await sleep(.1, t)
    spawnMessage("^^ Soon enough it evolved into a publicly available network. Albiet quite noisy and slow if you wanted to connect.", them, minion)

    await sleep(8, t)
    spawnMessage("Finally, the internet became what we know and love today", them, minion)

    await sleep(3, t)
    cont(stats, minion)

    clickedMinion = true
    makeNextThreadClickable(t)
})

var clickedStats = false
$("body > div.sidenav > div:nth-child(6)").click(async () => {
    let t = 4
    setThread(t)
    if (clickedStats || !threadClickable(t)) {
        return
    }
    await sleep(.6, t)
    spawnMessage("Asher created a google form where he asked 40 of his peers some questions about how they use language while texting.", them, stats)

    await sleep(3.6, t)
    spawnMessage(`  Question: Do you use shortened, abbreviated, or modified English when you text?
                    <br>
                    <img src='images/graphs/shortenedLang.png' width='300' style="border-radius: 15px;">`, them, stats)

    await sleep(3.6, t)
    spawnMessage(`  Question: When you are texting, do you care as much about typos and grammar errors as you might in an email?
                    <br>
                    <img src='images/graphs/grammarInTexts.png' width='280' style="border-radius: 15px;">`, them, stats)

    await sleep(3.6, t)
    spawnMessage("As you can see, the majority of participants modify their language when using text to communicate.", them, stats)

    await sleep(3.6, t)
    spawnMessage(`  Question: Are there words that you use in texting that you don't use in verbal communication?
                    <br>
                    <img src='images/graphs/changeVerbal.png' width='280' style="border-radius: 15px;"></img>`, them, stats)

    // await sleep(.02)
    // spawnMessage("About half of the students reported that they have learned new words from texting that they now use in verbal communication.", them, stats)

    await sleep(.1, t)
    spawnMessage("Not only do people switch to different forms of English when they are texting, about half of the participants reported that they now use words learned from texting in verbal communication.", them, stats)

    await sleep(3, t)
    cont(conclusion, stats)

    clickedStats = true
    makeNextThreadClickable(t)
})

var clickedConclusion = false
$("#conclusion").click(async () => {
    let t = 5
    setThread(t)
    if (clickedConclusion || !threadClickable(t)) {
        return
    }
    await sleep(.6, t)
    spawnMessage("Much more can be said, however I think that the main takeway is that the limitations and or features of technology push us to change the way we communicate with others. Whether that means using abbreviations in lew of full words and phrases, or making up new ones, the medium changes the language.", them, conclusion)

    await sleep(4.6, t)
    spawnMessage(`  Until next time...
                    <br>
                    <br>
                    <img src='images/cat.gif' width='300' style="border-radius: 15px;">`, them, conclusion)

    clickedConclusion = true   
    makeNextThreadClickable(t) 
})

var clickedCredits = false
$("#credits").click(async () => {
    let t = 6
    setThread(t)
    if (clickedCredits || !threadClickable(t)) {
        return
    }
    await sleep(.6, t)
    spawnMessage(`<a href="https://www.academia.edu/11900649/How_technology_changes_the_English_language">Baghdasaryan, G. How technology changes the English language.</a>
    <br><br>
    <a href="https://www.history.com/news/printing-press-renaissance">Roos, D. 7 Ways the Printing Press Changed the World.</a><br><br>
    <a href="https://docs.google.com/spreadsheets/d/1nPT2RTyGVXWNZmvO1EhN6lHvvif0CRFHs2bL0y3KGbo/edit#gid=9267185">Poll results</a><br><br>
    There are more sources not directly referenced in this presentation, but used in my research (those sources are appropriately cited in my full research paper). `, them, credits)

    await sleep(.6, t)
    spawnMessage(`The source code for this project is available on <a href="https://github.com/athaun/English-portfolio">Github</a>`, them, credits)

    await sleep(.6, t)
    spawnMessage(`Coded with ❤️ by Asher Haun`, them, credits)

    clickedCredits = true    
})