import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const CATEGORY = gql`
  query GetCategory($id: ID!) {
    category(id: $id) {
      data {
        id
        attributes {
          name
          reviews {
            data {
              id
              attributes {
                title
                body
                rating
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
      }
    }
  }
`;

const Category = () => {
  const { id } = useParams();

  const { loading, error, data } = useQuery(CATEGORY, {
    variables: { id: id },
  });

  const response = data?.category?.data?.attributes || [];

  if (loading) {
    return <p>Loadig....</p>;
  }
  if (error) {
    return <p>error....</p>;
  }

  return (
    <div>
      <h2>{data?.category?.data?.attributes?.name}</h2>
      {/* {response?.reviews?.data?.map((review) => (

      ))} */}
      {response?.reviews?.data?.map((review) => (
        <div key={review.attributes.id} className="review-card">
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
export default Category;
