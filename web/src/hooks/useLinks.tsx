import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";

interface ILink {
  _id: string;
  title: string;
  site: string;
  url: string;
  createdAt: string;
}

type LinkInput = Omit<ILink, "_id" | "createdAt">;

interface LinkProviderProps {
  children: ReactNode;
}

interface LinkContextData {
  links: ILink[];
  createLink: (link: LinkInput) => Promise<void>;
  deleteLink: (id: string) => Promise<void>;
  editLink: (
    id: string,
    title: string,
    site: string,
    url: string
  ) => Promise<void>;
}

const LinkContext = createContext<LinkContextData>({} as LinkContextData);

export function LinksProvider({ children }: LinkProviderProps) {
  const [links, setLinks] = useState<ILink[]>([]);

  useEffect(() => {
    api.get("/links").then((response) => setLinks(response.data));
  }, []);

  async function createLink(linkInput: LinkInput) {
    const response = await api.post("/links", {
      ...linkInput,
    });

    setLinks([...links, response.data]);
  }

  async function deleteLink(id: string) {
    // eslint-disable-next-line no-underscore-dangle
    await api.delete(`/links/delete/${id}`);

    await api.get("/links").then((response) => setLinks(response.data));
  }

  async function editLink(
    id: string,
    title: string,
    site: string,
    url: string
  ) {
    // eslint-disable-next-line no-underscore-dangle
    await api.patch(`/links/update/${id}`, null, {
      params: {
        title,
        site,
        url,
      },
    });

    await api.get("/links").then((response) => setLinks(response.data));
  }

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <LinkContext.Provider value={{ links, createLink, deleteLink, editLink }}>
      {children}
    </LinkContext.Provider>
  );
}

export function useLinks() {
  const context = useContext(LinkContext);

  return context;
}
