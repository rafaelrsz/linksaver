/* eslint-disable prettier/prettier */
import { FormEvent, useState } from "react";
import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import { useArticles } from "../../hooks/useArticles";
import { useBlogs } from "../../hooks/useBlogs";
import { useLinks } from "../../hooks/useLinks";
import { Container } from "./styles";

interface NewLinkModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

interface IArticle {
  title: string;
  url: string;
}

export function NewLinkModal({
  isOpen,
  onRequestClose,
}: NewLinkModalProps) {
  const { blogs } = useBlogs();
  const { createLink } = useLinks();
  const { articles, devGo, cangaceiro, hr } = useArticles();

  const [title, setTitle] = useState("");
  const [site, setSite] = useState("");
  const [url, setUrl] = useState("");

  async function handleOptionChange(blog: string): Promise<void> {
    if (blog === "DevGo") {
      await devGo();
    } else if (blog === "CangaceiroJS") {
      await cangaceiro();
    } else if (blog === "Humberto Rocha Blog") {
      await hr();
    }
  }

  function findMatchUrl(articles: IArticle[], title: string) {
    const article = articles.find((article) => article.title === title);

    if (article) {
      return article?.url;
    }
    return "";
  }

  async function handleCreateNewLink(event: FormEvent): Promise<void> {
    event.preventDefault();

    await createLink({
      title,
      site,
      url,
    });

    setTitle("");
    setSite("");
    setUrl("");

    onRequestClose();
  }

  return (
    <Modal
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container onSubmit={handleCreateNewLink}>
        <h2>Cadastrar link</h2>


        {site === "DevGo" ||
          site === "CangaceiroJS" ||
          site === "Humberto Rocha Blog" ? (
          <select
            onChange={(event) => {
              setTitle(event.target.value);
              setUrl(findMatchUrl(articles, event.target.value));
            }}
          >
            <option value="" selected disabled hidden>Selecione o artigo</option>
            {articles.map((article) => (
              // eslint-disable-next-line no-underscore-dangle
              <option value={article.title} key={article.url}>
                {article.title}
              </option>
            ))}
          </select>
        ) : (
          <input
            placeholder="Título"
            defaultValue={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        )}

        <select
          onChange={(event) => {
            setSite(event.target.value);
            handleOptionChange(event.target.value);
            setTitle("");
            setUrl("");
          }}
        >
          <option value="">Outro</option>
          {blogs.map((blogname) => (
            // eslint-disable-next-line no-underscore-dangle
            <option value={blogname.title} key={blogname._id}>
              {blogname.title}
            </option>
          ))}
        </select>

        {site === "DevGo" ||
          site === "CangaceiroJS" ||
          site === "Humberto Rocha Blog" ? (
          <input
            placeholder="URL"
            value={url}
            disabled
          />
        ) : (
          <input
            placeholder="URL"
            value={url}
            onChange={(event) => setUrl(event.target.value)}
          />
        )}



        <button type="submit">Cadastrar</button>
      </Container>
    </Modal >
  );
}
