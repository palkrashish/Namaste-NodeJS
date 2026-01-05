const { MongoClient } = require("mongodb");



const client = new MongoClient(url);

const dbName = "HelloWorld";
async function main() {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("User");

  // Insert document
  const insertResult = await collection.insertMany([
    {
      a: 1,
      firstName: "Rahul",
      LastName: "Pal",
      City: "Noida",
      Country: "India",
    },
    {
      a: 2,
      firstName: "Mohan",
      LastName: "Raj",
      City: "Noida",
      Country: "India",
    },
    {
      a: 3,
      firstName: "Sohan",
      LastName: "Rastogi",
      City: "Noida",
      Country: "India",
    },
  ]);
  console.log("Inserted documents =>", insertResult);
  // Find All document
  const findResult = await collection.find({}).toArray();
  console.log("Found documents =>", findResult);
  return "done.";
}
main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
