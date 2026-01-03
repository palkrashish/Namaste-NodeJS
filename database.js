const { MongoClient } = require("mongodb");

// const url =
//   "mongodb+srv://ashishnode:JavaScript@007@ashishnode.agxtuye.mongodb.net/";
const url =
  "mongodb+srv://ashishnode:JavaScript%40007@ashishnode.agxtuye.mongodb.net";

const client = new MongoClient(url);

const dbName = "HelloWorld";
async function main() {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("User");
  

  return "done.";
}
  main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());

