import React, { useState } from "react";
import Modal from "react-modal";
import { Header } from "./components/Header";

import { Dashboard } from "./components/Dashboard";
import { GlobalStyle } from "./styles/global";
import { NewLinkModal } from "./components/NewLinkModal";
import { LinksProvider } from "./hooks/useLinks";
import { BlogsProvider } from "./hooks/useBlogs";
import { ArticlesProvider } from "./hooks/useArticles";

Modal.setAppElement("#root");

export function App() {
  const [isNewLinkModalOpen, setIsNewLinkModalOpen] = useState(false);

  function handleOpenNewLinkModal() {
    setIsNewLinkModalOpen(true);
  }

  function handleCloseNewLinkModal() {
    setIsNewLinkModalOpen(false);
  }

  return (
    <LinksProvider>
      <BlogsProvider>
        <ArticlesProvider>
          <Header onOpenNewLinkModal={handleOpenNewLinkModal} />
          <Dashboard />
          <NewLinkModal
            isOpen={isNewLinkModalOpen}
            onRequestClose={handleCloseNewLinkModal}
          />
          <GlobalStyle />
        </ArticlesProvider>
      </BlogsProvider>
    </LinksProvider>
  );
}
