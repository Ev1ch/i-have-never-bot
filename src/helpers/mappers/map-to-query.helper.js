function mapObjectToQuery(object, options) {
    const startIndex = options?.startIndex || 1;
    const separator = options?.separator || 'and';
    const setKeys = options?.setKeys !== undefined ? options.setKeys : true;

    return Object.keys(object).reduce(
        (query, key, index) =>
            `${query}${index !== 0 ? ` ${separator} ` : ''}${
                setKeys ? `${key} = ` : ''
            }$${startIndex + index}`,
        '',
    );
}

export default mapObjectToQuery;
