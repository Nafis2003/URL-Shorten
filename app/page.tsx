import Footer from "@/components/Footer";
import URLForm from "@/components/URLForm";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4">
      <URLForm />
      <Footer/>
    </main>
  );
}
