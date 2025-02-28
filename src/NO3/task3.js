const getDataUsers = async () => {
    try {
        const temp = [];
        const url = "https://jsonplaceholder.typicode.com/users";
        const response = await fetch(url);
        if (!response.ok) throw new Error(response.statusText);
        const dataUsersJson = await response.json();
        // console.log(dataUsersJson);
        dataUsersJson.map((el) => {
            // console.log(el);
            const { name, address } = el;
            const city = address.city;
            // console.log(addressCity);
            temp.push({ name, city });
        });
        const result = temp.sort((a, b) => {
            if (a.city > b.city) return 1;
            if (a.city < b.city) return -1;
            return 0;
        });
        console.log(result);
    } catch (error) {
        if (error instanceof Error) console.log(error.message);
    }
};

// getDataUsers();
export default getDataUsers;
