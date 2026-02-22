"use client";

import { useRouter } from "next/navigation";
import css from "@/components/Modal/Modal.module.css";

type Props = {
  children: React.ReactNode;
};

const ModalRouting = ({ children }: Props) => {
  const router = useRouter();

  const close = () => router.back();

  return (
    <div className={css.backdrop} role="dialog" aria-modal="true">
      <div className={css.modal}>
        {children}
        <button onClick={close}>Close</button>
      </div>
    </div>
  );
};

export default ModalRouting;
