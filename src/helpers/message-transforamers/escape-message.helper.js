function escapeMessage(message) {
    const escapedMessage = message
        .replace(/\./g, '\\.')
        .replace(/!/g, '\\.')
        .replace(/\-/g, '\\-');

    return escapedMessage;
}

export default escapeMessage;
