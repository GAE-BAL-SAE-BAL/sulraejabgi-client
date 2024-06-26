import { atom } from "jotai";
import { ModalState } from "../hooks/useModal";

export const modalContext = atom<ModalState>({
  visible: false,
  component: null,
});

export const signupContext = atom({
  userAccount: "",
  password: "",
  anything: [] as Array<string>,
});
