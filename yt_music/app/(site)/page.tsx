import Image from "next/image";
import Category from "./components/Category";

export default function Home() {
  return (
    <div className="min-h-[600px]">
      <div className="mt-9"></div>
      <Category />
    </div>
  );
}
