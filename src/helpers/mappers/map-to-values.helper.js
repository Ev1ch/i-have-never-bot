function mapObjectToValues(object) {
    const mappedObject = Object.values(object).map((value) =>
        Array.isArray(value)
            ? `{ ${value.map((item) => `"${item}"`).toString()} }`
            : value,
    );

    return mappedObject;
}

export default mapObjectToValues;
