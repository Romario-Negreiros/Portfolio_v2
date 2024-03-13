import Link from "next/link";

import styles from "./styles.module.css";

interface Props {
  href: string;
  text: string;
  isDownload?: boolean;
}

export default function LinkButton({ href, text, isDownload = false }: Props) {
  return (
    <Link className={styles.container} download={isDownload} href={href}>
      {text}
    </Link>
  )
}
