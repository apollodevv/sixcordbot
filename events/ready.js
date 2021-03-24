module.exports = (client) => {
    console.log(`Logged as: ${client.user.tag}`)
    client.user.setActivity('sixcord.xyz | s?help ', { type: 'WATCHING' });
}
