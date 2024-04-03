export const getRandomArray = (maxNumber:number) => {
    const numbers: number[] = [];
    while (numbers.length < maxNumber) {
        const randomNumber = Math.floor(Math.random() * maxNumber) + 1;
        if (numbers.indexOf(randomNumber) === -1) {
            numbers.push(randomNumber);
        }
    }
    return numbers;
}