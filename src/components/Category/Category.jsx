const Category = ({ category }) => {

    const { id, logo, category_name, availability } = category;
    console.log(category)
    return (

        <div className="bg-[#7E90FE13] p-11 font-['Manrope']">
            <figure><img className="mb-6" src={logo} alt="" /></figure>
            <h2 className="text-xl font-extrabold">{category_name}</h2>
            <p className="text-[#A3A3A3]">{availability}</p>
        </div>

    );
};

export default Category;