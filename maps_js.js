// let sayings = new Map();
// // Map is like a dict of python it stores data as key Value Pair

// sayings.set("name", "Adith");
// sayings.has("name");



let Name = new Map();

Name.set("FirstName", "Adith");
Name.set("LastName", "Prakash");


for (const [key, Value] of Name) {
    console.log(`${key} of ${Value}`);
}
