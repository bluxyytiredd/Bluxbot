const mineflayer = require('@wp2508/mineflayer');

function startBot() {
  const bot = mineflayer.createBot({
    host: 'bluxcraft.mcsh.io',
    port: 25565,
    username: 'BluxBot',
    version: false, // Serverin versiyasını avtomatik təyin edir
    auth: 'offline'
  });

  bot.once('spawn', () => {
    console.log('BluxBot BluxCraft-a uğurla qoşuldu!');

    // Əgər serverdə AuthMe /login parolu varsa, aşağıdakı sətrin başındakı // silin:
    // bot.chat('/login 123456');

    // 1. Anti-AFK: Hər 30 saniyədən bir tullanır
    setInterval(() => {
      bot.setControlState('jump', true);
      setTimeout(() => bot.setControlState('jump', false), 500);
    }, 30000);

    // 2. Anti-AFK: Hər 45 saniyədən bir başını etrafa fırladır
    setInterval(() => {
      const yaw = Math.random() * Math.PI * 2;
      const pitch = (Math.random() - 0.5) * Math.PI;
      bot.look(yaw, pitch, true);
    }, 45000);
  });

  bot.on('end', () => {
    console.log('Serverlə əlaqə kəsildi. 10 saniyəyə yenidən qoşulur...');
    setTimeout(startBot, 10000);
  });

  bot.on('error', (err) => {
    console.log('Xəta:', err.message);
  });
}

startBot();
