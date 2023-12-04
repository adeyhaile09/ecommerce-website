import Layout from '../../layouts/Main';
import Footer from '../components/footer/footer';
import Breadcrumb from '../components/breadcrumb/bread-crumb';
import ProductsFilter from '../components/products-filter/products-filter';
import ProductsContent from '../components/products-content/products-content';

const Products = () => (
  <Layout>
    <Breadcrumb />
    <section className="products-page">
      <div className="container">
        <ProductsFilter />
        <ProductsContent />
      </div>
    </section>
    <Footer />
  </Layout>
);

export default Products;
