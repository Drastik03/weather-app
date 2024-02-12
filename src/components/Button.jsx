// eslint-disable-next-line react/prop-types
export const Button = ({ children, searchLocation }) => {
  return (
    <section className="flex justify-center items-center mb-2 mx-auto mt-2">
      <button
        className="bg-blue-700 py-2 px-8 rounded-full text-white font-bold hover:bg-blue-500"
        onClick={searchLocation}
      >
        {children}
      </button>
    </section>
  );
};
