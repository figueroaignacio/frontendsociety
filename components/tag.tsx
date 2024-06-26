// Components
import { LinkWithTransition } from "./link-with-transition";
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
    <LinkWithTransition
      className={badgeVariants({
        variant: current ? "default" : "chip",
        className: "no-underline rounded-md duration-100",
      })}
      href={`/categories/${slug(tag)}`}
    >
      {tag} {count ? `(${count})` : null}
    </LinkWithTransition>
  );
}
