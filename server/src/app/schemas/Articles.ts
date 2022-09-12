import { mongoose } from "../../database";

interface IArticles {
  url: string;
  title: string;
}

const ArticlesSchema = new mongoose.Schema<IArticles>({
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

const Article = mongoose.model("Articles", ArticlesSchema);

export { IArticles, Article };
