import React from "react";
// import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const REVIEWS = gql`
  query GetReviews {
    reviews {
      data {
        id
        attributes {
          rating
          title
          body
          categories {
            data {
              id
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;

const HomePage = () => {
  const { loading, error, data } = useQuery(REVIEWS);
  // const { loading, error, data } = useFetch(
  //   "http://localhost:1337/api/reviews"
  // );

  if (loading) {
    return <p>Loadig....</p>;
  }
  if (error) {
    return <p>error....</p>;
  }

  return (
    <div>
      {data?.reviews?.data?.map((review) => (
        <div key={review.id} className="review-card">
          <div className="rating">{review.attributes.rating}</div>
          <h2>{review.attributes.title}</h2>
          {review?.attributes?.categories?.data?.map((c) => (
            <small key={c.attributes.id}>{c.attributes.name}</small>
          ))}
          <p>{review.attributes.body.substring(0, 200)}...</p>
          <Link to={`/details/${review.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
