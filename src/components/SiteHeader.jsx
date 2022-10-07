import React from "react";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const CATEGORIES = gql`
query GetCategories {
    categories{
      data{
        id,
        attributes{
          name
        }
      }
      
    }
  }

`;

const SiteHeader = () => {
  const { loading, error, data } = useQuery(CATEGORIES);
  console.log("category: ", data?.categories?.data);

  if (loading) {
    return <p>Loadig categories....</p>;
  }
  if (error) {
    return <p>error fetching categories ....</p>;
  }

  return (
    <div className="site-header">
      <Link to="/">
        <h1>Site-Header</h1>
      </Link>
      <nav className="categories">
        <span>Filter reviews by categories</span>
        {data?.categories?.data?.map((category) => (
          <Link key={category.id} to={`/category/${category.id}`}>
            {category?.attributes?.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default SiteHeader;
