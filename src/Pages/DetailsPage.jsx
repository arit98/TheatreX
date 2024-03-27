import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from "../hooks/useFetch"
import DetailsBanner from '../Components/DetailsBanner';
import CastSection from '../Components/CastSection';
import VideoSection from '../Components/VideoSection';
import SimilarSection from '../Components/SimilarSection';
import RecommendationSection from '../Components/RecommendationSection';

const DetailsPage = () => {
  const { mediaType, id } = useParams();
    const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
    const { data: credits, loading: creditsLoading } = useFetch(
        `/${mediaType}/${id}/credits`
    );
  return (
    <div>
       <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
       <CastSection data={credits?.cast} loading={creditsLoading} />
       <VideoSection data={data} loading={loading} />
       <SimilarSection mediaType={mediaType} id={id} />
       <RecommendationSection mediaType={mediaType} id={id} />
    </div>
  )
}

export default DetailsPage