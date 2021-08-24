function escapeMessage(message) {
    return message
        .replace(/\./g, '\\.')
        .replace(/!/g, '\\.')
        .replace(/\-/g, '\\-');
}

export default escapeMessage;
