import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { RECOMMEND_BUCKETS } from "@lib/buckets";
import Products from "../../components/Products";

const productBuckets = {
  a: [
    {
      id: 1,
      name: "Leather Long Wallet",
      color: "Natural",
      price: "$75",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg",
      imageAlt: "Hand stitched, orange leather long wallet.",
    },
    {
      id: 2,
      name: "Machined Pencil and Pen Set",
      color: "Black",
      price: "$70",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-03.jpg",
    },
  ],
  b: [
    {
      id: 3,
      name: "Mini-Sketchbooks",
      color: "Light Brown",
      price: "$27",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-04.jpg",
    },
    {
      id: 4,
      name: "Organizer Set",
      color: "Walnut",
      price: "$149",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-01.jpg",
    },
  ],
};

export default function Recommendations({ products }) {
  return <Products products={products} />;
}

export async function getStaticPaths() {
  return {
    paths: RECOMMEND_BUCKETS.map((bucket) => ({ params: { bucket } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const bucket = params.bucket;
  const products = productBuckets[bucket];
  return {
    props: {
      products,
    },
  };
}
