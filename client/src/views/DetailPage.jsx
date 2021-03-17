import React from "react";
import { useParams } from "react-router-dom";
import { Dimmer, Loader } from "semantic-ui-react";
import { useQuery } from "@apollo/client";
import { GET_DETAIL_MOVIE, GET_DETAIL } from "../graphql/index";
import DetailItemMovie from "../components/DetailItem";

export default function DetailPage() {
  const { id } = useParams();
  const { loading, error, data: movie } = useQuery(GET_DETAIL_MOVIE, {
    variables: { id },
  });
  // eslint-disable-next-line
  const { loading: loadingSerie, error: errorSerie, data: detailItem } = useQuery(
    GET_DETAIL,
    {
      variables: { id },
    }
  );
  
  // console.log(detailItem.findMovie, "<<<<< dapet movie");
  // console.log(detailItem.findSerie, "<<<<< dapet serie");
  if (loading) {
    return (
      <Dimmer active>
        <Loader size="massive">Please wait...</Loader>
      </Dimmer>
    );
  } else if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <>
      <DetailItemMovie data={movie} />
    </>
  );
}
