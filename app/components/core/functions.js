var self = module.exports;

exports.rootAuth = function(username) {
    return username === process.env.admin_username;
}

exports.auth = async function(redisconnection, uid) {
    return await redisconnection.hexists('admins', uid, (val) => { return val; });
}

exports.isRegistered = async function(redisconnection, uid) {
    return await redisconnection.hexists('users', uid, (val) => { return val; });
}

exports.checkValue = function(value) {
    return !isNaN(value) && Number.isInteger(Number(value));
}

exports.sendInParts = async function(array, botcontext) {
    let i,j, temporary, chunk = 50;
    for (i = 0,j = array.length; i < j; i += chunk) {
        temporary = array.slice(i, i + chunk);
        botcontext.reply(temporary.join('\n'));
    }
}

exports.changeRecipient = async function(redisconnection, locale, uid, simnum, botcontext, add) {
    if(!self.checkValue(uid) || !self.checkValue(simnum)) { botcontext.reply(locale.incorrectvalue); return; }
    let userinfo = await redisconnection.hget('users', uid, (val) => { return val; });
    if(!await self.isRegistered(redisconnection, uid)) { botcontext.reply(locale.usernotfound); return; }

    if(add) {   
        if(await redisconnection.hsetnx('sim'+simnum, uid, userinfo)) {
            botcontext.reply(`${locale.addedsimforuser} ${simnum}`);
        } else {
            botcontext.reply(`${locale.simalreadyexists} ${simnum}`);
        }
    } else {
        if(await redisconnection.hexists('sim'+simnum, uid, (val) => { return val; })) {
            await redisconnection.hdel('sim'+simnum, uid);
            botcontext.reply(`${locale.removedfromchannel} ${simnum}`);
        } else {
            botcontext.reply(`${locale.nouserinrecipients} ${simnum}`);
        }
    }
}

exports.getRecipients = async function(redisconnection, sim_number) {
    return await redisconnection.hvals(`sim${sim_number}`, (val) => { return val; });
}