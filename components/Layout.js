import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header></Header>
      <main className=" mx-auto px-4 sm:px-6 lg:px-8 ">{children}</main>
    </>
  );
}
