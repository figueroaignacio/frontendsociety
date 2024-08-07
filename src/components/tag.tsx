// Components
import Link from "next/link";
import { badgeVariants } from "./ui/badge";

// Utils
import { slug } from "github-slugger";

interface TagProps {
  tag: string;
  current?: boolean;
  count?: number;
}

export function Tag({ tag, count, current }: TagProps) {
  return (
    <Link
      className={badgeVariants({
        variant: current ? "default" : "tag",
        className: "no-underline rounded-md duration-100",
      })}
      href={`/categories/${slug(tag)}`}
    >
      {tag} {count ? `(${count})` : null}
    </Link>
  );
}
