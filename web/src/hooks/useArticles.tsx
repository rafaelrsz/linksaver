import { createContext, ReactNode, useContext, useState } from "react";
import { api } from "../services/api";

export interface IArticle {
  title: string;
  url: string;
}

interface ArticleProviderProps {
  children: ReactNode;
}

interface ArticleContextData {
  articles: IArticle[];
  devGo: () => Promise<void>;
  cangaceiro: () => Promise<void>;
  hr: () => Promise<void>;
}

const ArticleContext = createContext<ArticleContextData>(
  {} as ArticleContextData
);

export function ArticlesProvider({ children }: ArticleProviderProps) {
  const [articles, setArticles] = useState<IArticle[]>([]);

  // useEffect(() => {
  //   api.get("/providers/devgo").then((response) => setArticles(response.data));
  // }, []);

  async function devGo() {
    await api
      .get("/providers/devGo")
      .then((response) => setArticles(response.data));
    console.log(articles);
  }

  async function cangaceiro() {
    await api
      .get("/providers/cangaceiro")
      .then((response) => setArticles(response.data));
  }

  async function hr() {
    await api
      .get("/providers/hr")
      .then((response) => setArticles(response.data));
  }

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ArticleContext.Provider value={{ articles, devGo, cangaceiro, hr }}>
      {children}
    </ArticleContext.Provider>
  );
}

export function useArticles() {
  const context = useContext(ArticleContext);

  return context;
}
