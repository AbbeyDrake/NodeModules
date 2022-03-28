module.exports = (x, y, callback) => {
    if (x <= 0 || y <= 0) {
        callback(new Error(`Rectangle dimensions must be greater than zero. Received: ${x}, ${y}`));
    } else {
        setTimeout(() =>
            callback(null, {
                perimeter: () => 2 * (x + y),
                area: () => x * y
            }),
            2000
        );
    }
};

//export returns entire function for this module instead of 2 separat methods. Then for the function we are returning for this module, set up 3 parameters: x, y , callback. Then check if there is an error and if so, execute callback function with error object as first argument. If no error, simulate a delay, then call callback function with null as first argument. Second argument is object with two methods that can compute perimeter and area. 