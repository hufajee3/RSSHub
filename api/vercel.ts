const path = import('path');
const moduleAlias = import('module-alias');
moduleAlias.addAlias('@', path.join(__dirname, '../lib'));

const { setConfig } = import('../lib/config');
setConfig({
    NO_LOGFILES: true,
});

const { handle } = import('hono/vercel');
const app = import('../lib/app');
const logger = import('../lib/utils/logger');

logger.info(`🎉 RSSHub is running! Cheers!`);
logger.info('💖 Can you help keep this open source project alive? Please sponsor 👉 https://docs.rsshub.app/sponsor');

module.exports = handle(app);
