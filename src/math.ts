/**
 * @description is the value odd or not
 * @returns boolean
 * @param number your value
 * @example isOdd(31)
 */
export const isOdd = (number: number) => {
    if (typeof number === "number") {
        return number % 2 !== 0;
    } else {
        throw new Error("Please Enter Numbers Only");
    }
};

/**
 * @description is the value even or not
 * @returns boolean
 * @param number your value
 * @example isEven(31)
 */
export const isEven = (number: number) => {
    if (typeof number === "number") {
        return number % 2 === 0;
    } else {
        throw new Error("Please Enter Numbers Only");
    }
};
