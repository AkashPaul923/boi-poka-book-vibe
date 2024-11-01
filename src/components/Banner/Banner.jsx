import bannerImg from "../../assets/books.jpg"

const Banner = () => {
  return (
    <div className="hero bg-base-200 rounded-3xl p-8 md:p-16 lg:p-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={bannerImg} className="md:max-w-md rounded-lg shadow-2xl"/>
            <div>
                <h1 className="text-3xl md:text-5xl font-bold mb-12">Books to freshen up your bookshelf</h1>
                <button className="btn md:btn-lg text-xl font-bold text-white bg-[#23be0a]">View The List</button>
            </div>
        </div>
    </div>
  );
};

export default Banner;
