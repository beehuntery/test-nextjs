import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Link href="/">Homeへ</Link>
      <Image className="rounded-full" src="/profile/profile.png" alt="プロフィール画像" width={200} height={200} />
      <div>こんにちは！<br />
      現在 Next.js を中心にフロントエンド開発を勉強中です。</div>
    </div>
  );
}
