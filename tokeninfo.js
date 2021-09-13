const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
const Discord = require('discord.js')
const client = new Discord.Client()
readline.question('Enter an Token : ', token => {
    readline.close();
    client.login(token)
    console.log("")
    console.log("Wait until you are connected...")
    client.on('ready', function () {
        console.clear()
        if (client.user.premium == 2) {
            var n = "Nitro Classic"
        } else if (client.user.premium == 1) {
            var n = "Nitro Game"
        } else if (client.user.premium == undefined) {
            var n = "No nitro :sad:"
        }
        console.log("\u276F Connected !")
        console.log("")
        console.log("")
        console.log("TOKEN INFOS :")
        console.log("")
        console.log("Token :", token)
        console.log("Username :", client.user.username)
        console.log("Tag :", client.user.discriminator)
        console.log("ID :", client.user.id)
        console.log("Guilds number :", client.guilds.size)
        console.log("Friends number :", client.user.friends.size)
        console.log("Mail :", client.user.email)
        console.log("Verified :", client.user.verified)
        console.log("Nitro :", n)
        console.log("mfa :", client.user.mfaEnabled)
        console.log("Avatar url :", `https://cdn.discordapp.com/avatars/${client.user.id}/${client.user.avatar}.webp?size=128`)
        console.log("")
        console.log("")
        readline.question("Press CTRL + C to close.", leave => {})
    })
});
