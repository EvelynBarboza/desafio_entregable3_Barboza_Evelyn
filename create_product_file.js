const fs = require("fs");

const initialData = [];

fs.writeFileSync("./producto.json", JSON.stringify(initialData));
