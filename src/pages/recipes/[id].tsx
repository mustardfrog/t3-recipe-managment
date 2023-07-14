import Link from "next/link";
import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();
  
  return (
  <div>
      Detail of Recipe
      <h1 className="flex justify-center">{router.query.id}</h1>
      <Link href='/recipes'>
      <h1>
      Back to Recipes
      </h1>
      </Link>
  </div>
  )
}
