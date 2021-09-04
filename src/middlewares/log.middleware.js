import { convertFromUnixTime } from '../helpers/index.js';

async function logMiddleware(ctx, next) {
    const message = ctx.update.message;
    const user = message.from;
    const time = convertFromUnixTime(message.date);

    const logMessage = `User: ${user.id}, ${user.username} => ${
        message.text
    } | ${new Date(time).toUTCString()}`;

    console.log(logMessage);

    await next();
}

export default logMiddleware;
