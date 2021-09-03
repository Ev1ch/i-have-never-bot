async function logMiddleware(ctx, next) {
    const message = ctx.update.message;
    const user = message.from;
    const logMessage = `User: ${user.id}, ${user.username} => ${
        message.text
    } | ${new Date(message.date).toUTCString()}`;

    console.log(logMessage);

    await next();
}

export default logMiddleware;
