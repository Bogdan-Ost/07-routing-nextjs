import Link from "next/link";
import { getCategories } from "@/lib/api";
import css from "./SidebarNotes.module.css";

const NotesSidebar = async () => {
  const categories = await getCategories();
  return (
    <ul className={css.menuList}>
      {/* список тегів */}
      <li className={css.menuItem}>
        <Link href={`/notes/filter/all`} className={css.menuLink}>
          All notes
        </Link>
      </li>
      <li className={css.menuItem}>
        <Link
          href={`url до сторінки за відповідним тегом`}
          className={css.menuLink}
        >
          Назва тегу
        </Link>
      </li>
    </ul>
  );
};
