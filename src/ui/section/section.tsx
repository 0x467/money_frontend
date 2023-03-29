import { FC, PropsWithChildren } from "react";
import s from "./section.module.css";

export type SectionProps = {
  title: string;
};

export const Section: FC<PropsWithChildren<SectionProps>> = (props) => {
  return (
    <div className={s.section}>
      <p className={s.sectionTitle}>{props.title}</p>
      {props.children}
    </div>
  );
};
