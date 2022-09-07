import mongoose from "mongoose";

async function main() {
  await mongoose.connect("mongodb://localhost/linksaver", () => {
    console.log("mongdb is connected");
  });
}

main().catch((err) => console.log(err));

export { mongoose };
