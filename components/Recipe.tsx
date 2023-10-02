import { cn } from "lib";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import Like from "./LikeButton";
import Link from "next/link";

export default function Recipe({ recipe }) {
  return (
    <div className="flex px-2 py-4">
      <Card className={cn("w-[300px] transition-all cursor-pointer hover:bg-pink-50 border-red-200")} >
        <Link href={`/recipes/${recipe.id}`}>
          <CardHeader>
            <CardTitle>{recipe.title}</CardTitle>
            <CardDescription>{recipe.date}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-500">Description</p>
            <p>{recipe.detail}</p>
          </CardContent>
        </Link>
        <CardFooter className="felx-col justify-end">
          <div >
            <Like />
          </div>
        </CardFooter>
      </Card>
    </div >
  )
}
