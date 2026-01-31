const mongoose = require("mongoose");
const Blog = require("../server/models/blogModel");

const MONGODB_URI = "mongodb://localhost:27017/LearnBackend";

async function migrate() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to DB for migration");

    // Copy `image` -> `media` for documents that have an `image` field
    // Uses update pipeline to set media from image then unset image
    const res = await Blog.updateMany({ image: { $exists: true } }, [
      { $set: { media: "$image" } },
      { $unset: ["image"] },
    ]);

    console.log("Migration complete:", res.modifiedCount, "documents updated");
  } catch (err) {
    console.error("Migration error:", err);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from DB");
  }
}

migrate();
