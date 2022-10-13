import React, { useEffect } from "react";
import "../components/all.css";
import { useQuery, gql } from "@apollo/client";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useState } from "react";
import { useNavigate } from "react-router";

const PAGES = gql`
  query GetPages {
    banners {
      data {
        id
        attributes {
          title
          Dynamic {
            ... on ComponentServiceProviderProvider {
              id
              name
              SubFields {
                id
                name
                image {
                  data {
                    attributes {
                      url
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

const Banner_1 = () => {
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(PAGES);
  const activeConst = data?.banners?.data[0].attributes?.Dynamic[0]?.id;
  const [active, setActive] = useState(
    activeConst === undefined ? "1" : activeConst
  );
  const [subField, setSubField] = useState(null);

  if (loading) {
    return <p>Loading....</p>;
  }
  if (error) {
    return <p>error....</p>;
  }

  const setInfoFunc = (id, data) => {
    setActive(id);
    setSubField(data);
  };

  return (
    <div className="BannerBoxDiv">
      <div class="jumbotron Jumbo">
        <div className="headerClass">
          <ReactMarkdown class="display-4">
            {data?.banners?.data[0]?.attributes?.title}
          </ReactMarkdown>
        </div>
        <div className="navDiv">
          {data?.banners.data[0].attributes?.Dynamic?.map((D) => (
            <>
              <div
                className={active === D.id ? "techInverse" : "techList"}
                onClick={() => setInfoFunc(D.id, D.SubFields)}
              >
                {D.name}
              </div>
            </>
          ))}
        </div>
        <hr class="my-4" />
        {subField === null ? (
          <div className="listClass" onClick={() => navigate("/")}>
            {data?.banners.data[0].attributes?.Dynamic[0]?.SubFields?.map(
              (V) => (
                <div className="listData">
                  <div className="ImgSetting">
                    <img
                      class="card-img-top cardImage"
                      src={V.image.data.attributes.url}
                      alt="Card image cap"
                    />
                  </div>
                  <div className="titleClass">
                    <p>{V.name}</p>
                  </div>
                </div>
              )
            )}
          </div>
        ) : (
          <div className="listClass">
            {subField?.map((V) => (
              <div className="listData" onClick={() => navigate("/")}>
                <div className="ImgSetting">
                  <img
                    class="card-img-top cardImage"
                    src={V.image.data.attributes.url}
                    alt="Card image cap"
                  />
                </div>
                <div className="titleClass">
                  <p>{V.name}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner_1;
