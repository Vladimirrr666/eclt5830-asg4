/**
 * ECLT5830 Network and Web Programming
 *
 * I declare that the assignment here submitted is original
 * except for source material explicitly acknowledged,
 * and that the same or closely related material has not been
 * previously submitted for another course.
 * I also acknowledge that I am aware of University policy and
 * regulations on honesty in academic work, and of the disciplinary
 * guidelines and procedures applicable to breaches of such
 * policy and regulations, as contained in the website.
 *
 * University Guideline on Academic Honesty:
 * http://www.cuhk.edu.hk/policy/academichonesty/
 *
 * Student Name : LinQiao
 * Student ID : 1155185447
 * Date : 2022/12/02
 */

const { MongoClient, ObjectId } = require("mongodb");
const MONGODB_URI =
  "mongodb+srv://s1155185447:1qaz2wsx@eclt5830.jkh1ijp.mongodb.net/my_asg4_db?retryWrites=true&w=majority";
const MONGODB_DATABASE = "my_asg4_db";
const MONGODB_COLLECTION = "posts";
const mongoClient = new MongoClient(MONGODB_URI);
const clientPromise = mongoClient.connect();
const handler = async (event) => {
  const { httpMethod, body } = event;
  console.log(httpMethod, body);
  try {
    const database = (await clientPromise).db(MONGODB_DATABASE);
    const collection = database.collection(MONGODB_COLLECTION);
    let results;
    if (httpMethod === "GET") {
      results = await collection.find().toArray();
    } else if (httpMethod === "POST") {
      const data = JSON.parse(body);
      console.log(data);
      results = await collection.findOne({ _id: new ObjectId(data.postId) });
    }
    return {
      statusCode: 200,
      body: JSON.stringify(results),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
