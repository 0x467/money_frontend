import { FC, PropsWithChildren } from "react";
import s from "./card.module.css";

export const Card: FC<PropsWithChildren> = (props) => {
  return (
    <div className={s.card}>
      {props.children}
    </div>
  );
};
