import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaWhatsapp } from 'react-icons/fa';

const HeroSection = ({ ideabg6 }) => {
    const [videos, setVideos] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const res = await axios.get(
                    `https://youtube.googleapis.com/youtube/v3/search?channelId=UC3_NJf886Au6pj59s2I1Bvg&maxResults=10&type=video&part=snippet&videoDuration=long&order=date&key=AIzaSyCnY0bZ1c68Yw4f2s37QE-Xr-rRr5Kkvlc`
                );
                setVideos(res?.data?.items || []);
            } catch (error) {
                console.error('Error fetching YouTube videos:', error);
            }
        };
        fetchVideos();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
        }, 3000); // Change video every 3 seconds
        return () => clearInterval(interval);
    }, [videos]);

    if(videos.length===0) {return null }

    return (
        <div 
            className="w-full h-[300px] flex items-center justify-center relative overflow-hidden bg-cover bg-center" 
            style={{ backgroundImage: `url(${ideabg6})` }}
        >
            {videos.length > 0 && (
                <div className="flex w-full  absolute inset-0 transition-transform duration-1000 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {videos.map((video) => (
                        <a 
                            key={video.id.videoId} 
                            href={`https://www.youtube.com/watch?v=${video.id.videoId}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex-shrink-0 w-full  px-4 sm:px-24 py-10"
                        >
                            <img 
                                src={video.snippet.thumbnails.high.url} 
                                alt={video.snippet.title} 
                                className="w-full object-fill rounded-lg"
                            />
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default HeroSection;
