import { useState } from "react";
import "./Search.scss";
import { MdClose } from "react-icons/md";
import useFetch from "../../Hooks/useFetch";
import { useNavigate } from "react-router-dom";
const Search = ({ setshowSearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const onChange = (e) => {
    setQuery(e.target.value);
  };
  let { data } = useFetch(
    `/api/products?populate=*&filters[title][$contains]=${query}`
  );
  if (!query.length) {
    data = null;
  }
  return (
    <div className="search-model">
      <div className="form-field">
        <input autoFocus placeholder="Search for products" 
          value={query}
          onChange={onChange}
        type="text" />
        <MdClose
          onClick={() => setshowSearch(false)}
          style={{ cursor: "pointer" }}
        
        />
      </div>
      <div className="search-result-content">
        <div className="search-result">
          {data?.data?.map((item) => (
            <div key={item.id} className="search-result-items" onClick={()=>{
              navigate('/product/'+item.id)
              setshowSearch(false)
            }
            }>
              <div className="img-container">
              <img src={process.env.REACT_APP_DEV_URL + item.attributes.img?.data?.[0]?.attributes?.url} alt="" />
              </div>
              <div className="product-details">
                <span className="name">{item.attributes.title}</span>
                <span className="desc">{item.attributes.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
