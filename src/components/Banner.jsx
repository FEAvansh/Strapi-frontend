import React from "react";
// import useFetch from "../hooks/useFetch";
import { useQuery, gql } from "@apollo/client";
import "../components/all.css";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useNavigate } from "react-router";

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
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(PAGES);
  console.log("DATA", data);
  //   // const { loading, error, data } = useFetch(
  //   //   "http://localhost:1337/api/reviews"
  //   // );

  if (loading) {
    return <p>Loading....</p>;
  }
  if (error) {
    return <p>error....</p>;
  }
  const Data = data?.pages?.data[0]?.attributes;
  const Data_one = data?.pages?.data[1]?.attributes;
  const Data_two = data?.pages?.data[2]?.attributes;

  // console.log(
  //   "Data: ",
  //   Data?.serviceList[0]?.ServiceComponent?.map((c) =>
  //     c.itemList?.map((l) => l)
  //   )
  // );

  return (
    <div class="jumbotron">
      {/* // */}
      <div>
        <div className="TopBox">
          <ReactMarkdown class="display-4">{Data.title}</ReactMarkdown>
          <button
            onClick={() => navigate("/banner_1")}
            type="button"
            class="btn btn-primary ButtonBox"
          >
           Techs
          </button>
        </div>
        <p class="lead">{Data?.description}</p>
        <hr class="my-4" />
        <div className="postionDiv">
          {Data?.serviceList[0]?.ServiceComponent?.map((c) => (
            <div className="cardView">
              <div class="card cardStyle">
                <img
                  src={c.image.data[0].attributes.url}
                  class="card-img-top imgClass"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title h5Class">{c.title}</h5>

                  {c.itemList.map((l, index) => (
                    <li class="card-text sideLi">{l}</li>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* // */}
      <div>
        <ReactMarkdown class="display-4">{Data_one.title}</ReactMarkdown>
        <p class="lead">{Data_one?.description}</p>
        <hr class="my-4" />
        <div className="postionDiv">
          {Data_one?.serviceList[0]?.ServiceComponent?.map((c) => (
            <div className="cardView">
              <div class="card cardStyle">
                <img
                  src={c.image.data[0].attributes.url}
                  class="card-img-top imgClass"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title h5Class">{c.title}</h5>

                  {c.itemList.map((l, index) => (
                    <li class="card-text sideLi">{l}</li>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* // */}
      <div>
        <ReactMarkdown class="display-4">{Data_two.title}</ReactMarkdown>
        <p class="lead">{Data_two?.description}</p>
        <hr class="my-4" />
        <div className="postionDiv">
          {Data_two?.serviceList[0]?.ServiceComponent?.map((c) => (
            <div className="cardView">
              <div class="card cardStyle">
                <img
                  src={c.image.data[0].attributes.url}
                  class="card-img-top imgClass"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title h5Class">{c.title}</h5>

                  {c.itemList.map((l, index) => (
                    <li class="card-text sideLi">{l}</li>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
