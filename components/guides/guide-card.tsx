// Components
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface GuideCardProps {
  title: string;
  description: string;
  slug: string;
}

export function GuideCard({ description, title, slug }: GuideCardProps) {
  return (
    <Link href={"/" + slug}>
      <Card className="hover:cursor-pointer dark:hover:brightness-150 hover:shadow-custom-card duration-150 h-full">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{description}</CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}
