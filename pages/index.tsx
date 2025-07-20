import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { PropertyProps } from "@/interfaces";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-64 text-white flex flex-col justify-center items-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')`,
        }}
      >
        <h1 className="text-3xl font-bold">Find your favorite place here!</h1>
        <p className="text-lg mt-2">
          The best prices for over 2 million properties worldwide.
        </p>
      </section>
