import ProductShowcase from "../components/productshowcase";
const BestSellers = () => {
  return (
    <div className="mt-5">
      <section className="max-w-[85rem]   flex flex-col gap-y-8 md:flex-row items-center justify-around py-8 mx-auto">
        <div className="w-[250px] -ml-20 md:w-[300px] py-6 md:py-12 px-4 outline-red-400 outline-dashed outline-4 rounded-tr-[62px]">
          <h2 className="text-xl md:text-3xl leading-tight tracking-tighter font-bold text-gray-900">
            These are some of our <i className="text-4xl">"Best Sellers"</i>
          </h2>
        </div>
        <div className="w-[80%] md:max-w-[55rem]">
          <ProductShowcase />
        </div>
      </section>
    </div>
  );
};

export default BestSellers;
