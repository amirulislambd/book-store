import bookImg from "../../assets/pngwing 1.png";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-[70vh] container py-10 mx-auto ">
      <div className="hero-content w-full flex-col lg:flex-row-reverse text-center lg:text-start justify-around">
        <img src={bookImg} />
        <div className="space-y-5 lg:space-y-12">
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold">
            Books to freshen up <br /> your bookshelf
          </h1>

          <button className="btn btn-success">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
