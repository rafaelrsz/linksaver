import { Article, IArticles } from "../../../app/schemas/Articles";
import { IArticlesRepository } from "../IArticlesRepository";

class ArticlesRepository implements IArticlesRepository {
  async create(articles: IArticles[]): Promise<IArticles[]> {
    const article = await Article.insertMany(articles);

    return article;
  }
}

export { ArticlesRepository };
