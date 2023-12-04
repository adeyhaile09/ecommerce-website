import ProductsCarousel from './carousel/carousel';
import useSwr from 'swr';
import Link from 'next/link';

const ProductsFeatured = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data } = useSwr('/api/products', fetcher);

  return (
    <section className="section section-products-featured">
      <div className="container">
        <header className="section-products-featured__header">
          <h3>Selected just for you</h3>
          <Link
            href="/products"
            passHref
            className="btn btn--rounded btn--border"
          >
            Show All
          </Link>
        </header>

        <ProductsCarousel products={data} />
      </div>
    </section>
  );
};

export default ProductsFeatured;