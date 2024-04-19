import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const LeftSideNav = () => {
    const [categories,setCategories]=useState([]);
    useEffect(()=>{
        fetch('/categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div className="space-y-6">
            <h2 className="text-2xl">All Categories:{categories.length}</h2>
            {
                categories.map(category=><NavLink
                to={`/category/:${category.id}`}
                    className="block text-center font-semibold"
                    key={category.id}>{category.name}</NavLink>)
            }
        </div>
    );
};

export default LeftSideNav;