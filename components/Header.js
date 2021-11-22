import Link from "next/link";

const nav = [
  { name: "Home", path: "/" },
  { name: "Recommendations", path: "/recommend" },
];

export default function Header() {
  return (
    <nav className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-lg font-medium space-x-2">
      {nav.map((nav) => {
        return (
          <Link href={nav.path} key={nav.name}>
            <a className="hover:underline">{nav.name}</a>
          </Link>
        );
      })}
    </nav>
  );
}
