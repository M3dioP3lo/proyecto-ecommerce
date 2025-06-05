import Navbar from './components/Navbar';
import Container from './components/Container';
import ProductCard from './components/ProductCard';
import { products } from './data/products';
import styles from './components/Container.module.css';

function App() {
  const categories = ['Lavado', 'Cocinas', 'Tecnologia', 'Smart Tv'];

  return (
    <div className="w-full max-w-screen-xl mx-auto p-4">
      <Navbar />
      {categories.map((cat) => (
        <Container key={cat}>
          <h1 className={styles.title}>{cat}</h1>
          <div className={styles.content}>
            {products
              .filter((p) => p.category === cat)
              .map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
          </div>
        </Container>
      ))}
    </div>
  );
}

export default App;
