import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import list from "../../public/list.json";
import Cards from "../components/Cards";
import { Link } from "react-router-dom";

function Courses() {
  console.log(list);
  return (
    <>
      <div>
        <Navbar />
        <div className="min-h-screen">
          <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
            <div className="items-center justify-center text-center">
              <h1 className="text-2xl md:text-4xl">
                <br />
                  <br />
                We're delighted to have{" "}
                <span className="text-pink-500">you here ! :)</span>
              </h1>
              <p className="mt-12">
                Explore worlds beyond your imagination with our curated
                collection of books. From timeless classics to thrilling
                contemporary reads, immerse yourself in captivating stories,
                insightful non-fiction, and thought-provoking literature.
                Discover your next literary adventure with us
              </p>
              <Link to="/">
                <button className=" mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
                  Back
                </button>
              </Link>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
              {list.map((item) => (
                <Cards key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Courses;
