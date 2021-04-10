let dev = false;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, (!dev?ms * 1000:.1)))
}

// function $$ (time) {
//     await sleep(time)
// }

function cont (name, thread) {
    spawnMessage("<strong>Please continue to " + name + ".</strong>", them, thread)
}

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

// Asher
$("#startPresentation").click(async () => {
    await sleep(.4)
    spawnMessage("start", mine, asher)

    await sleep(.4)
    spawnMessage("All of the messages in this presentation are automatic, so if you type something and get a dumb response it is because I have no idea how to code a context aware AI :D", them, asher)

    await sleep(4)
    spawnMessage("The best way to follow the presentation is in order from Martin Luther all the way to texting.<br>You will be prompted each time you should change to a different different thread.<br><strong>If you don't click through in order, you will experience serious bugs which I am still working on fixing.</strong>", them, asher)

    await sleep(4)
    spawnMessage("Direct quotes from any sources will be placed inside of quotation marks, otherwise, the words are my own.", them, asher)

    await sleep(1)
    spawnMessage("Now open the thread to " + martin + "." , them, asher)
    
    await sleep(1)
    spawnMessage("Enjoy!<br>-Asher", them, asher)
})

// Martin
$("body > div.sidenav > div:nth-child(3)").click(async () => {
    await sleep(.6)
    spawnMessage("Hey", them, martin)

    await sleep(1.5)
    spawnMessage("I am heading into town today to nail a few ideas to the doors of the Castle Church.", them, martin)

    await sleep(2.3)
    spawnMessage("You know they don't like ideas, right?", mine, martin)

    await sleep(2)
    spawnMessage("¯\\_(ツ)_/¯", them, martin)

    await sleep(3)
    cont(roos, martin)
})

// Roos
$("body > div.sidenav > div:nth-child(4)").click(async () => {
    await sleep(.6)
    spawnMessage("Hi, I am Dave Roos, a writer for History.com", them, roos)

    await sleep(2.6)
    spawnMessage("Don't worry about the timeline here, I can talk to you at the same time as Martin even though I am in 2019, he is in 1517, and you are in 2021.", them, roos)

    await sleep(3.5)
    spawnMessage("Here is a picture of Martin I found from genius.com:", them, roos)
    
    await sleep(1)
    spawnMessage("<img src='images/nailing.png' width='170px'>", them, roos)

    await sleep(6)
    spawnMessage("It was taken just a few hours after he told you he was heading into town.", them, roos)

    await sleep(2.4)
    spawnMessage("That day, he sparked a revolution in Christianity, but perhaps unknowingly, he also transformed the German language.", them, roos)

    await sleep(2.4)
    spawnMessage("\"Thanks to the printing press and the timely power of his message, Luther became the world’s first best-selling author\"", them, roos)

    await sleep(3.4)
    spawnMessage("Wait, how did he transform a language by nailing his 95 Theses to the door?", mine, roos)

    await sleep(3.4)
    spawnMessage("Good question.", them, roos)

    await sleep(4.4)
    spawnMessage("His ideas, along with the standardized printing of the Bible on printing presses gave Germans a single standardized German that they could all speak, read, and write.", them, roos)

    await sleep(5)
    spawnMessage("This is how my friend, Grigor Bahhdadaryan, puts it:", them, roos)
    await sleep(3.4)
    spawnMessage(`“Historically, technological advances [tend] to increase the social and economic phenomena to
    talk about thus requiring new words, new phrases or semantic expansion of old words and phrases”`, them, roos)

    await sleep(3)
    cont(minion, roos)
})

$("body > div.sidenav > div:nth-child(5)").click(async () => {
    await sleep(.6)
    spawnMessage("Hi, I am a robotic minion that Asher made to talk for him.", them, minion)

    await sleep(2.8)
    spawnMessage("Now that you have had a very one sided conversation with " + roos + ", sit back and enjoy while I spiel more info at you.", them, minion)

    await sleep(2.9)
    spawnMessage(`Martin Luther's use of the printing press transformed a language.
    <br>There have been other interesting advancements made in written communication since then, but one of the most exciting is the invention of the internet.`, them, minion)

    await sleep(6)
    spawnMessage("<img src='images/comNet.gif' width='300' style='border-radius: 15px;'><br>(<a href='https://www.britannica.com/technology/Internet/Foundation-of-the-Internet'>Brittanica</a>)", them, minion)
    
    await sleep(2)
    spawnMessage("^^^ The internet started out with government and universities connecting giant computers like this.", them, minion)

    await sleep(3.6)
    spawnMessage("<img src='images/modem.jpg' width='300' style='border-radius: 15px;'><br>(Modem from <a href='https://en.wikipedia.org/wiki/Modem#/media/File:Analogue_modem_-_acoustic_coupler.jpg'>Wikipedia</a>)", them, minion)
    
    await sleep(.1)
    spawnMessage("^^ Soon enough it evolved into a publicly available network. Albiet quite noisy and slow if you wanted to connect.", them, minion)

    await sleep(8)
    spawnMessage("Finally, the internet became what we know and love today", them, minion)

    await sleep(3)
    cont(stats, minion)
})

$("body > div.sidenav > div:nth-child(6)").click(async () => {
    await sleep(.6)
    spawnMessage("Asher created a google form where he asked 40 of his peers some questions about how they use language while texting.", them, stats)

    await sleep(3.6)
    spawnMessage(`  Question: Do you use shortened, abbreviated, or modified English when you text?
                    <br>
                    <img src='images/graphs/shortenedLang.png' width='300' style="border-radius: 15px;">`, them, stats)

    await sleep(3.6)
    spawnMessage(`  Question: When you are texting, do you care as much about typos and grammar errors as you might in an email?
                    <br>
                    <img src='images/graphs/grammarInTexts.png' width='280' style="border-radius: 15px;">`, them, stats)

    await sleep(3.6)
    spawnMessage("As you can see, the majority of participants modify their language when using text to communicate.", them, stats)

    await sleep(3.6)
    spawnMessage(`  Question: Are there words that you use in texting that you don't use in verbal communication?
                    <br>
                    <img src='images/graphs/changeVerbal.png' width='280' style="border-radius: 15px;"></img>`, them, stats)

    // await sleep(.02)
    // spawnMessage("About half of the students reported that they have learned new words from texting that they now use in verbal communication.", them, stats)

    await sleep(.1)
    spawnMessage("Not only do people switch to different forms of English when they are texting, about half of the participants reported that they now use words learned from texting in verbal communication.", them, stats)

    await sleep(3)
    cont(conclusion, stats)
})

$("#conclusion").click(async () => {
    await sleep(.6)
    spawnMessage("Much more can be said, however I think that the main takeway is that the limitations and or features of technology push us to change the way we communicate with others. Whether that means using abbreviations in lew of full words and phrases, or making up new ones, the medium changes the language.", them, conclusion)

    await sleep(4.6)
    spawnMessage(`  Until next time...
                    <br>
                    <br>
                    <img src='images/cat.gif' width='300' style="border-radius: 15px;">`, them, conclusion)
    
})

$("#credits").click(async () => {
    await sleep(.6)
    spawnMessage(`<a href="https://www.academia.edu/11900649/How_technology_changes_the_English_language">Baghdasaryan, G. How technology changes the English language.</a>
    <br><br>
    <a href="https://www.history.com/news/printing-press-renaissance">Roos, D. 7 Ways the Printing Press Changed the World.</a><br><br>
    <a href="https://docs.google.com/spreadsheets/d/1nPT2RTyGVXWNZmvO1EhN6lHvvif0CRFHs2bL0y3KGbo/edit#gid=9267185">Poll results</a><br><br>
    There are more sources not directly referenced in this presentation, but used in my research (those sources are appropriately cited in my full research paper). `, them, credits)

    await sleep(.6)
    spawnMessage(`The source code for this project is available on <a href="https://github.com/athaun/English-portfolio">Github</a>`, them, credits)

    await sleep(.6)
    spawnMessage(`Coded with ❤️ by Asher Haun`, them, credits)
    
})