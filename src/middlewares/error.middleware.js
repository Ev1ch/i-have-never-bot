import { BotReplies } from '../commons/index.js';
import { sendMessage } from '../helpers/index.js';

async function errorMiddleware(error, ctx) {
    console.error(error);
    sendMessage(ctx, BotReplies.ERROR);
}

export default errorMiddleware;
