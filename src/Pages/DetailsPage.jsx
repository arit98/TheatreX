import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from "../hooks/useFetch"
import DetailsBanner from '../Components/DetailsBanner';

const DetailsPage = () => {
  const { mediaType, id } = useParams();
    const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
    const { data: credits, loading: creditsLoading } = useFetch(
        `/${mediaType}/${id}/credits`
    );
  return (
    <div>
       <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
       <div className='h-44'></div>
    </div>
  )
}

export default DetailsPage