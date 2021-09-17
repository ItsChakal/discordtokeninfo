const fetch = require('node-fetch');

function getNitro(nitro) {
    switch (nitro) {
        case 0:
            return "Sans Discord Nitro";
            break;
        case 1:
            return "Discord Nitro Classique";
            break;
        case 2:
            return "Discord Nitro Boost";
            break;
    }
}

function getInfos(token) {
    if (token.match(/mfa.[\w-]{84}/g) || token.match(/[MN][A-Za-z\d]{23}\.[\w-]{6}\.[\w-]{27}/g)) {
        return new Promise(async (resolve, reject) => {
            let res = await fetch("https://discord.com/api/v9/users/@me", {
                "method:": "GET",
                "headers": {
                    'authorization': token,
                    'user-agent': 'Mozilla/5.0 (Windows NT 6.3) AppleWebKit/537.36.0 (KHTML, like Gecko) Chrome/61.0.0.0 Safari/537.36.0'
                }
            })
            response = await res.json()
            console.clear()
            console.log(`\x1b[32mToken\x1b[0m: ${token}\x1b[0m\n\nUser Infos -> \n\n\x1b[38;2;75;75;75mUsername\x1b[0m: \x1b[36m${response.username}\x1b[0m#\x1b[36m${response.discriminator}\x1b[0m (\x1b[36m${response.id}\x1b[0m)\n\x1b[38;2;75;75;75mEmail\x1b[0m: \x1b[36m${response.email}\x1b[0m\n\x1b[38;2;75;75;75mEmail vérifiée\x1b[0m: \x1b[36m${response.verified}\x1b[0m\n\x1b[38;2;75;75;75mNuméro de téléphone\x1b[0m: \x1b[36m${response.phone}\x1b[0m\n\x1b[38;2;75;75;75m2FA activée\x1b[0m: \x1b[36m${response.mfa_enabled}\x1b[0m\n\x1b[38;2;75;75;75mNSFW authorisé\x1b[0m: \x1b[36m${response.nsfw_allowed}\x1b[0m\n\x1b[38;2;75;75;75mNitro\x1b[0m: \x1b[36m${getNitro(response.premium_type)}\x1b[0m\n\x1b[38;2;75;75;75mLangue\x1b[0m: \x1b[36m${response.locale}\x1b[0m\n\x1b[38;2;75;75;75mFlags\x1b[0m: \x1b[36m${response.flags}\x1b[0m (\x1B[35mdemerdez vous pour calculer srx\x1b[0m)\n\x1b[38;2;75;75;75mBio\x1b[0m: \x1b[36m${response.bio}\x1b[0m`)
            console.log(`\n\nAvatar and Banner -> \n\n\x1b[38;2;75;75;75mAvatar\x1b[0m: \x1b[36mhttps://cdn.discordapp.com/avatars/${response.id}/${response.avatar}${response.banner === null ? "" : "\x1b[0m\n\x1b[38;2;75;75;75mBannerx1b[0m: \x1b[36mhttps://cdn.discordapp.com/banners/response.id/response.banner\x1b[0m"}\n\x1b[38;2;75;75;75mBanner color\x1b[0m: \x1b[36m${response.banner_color}\x1b[0m`)
        })
    } else return console.clear() ^ console.log('\x1b[31mIl vous faut mettre un token!\x1b[0m')
}

//mfa.cRUnwcHf_-5ZVY5iPT0cNALbnpjDhUNCZt5zPdlHga_Y6hA5KGO1jITw6txXJ0h8YXUrrbNWJkTEa4BAQ-wL

//NDY1MTUwMDAzNzYyMDM2NzQ3.YToppw.CgRddIuEkksKGtZnhRL6vFAk_O0

function start() {
    console.log('\x1b[33mÉcrivez le token ci-dessous : \x1b[0m')
    process.stdin.on('data', async (data) => {
        getInfos(data.toString().trim())
    });
}

start()
