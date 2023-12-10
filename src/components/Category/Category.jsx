import { useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import { useState, useEffect } from 'react';
import Products from '../Products/Products'
import "./Category.scss";
import ScaleLoader  from "react-spinners/ScaleLoader";
const Category = () => {
    const [loading, setloading] = useState(false);
    useEffect(() => {
        setloading(true)
        setTimeout(() => {
            setloading(false)
        }, 1000)
    }, [])
    const { id } = useParams();
    const { data } = useFetch(`/api/products?populate=*&[filters][categories][id]=${id}`);

    // Assuming there is a 'title' property in the 'data' object
    // const categoryTitle = data && data.title ? data.title : "Loading...";

    return (
        <>
        {loading?
            <div className='spinner'><ScaleLoader id='loadingbar' color="#ad45de"  loading={loading} size={"50"}  aria-label="Loading Spinner" data-testid="loader" /></div>
            :
            <div className="category-main-content">
                <div className="layout">
                    <div className="category-title">    
                    {data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes?.title}
                        {/* {`Category Title: ${categoryTitle}`} */}
                    </div>
                    <Products innerPage={true}  products={data}/>
                </div>
            </div>
        }
        </>
        );
};

export default Category;
