import React from "react";
// import useFetch from "../hooks/useFetch";
import { useQuery, gql } from "@apollo/client";
import "../components/all.css";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

// const REVIEWS = gql`
//   query GetReviews {
//     reviews {
//       data {
//         id
//         attributes {
//           rating
//           title
//           body
//           categories {
//             data {
//               id
//               attributes {
//                 name
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;

const PAGES = gql`
  query GetPages {
    pages {
      data {
        id
        attributes {
          title
          description
          ... on Page {
            serviceList {
              ... on ComponentPagesPages {
                ServiceComponent {
                  image {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                  title
                  itemList
                }
              }
            }
          }
        }
      }
    }
  }
`;

const Banner = () => {
  const { loading, error, data } = useQuery(PAGES);
  //   // const { loading, error, data } = useFetch(
  //   //   "http://localhost:1337/api/reviews"
  //   // );

  if (loading) {
    return <p>Loading....</p>;
  }
  if (error) {
    return <p>error....</p>;
  }
  //   console.log("data: ", data?.pages?.data[0]?.attributes);
  const Data = data?.pages?.data[0]?.attributes;
  console.log(
    "Data: ",
    Data?.serviceList[0]?.ServiceComponent?.map((c) =>
      c.itemList?.map((l) => l)
    )
  );

  return (
    <div class="jumbotron">
      <h1 class="display-4">
        {" "}
        {Data?.title}
        {/* <ReactMarkdown> {Data?.title}</ReactMarkdown> */}
      </h1>
      <ReactMarkdown>{Data.title}</ReactMarkdown>
      <p class="lead">{Data?.description}</p>
      <hr class="my-4" />
      <div className="postionDiv">
        {Data?.serviceList[0]?.ServiceComponent?.map((c) => (
          <div className="cardView">
            <div class="card cardStyle">
              <img
                // src={`https://admin-cms.herokuapp.com${c.image.data[0].attributes.url}`}
                src={c.image.data[0].attributes.url}
                class="card-img-top imgClass"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title h5Class">{c.title}</h5>

                {c.itemList.map((l, index) => (
                  <li class="card-text sideLi">{l}</li>
                ))}
                {/* <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p> */}
                {/* <a href="#" class="btn btn-primary">
                  LINK 
                </a> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <p class="lead">
      <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </p> */}
    </div>
  );
};

export default Banner;
