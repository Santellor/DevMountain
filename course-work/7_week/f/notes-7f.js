const isPangram = (str) => {
    str = str.toLowerCase()
    let alphabet = `abcdefghijklmnopqrstuvwxyz`

    str.split(``).forEach((el) => {
        alphabet = alphabet.replace(el,``)
    });

    return alphabet.length === 0
}