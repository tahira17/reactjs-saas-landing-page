import React from "react";

const Information = () => {
  return (
    <div name="Information" className="w-full h-screen text-gray-900">
      <div className="flex flex-col justify-center items-center w-full h-full">
      
        <div className="w-3/4 grid sm:grid-cols-2 gap-8 px-4 ">
              {/* left section */}
          <div data-aos="zoom-in" className="items-center">

            <div className="mt-24 lg:m-auto lg:mt-12 lg:ml-10 lg:mr-10">
            <hr class="w-48 h-1 lg:w-48 lg:h-1 md:w-48 md:h-1 sm:w-48 sm:h-1 my-4 bg-purple-800 border-0 rounded md:my-10 " />
            <h4 className="text-4xl font-thin">Leading companies trust us </h4>
            <h5 className="text-4xl font-bold">to develop</h5>
            </div>
            <div className="text-block mt-0 lg:m-auto lg:ml-10 lg:mr-10 md:mt-2 md:ml-0 md:mr-8 sm:mt-0 sm:ml-0 sm:mr-0">
            <p className="pt-10 text-lg text-gray-400 font-thin ">
              {" "}
              we{" "}
              <span class="py-1 m-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                add development capacity{" "}
              </span>{" "}
              to tech teams. Our value isn't limited to building teams but its
              equality distributed across the project lifrcycle. We are a custom
              software development company that guarantees the successful
              delivery of your project.{" "}
            </p>
            </div>
          </div>

          {/* right section */}

          <div class="aspect-w-16 aspect-h-9 rounded-2xl lg:w-[440px] lg:h-[400px] md:w-[350px] md:h-[300px] sm:w-[250px] h-[250px] w-[300px] sm:h-[200px] lg:mt-10 lg:ml-10 md:my-auto md:ml-18 sm:my-auto sm:ml-0 relative border-2 mt-0 mr-16 ml-10">
            <iframe
          title="video"
              class=" rounded-2xl mb-10 shadow-2xl absolute top-0 left-0 w-[100%] h-[100%]"
              src="https://www.youtube.com/embed/Jj4sfry-wYw?controls=1&enablejsapi=1&showinfo=0"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
