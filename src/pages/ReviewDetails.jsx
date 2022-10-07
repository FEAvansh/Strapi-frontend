import React from "react";
import { useParams } from "react-router";
// import useFetch from "../hooks/useFetch";
import { useQuery, gql } from "@apollo/client";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const REVIEW = gql`
  query GetReview($id: ID!) {
    review(id: $id) {
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

const ReviewDetails = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(REVIEW, {
    variables: { id: id },
  });
  console.log("REVIEW", data?.review?.data);

  // const { loading, error, data } = useFetch(
  //   `http://localhost:1337/api/reviews/ ${id}`
  // );

  if (loading) {
    return <p>Loadig....</p>;
  }
  if (error) {
    return <p>error....</p>;
  }

  return (
    <div className="review-card">
      <div className="rating">{data?.review?.data?.attributes.rating}</div>
      <h2>{data?.review?.data?.attributes.title}</h2>
      {data?.review?.data?.attributes?.categories?.data?.map((c) => (
        <small key={c.id}>{c.attributes.name}</small>
      ))}
      <ReactMarkdown>{data?.review?.data?.attributes.body}</ReactMarkdown>
    </div>
  );
};

export default ReviewDetails;
