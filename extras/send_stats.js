const request = require("superagent"), config = require('./../tlcfg.json'), dbotspw_token = config.dbotspw, dbots_token = config.dbots;
module.exports = {
  send:async function(guild_size, shard_size){
    if(guild_size == null) return;
    if(shard_size == null) return;
    request.post(`https://discordbots.org/api/bots/318554710929833986/stats`)
    .set('Authorization', dbots_token)
    .send({ server_count: guild_size, shard_count: shard_size })
    .end(function(err, res){
      if(err){
        return console.log(`ERROR SENDING STATS TO DISCORDBOTS.ORG: ${err}`);
      }else{
        console.log(`Successfully sent stats to https://discordbots.org! Now at ${guild_size} servers!`);
      }
    });
    request.post(`https://bots.discord.pw/api/bots/318554710929833986/stats`)
    .set('Authorization', dbotspw_token)
    .send({ server_count: guild_size })
    .end(function(err, res){
      if(err){
        return console.log(`ERROR SENDING STATS TO BOTS.DISCORD.PW: ${err}`);
      }else{
        console.log(`Successfully sent stats to https://bots.discord.pw! Now at ${guild_size} servers!`);
      }
    });
  }
}
