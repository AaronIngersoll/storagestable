import Link from "next/link";

interface PageBannerProps {
  title: string;
}

export default function PageBanner({ title }: PageBannerProps) {
  return (
    <div className="bg-gray-100 border-b">
      <div className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
        <div className="text-sm text-gray-500">
          <Link href="/" className="hover:text-stable-red">Home</Link>
          <span className="mx-2">&gt;</span>
          <span>{title}</span>
        </div>
      </div>
    </div>
  );
}
