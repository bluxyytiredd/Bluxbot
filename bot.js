const mineflayer = require('@wp2508/mineflayer');

function startBot() {
  const bot = mineflayer.createBot({
    host: 'bluxcraft.mcsh.io',
    port: 25565,
    username: 'BluxBot',
    version: '26.2',
    auth: 'offline'
  });

  bot.once('spawn', () => {
    console.log('BluxBot BluxCraft-a qoşuldu!');
  });

  bot.on('end', () => {
    console.log('Bot serverdən ayrıldı. 10 saniyəyə yenidən qoşulur...');
    setTimeout(startBot, 10000);
  });

  bot.on('error', (err) => {
    console.log('Xəta:', err.message);
  });
}

startBot();
