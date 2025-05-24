import Image from "next/image";
import styles from "./page.module.css";

import SearchInput from "@/components/SearchInput"

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <SearchInput />
      </main>
    </div>
  );
} 
