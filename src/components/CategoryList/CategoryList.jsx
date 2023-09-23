import { useEffect, useState } from "react";
import Category from "../Category/Category";


const CategoryList = () => {
    const [categories, setCategories] = useState([]);



    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])

    return (
        <div className="mb-20">
            <div>
                <h2 className="text-5xl text-center font-extrabold font-['Manrope']">Job Category List</h2>
                <p className="text-center text-base text-[#757575] font-['Manrope']">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div>
                <div className="grid grid-cols-4 gap-6 mt-8">
                    {
                        categories.map(category => <Category key={category.id} category={category}></Category>)

                    }
                </div>
            </div>
        </div>

        // category list card 

    );
};

export default CategoryList;