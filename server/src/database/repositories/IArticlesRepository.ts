import { IArticles } from "../../app/schemas/Articles";

interface IArticlesRepository {
  create(Vetor: IArticles[]): Promise<IArticles[]>;
}

export { IArticlesRepository };
