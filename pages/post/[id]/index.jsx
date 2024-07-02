import MainLayout from "@/components/layout/MainLayout";
import { useRouter } from "next/router";

export default function PostPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <MainLayout>
        <h1>Post Page {id}</h1>
      </MainLayout>
    </>
  );
}
