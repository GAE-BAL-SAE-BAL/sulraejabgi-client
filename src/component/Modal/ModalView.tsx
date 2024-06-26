import styled, { css } from "styled-components";
import { ModalState } from "../../hooks/useModal";

interface ModalViewProps extends ModalState {
  onClose?: () => void;
}

const ModalView = ({ component, visible, onClose }: ModalViewProps) => {
  return (
    <Container>
      <Background hidden={!visible} onClick={onClose} />
      <ModalContainer>{component}</ModalContainer>
    </Container>
  );
};

const Container = styled.div``;

const Background = styled.div<{ hidden: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 10;
  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  width: fit-content;
  height: fit-content;
  z-index: 20;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export default ModalView;
