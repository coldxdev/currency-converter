export const formatReverseRate = value => {
    const normalizedNumber = 1 / value;

    return +normalizedNumber.toFixed(2);
};

export const formatRate = rate => {
   return rate > 1 ? rate.toFixed(2) : rate.toPrecision(2)
}

