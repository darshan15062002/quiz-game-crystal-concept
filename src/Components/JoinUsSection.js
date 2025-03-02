import { BsYoutube } from 'react-icons/bs';
import { FaPaperPlane, FaNewspaper, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const JoinUsSection = () => {
    const platforms = [
        { 
            name: 'Youtube', 
            url: 'https://www.youtube.com/channel/UC3_NJf886Au6pj59s2I1Bvg', 
            icon: <BsYoutube size={40} />, 
            bgColor: 'bg-red-500', 
            textColor: 'text-white',
            description: 'Join Youtube'
        },
        { 
            name: 'Telegram', 
            url: 'https://t.me/crystalconcept_shubhamchatrawat', 
            icon: <FaPaperPlane size={40} />, 
            bgColor: 'bg-blue-400', 
            textColor: 'text-white',
            description: 'Join Telegram'
        },
        { 
            name: 'Exam Prep', 
            url: 'https://www.youtube.com/@crystalconceptshubham/playlists', 
            icon: <FaNewspaper size={40} />, 
            bgColor: 'bg-purple-500', 
            textColor: 'text-white',
            description: 'Exam Preparation'
        },
        { 
            name: 'Instagram', 
            url: 'https://instagram.com/crystalconcept', 
            icon: <FaInstagram size={40} />, 
            bgColor: 'bg-pink-600', 
            textColor: 'text-white',
            description: 'Follow Us'
        },
        { 
            name: 'WhatsApp', 
            url: 'https://wa.me/918830979037', 
            icon: <FaWhatsapp size={40} />, 
            bgColor: 'bg-green-500', 
            textColor: 'text-white',
            description: 'Chat With Us'
        }
    ];

    return (
        <section className="py-12 w-full bg-gray-100">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-[#212b60] border-b-4 inline-block pb-2 border-[#EB676A]">
                    Join Us
                </h1>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
                {platforms.map((platform) => (
                    <a 
                        key={platform.name} 
                        href={platform.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`flex flex-col items-center justify-center w-40 h-40 sm:w-52 sm:h-52 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${platform.bgColor}`}
                    >
                        <div className="mb-2">
                            {platform.icon}
                        </div>
                        <h1 className={`text-lg font-bold ${platform.textColor}`}>{platform.name}</h1>
                        <span className={`text-sm ${platform.textColor}`}>{platform.description}</span>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default JoinUsSection;
