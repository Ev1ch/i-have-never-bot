function getRandomNumber(start, end) {
    const randomNumber = Math.floor(Math.random() * (end - start + 1) + start);

    return randomNumber;
}

function getRandomNumberExcept(start, end, exceptions) {
    let randomNumber;

    do {
        randomNumber = getRandomNumber(start, end);
    } while (exceptions.includes(randomNumber));

    return randomNumber;
}

export { getRandomNumber, getRandomNumberExcept };
