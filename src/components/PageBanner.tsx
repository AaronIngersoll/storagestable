import Link from "next/link";

interface PageBannerProps {
  title: string;
}

export default function PageBanner({ title }: PageBannerProps) {
  return (
    <div
      className="bg-cover bg-center border-b"
      style={{ backgroundImage: "url('/images/wood_texture3850-1024x817.jpg')" }}
    >
      <div className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-neutral-800 drop-shadow-sm">{title}</h1>
        <div className="text-sm text-neutral-600">
          <Link href="/" className="hover:text-[#8b1a1a]">Home</Link>
          <span className="mx-2">&gt;</span>
          <span>{title}</span>
        </div>
      </div>
    </div>
  );
}
