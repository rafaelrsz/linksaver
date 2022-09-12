import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenNewLinkModal: () => void;
}

export function Header({ onOpenNewLinkModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="link saver" />
        <button type="button" onClick={onOpenNewLinkModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
