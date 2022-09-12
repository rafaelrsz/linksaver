/* eslint-disable no-underscore-dangle */

import React, { useState } from "react";
import copyImg from "../../assets/copy.svg";
import deleteImg from "../../assets/delete.svg";
import editImg from "../../assets/edit.svg";
import openImg from "../../assets/open.svg";
import { useLinks } from "../../hooks/useLinks";
import { EditLinkModal } from "../EditLinkModal";
import { Container } from "./styles";

export function LinksTable() {
  const { links, deleteLink } = useLinks();

  const [text, setText] = useState("");

  const [isEditLinkModalOpen, setIsEditLinkModalOpen] = useState(false);
  const [atualUrl, setAtualUrl] = useState("");
  const [atualSite, setAtualSite] = useState("");
  const [atualTitle, setAtualTitle] = useState("");
  const [atualId, setAtualId] = useState("");

  function handleOpenEditLinkModal() {
    setIsEditLinkModalOpen(true);
  }

  function handleCloseEditLinkModal() {
    setIsEditLinkModalOpen(false);
  }

  return (
    <Container>
      <input
        type="text"
        placeholder="Buscar link"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />

      <table>
        <tbody>
          {links
            // eslint-disable-next-line array-callback-return, consistent-return
            .filter((val) => {
              if (text === "") {
                return val;
              }
              if (
                val.title
                  .toLowerCase()
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
                  .includes(text.toLowerCase())
              ) {
                return val;
              }
            })
            .map((link) => (
              <tr key={link._id}>
                <td>{link.title}</td>
                <td>{link.site}</td>
                <td className="center">
                  {new Intl.DateTimeFormat("pt-BR").format(
                    new Date(link.createdAt)
                  )}
                </td>
                <td className="button">
                  <a href={link.url} target="_blank" rel="noreferrer">
                    <button type="button">
                      <img src={openImg} alt="Open link in new tab" />
                    </button>
                  </a>
                </td>
                <td className="button">
                  <button
                    type="button"
                    onClick={() => navigator.clipboard.writeText(link.url)}
                  >
                    <img src={copyImg} alt="Copy link to clipboard" />
                  </button>
                </td>
                <td className="button">
                  <button type="button">
                    <img
                      src={editImg}
                      alt="Edit Link"
                      onClick={() => {
                        setAtualSite(link.site);
                        setAtualTitle(link.title);
                        setAtualUrl(link.url);
                        setAtualId(link._id);
                        handleOpenEditLinkModal();
                      }}
                    />
                    <EditLinkModal
                      isOpen={isEditLinkModalOpen}
                      onRequestClose={handleCloseEditLinkModal}
                      id={atualId}
                      atualSite={atualSite}
                      atualTitle={atualTitle}
                      atualUrl={atualUrl}
                    />
                  </button>
                </td>
                <td className="button">
                  <button type="button" onClick={() => deleteLink(link._id)}>
                    <img src={deleteImg} alt="Delete Link" />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Container>
  );
}
