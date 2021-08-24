function mapObjectToValues(object) {
    return Object.values(object).map((value) =>
        Array.isArray(value)
            ? `{ ${value.map((item) => `"${item}"`).toString()} }`
            : value,
    );
}

export default mapObjectToValues;
