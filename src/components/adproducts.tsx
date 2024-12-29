const AdProduct = () => {
  return (
    <div>
      <div className="max-w-[85rem] px-8 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
          <div>
            <img
              className="rounded-xl w-[500px]"
              src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
              alt="Features Image"
            />
          </div>

          <div className="mt-5 sm:mt-10 lg:mt-0">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-2 md:space-y-4">
                <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-neutral-200">
                  We tackle the challenges start-ups face
                </h2>
                <p className="text-gray-500 dark:text-neutral-500">
                  Besides working with start-up enterprises as a partner for
                  digitalization, we have built enterprise products for common
                  pain points that we have encountered in various products and
                  projects.
                </p>
              </div>
              <button>Veiw our products</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdProduct;
