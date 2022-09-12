import mongoose from "mongoose";

import { Provider } from "../../app/schemas/Provider";

const seedProviders = [
  {
    url: "https://devgo.com.br/",
    title: "DevGo",
  },
  {
    url: "http://cangaceirojavascript.com.br/",
    title: "CangaceiroJS",
  },
  {
    url: "https://humberto.io/blog/",
    title: "Humberto Rocha Blog",
  },
];

const seedDb = async () => {
  await Provider.deleteMany({});
  await Provider.insertMany(seedProviders);
};

seedDb().then(() => {
  mongoose.connection.close();
});

export { mongoose };
