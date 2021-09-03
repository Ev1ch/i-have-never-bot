import { QUESTIONS_KEYBOARD, REMOVE_KEYBOARD } from '../../commons/index.js';
import { escapeMessage } from '../index.js';

function sendMessage(ctx, message, withKeyboard) {
    const escapedMessage = escapeMessage(message);
    ctx.replyWithMarkdownV2(
        escapedMessage,
        withKeyboard === true
            ? { reply_markup: QUESTIONS_KEYBOARD }
            : withKeyboard === false
            ? { reply_markup: REMOVE_KEYBOARD }
            : null,
    );
}

export default sendMessage;
