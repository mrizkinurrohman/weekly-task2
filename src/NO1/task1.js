const fetchData = (status) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (status === true) {
                resolve("Data berhasil diambil");
            } else {
                reject("Data gagal diambil");
            }
        }, 3000);
    });
};

fetchData(true)
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    });

// const getData = async () => {
//     try {
//         const response = await fetchData(true);
//         console.log(response);
//     } catch (err) {
//         console.log(err);
//     }
// };

export default fetchData;
// getData();
