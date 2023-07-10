import React from "react";

function About() {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 mt-[8vh]">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800  pb-4">
            About Us
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600 ">
            In a small office tucked away, a team of music aficionados came
            together. Each member brought their unique skills and shared a
            common love for melodies. Day and night, they toiled, driven by a
            collective vision. Finally, their labor bore fruit—an extraordinary
            platform that resonated with the world, bringing harmony and joy to
            all who listened.
          </p>
        </div>
        <div className="w-full lg:w-8/12">
          <img
            className="w-full h-full"
            src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
            alt="A group of People"
          />
        </div>
      </div>
      <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800  pb-4">
            Our Story
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600 ">
            The talented team embarked on a remarkable journey to build a
            cutting-edge music platform. With passion and expertise, they
            crafted a seamless user experience, allowing music enthusiasts to
            explore, discover, and indulge in their favorite tunes. Their
            dedication to quality, innovation, and user satisfaction resulted in
            a captivating platform that revolutionized the way people listen to
            music, creating a harmonious haven for music lovers worldwide.
          </p>
        </div>
        <div className="w-full lg:w-8/12 lg:pt-8">
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
                alt="Alexa featured Image"
              />
              <img
                className="md:hidden block"
                src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
                alt="Alexa featured Image"
              />
              <p className="font-medium text-xl leading-5 text-gray-800  mt-4">
                Fares
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
                alt="Alexa featured Image"
              />
              <img
                className="md:hidden block"
                src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
                alt="Alexa featured Image"
              />
              <p className="font-medium text-xl leading-5 text-gray-800  mt-4">
                Amro
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
                alt="Alexa featured Image"
              />
              <img
                className="md:hidden block"
                src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
                alt="Alexa featured Image"
              />
              <p className="font-medium text-xl leading-5 text-gray-800  mt-4">
                Hind
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
                alt="Alexa featured Image"
              />
              <img
                className="md:hidden block"
                src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
                alt="Alexa featured Image"
              />
              <p className="font-medium text-xl leading-5 text-gray-800  mt-4">
                Amani
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
                alt="Olivia featured Image"
              />
              <img
                className="md:hidden block"
                src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
                alt="Olivia featured Image"
              />
              <p className="font-medium text-xl leading-5 text-gray-800  mt-4">
                Mufid
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
                alt="Liam featued Image"
              />
              <img
                className="md:hidden block"
                src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
                alt="Liam featued Image"
              />
              <p className="font-medium text-xl leading-5 text-gray-800  mt-4">
                Ahmad
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
                alt="Elijah featured image"
              />
              <img
                className="md:hidden block"
                src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
                alt="Elijah featured image"
              />
              <p className="font-medium text-xl leading-5 text-gray-800  mt-4">
                Wesam
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
