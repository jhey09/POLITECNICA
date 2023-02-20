import Productos from "./Productos";
import TextosProd from "./TextosProd";

const MainProduct = () => {
  return (
    <main className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center ">
      <Productos />
      <TextosProd />
    </main>
  );
};

export default MainProduct;
