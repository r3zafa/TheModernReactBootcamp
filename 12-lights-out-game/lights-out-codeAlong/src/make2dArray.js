function Array2d(nCols, nRows) {
    let arr2d = new Array(nCols);
    for (let i = 0; i < arr2d.length; i++) {
        arr2d[i] = new Array(nRows);
        arr2d[i].fill(false);
    };
    return arr2d;
}

// console.log(arr2d)

export default Array2d;