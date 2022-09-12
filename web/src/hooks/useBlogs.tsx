import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";

interface IBlog {
  _id: string;
  title: string;
  url: string;
}

interface BlogProviderProps {
  children: ReactNode;
}

interface BlogContextData {
  blogs: IBlog[];
}

const BlogContext = createContext<BlogContextData>({} as BlogContextData);

export function BlogsProvider({ children }: BlogProviderProps) {
  const [blogs, setBlogs] = useState<IBlog[]>([]);

  useEffect(() => {
    api.get("/providers").then((response) => setBlogs(response.data));
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <BlogContext.Provider value={{ blogs }}>{children}</BlogContext.Provider>
  );
}

export function useBlogs() {
  const context = useContext(BlogContext);

  return context;
}
