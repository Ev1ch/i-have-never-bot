import { BotReplies } from '../commons/index.js';
import { sendMessage } from '../helpers/index.js';

async function errorMiddleware(error, ctx) {
    const errorLog = `Error: ${error}`;
    console.error(errorLog);
    sendMessage(ctx, BotReplies.ERROR);
}

export default errorMiddleware;
