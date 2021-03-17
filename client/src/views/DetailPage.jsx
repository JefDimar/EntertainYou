import React from "react";
import { useParams } from "react-router-dom";
import { Dimmer, Loader } from "semantic-ui-react";
import { useQuery } from "@apollo/client";
import { GET_DETAIL_MOVIE } from "../graphql/index";
import DetailItemMovie from "../components/DetailItem";

export default function DetailPage() {
  const { id } = useParams();
  const { loading, error, data: movie } = useQuery(GET_DETAIL_MOVIE, {
    variables: { id },
  });

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
