import readline from "readline";
import fs from "fs";
import path from "path";
import consola from "consola";

const projectNode = () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question(
        "Pilihan Menu: \n 1. Create \n 2. Delete \n 3. Read \n ",
        (answer) => {
            switch (answer) {
                case "1":
                    fs.open("data.txt", "w", (err, fd) => {
                        if (err) throw err;
                        consola.success("File berhasil dibuat");
                        rl.close();
                    });
                    break;
                case "2":
                    fs.unlink("data.txt", (err) => {
                        if (err) throw err;
                        consola.success("File berhasil dihapus");
                    });
                    break;
                case "3":
                    fs.readFile("data.txt", "utf-8", (err, data) => {
                        if (err) throw err;
                        consola.success(data);
                    });
                    break;
                default:
                    consola.error("Menu tidak ditemukan");
                    break;
            }
            rl.close();
        }
    );
};

export default projectNode;
