import React, { useState } from "react";
import useFetch from "./useFetch";
import Items from "./Items";
import NavbarProduct from "./NavbarProduct";

const ProductList = () => {
  // const [products, setProducts] = useState([]);
  const url = "https://fakestoreapi.com/products";
  const res = useFetch(url);
  // setProducts(res);

  const [query, setQuery] = useState("");
  const [sort, setSort] = useState({ sort: false });

  // const demo = [
  //   { name: "suraj", id: 1 },
  //   { name: "akash", id: 2 },
  //   { name: "vivek", id: 3 },
  // ];
  // console.log(demo);
  // const demo2 = demo.sort((a, b) => {
  //   if (a.name < b.name) {
  //     return -1;
  //   }
  //   if (a.name > b.name) {
  //     return 1;
  //   }
  //   return 0;
  // });
  // console.log("demo2 - ", demo2);

  const handleCallback = (childData) => {
    setQuery(childData);
  };

  const handleSortCallback = (childData) => {
    setSort({ sort: true, ...childData });
    console.log("sort - ", sort);
  };

  const filteredData = res.filter(({ title }) =>
    title.toLowerCase().includes(query.toLowerCase())
  );

  let products = [];
  if (query.length > 2) {
    products = filteredData;
  } else {
    products = res;
  }

  if (sort.sort && sort.asc === true) {
    console.log("asc - ");
    products = products.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });
  }

  if (sort.sort && sort.asc === false) {
    console.log("dsc - ");
    products = products.sort((a, b) => {
      if (a.title < b.title) {
        return 1;
      }
      if (a.title > b.title) {
        return -1;
      }
      return 0;
    });
  }

  console.log(filteredData);
  return (
    <>
      <NavbarProduct
        isSearch={true}
        handleCallback={handleCallback}
        handleSortCallback={handleSortCallback}
      />
      <div className="product-container" style={{ marginTop: "20px" }}>
        <Items data={products} />
      </div>
    </>
  );
};

export default ProductList;
