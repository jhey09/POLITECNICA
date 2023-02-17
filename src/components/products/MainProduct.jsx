import Productos from "./Productos";
import TextosProd from "./TextosProd";

const MainProduct = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2">
      <Productos />
      <TextosProd />
    </main>
  );
};

export default MainProduct;
