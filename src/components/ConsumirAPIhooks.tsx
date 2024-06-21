import React from "react";
import useSWR from "swr";

const fetcher = (url:string) => fetch(url).then((res) => res.json());

export default function ConsumirAPIswr() {
  const { data, error, isLoading } = useSWR(
    'https://pokeapi.co/api/v2/pokemon/ditto',
    fetcher
  );

  if (error) return "Ocurrio un error";
  if (isLoading) return "Cargando...";

  return (
    <div>
      <h1>{data?.name}</h1>
      {/* <p>{data.description}</p> */}
    </div>
  );
}
