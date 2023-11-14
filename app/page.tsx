import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>TESTING</h1>
      <br />
      <Link href="/post">POSTING POST</Link>
      <br />
      <Link href="/albums">POSTING ALBUMS</Link>
    </>
  );
}
