const getDataFormServer = (status, callback) => {
    if (typeof status !== "boolean")
        return "parameter status bukan type boolean";
    if (typeof callback !== "function")
        return "parameter callback bukan type function";
    setTimeout(() => {
        if (status) {
            return callback(["Product 1", "Product 2", "Product 3", null]);
        } else {
            const err = new Error("Failed to fetch data");
            err.name = "error";
            return callback(null, err);
        }
    }, 3000);
};

export const procesData = (data) => {
    try {
        const result = data;
        console.log(result);
        // return result;
    } catch (error) {
        console.log(error);
        // return error;
    }
};

export default getDataFormServer;
// console.log(getDataFormServer(true, procesData));

// console.log(typeof procesData);
