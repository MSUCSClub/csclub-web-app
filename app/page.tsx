import Image from "next/image";

export default function Home() {
  return (
    <div className="text-center my-8">
      <Image src="/CSimage.jpg" alt="CS Club" width={200} height={200} className="mx-auto" />
      <h1 className="text-5xl font-bold text-red mt-4">Welcome to the CS Club Website!</h1>
      <p className="mt-4 text-lg">
        Explore tutorials, play games, and learn about the CS Club.
      </p>
    </div>
  );
}