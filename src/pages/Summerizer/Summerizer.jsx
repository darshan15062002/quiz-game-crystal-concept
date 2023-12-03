import React, { useState } from 'react';
import { getSummary } from '../../api/summeryApi';
import ideabg5 from '../../assets/ideabg5.png'
const Summarizer = () => {
    const [text, setText] = useState('');
    const [summary, setSummary] = useState('');
    // const [rows, setRows] = useState(5);
    const [loading, setLoading] = useState(false);

    const handleGenerate = async (e) => {

        e.preventDefault();
        // Assuming getSummary() is an asynchronous function
        setLoading(true);
        if (!text) {
            setLoading(false);
            alert("Please enter text")
        }

        text && await getSummary(text)



            .then((response) => {

                setSummary(response);

                setLoading(false);
            })
            .catch((error) => {
                console.error('Error generating summary:', error);
                setLoading(false);
            });
    };

    return (
        <div className="sm:px-16 text-black pt-28 px-8 flex lg:gap-10 gap-5 justify-between items-center flex-col">
            <div className="flex-col-reverse flex justify-between w-full gap-10 items-center">
                <div className="w-full h-40 shadow-lg">
                    <img className='w-full rounded-lg h-full object-cover' src={ideabg5} alt="" />
                </div>
                <div className="w-full">
                    <h1 className='font-bold text-2xl font-sans '>Answer Summarizer</h1>
                    <p>Explore our answer summarizer feature designed to provide concise and clear summaries for your text or documents. Whether you're reviewing notes, analyzing articles, or preparing for exams, our tool can help you quickly grasp key information. By leveraging advanced algorithms, it identifies and distills the most important details, making your reading and comprehension more efficient. Take advantage of our answer summarizer today to streamline your learning process and enhance your understanding of complex content!</p>

                </div>
            </div>
            <label className=' text-xl font-bold '>Enter Text Here:</label>
            <textarea
                className='block p-2.5  w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300'
                id="pdf_text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                name="pdf_text"
                rows="4"
                cols="50"
            />

            {/* <label htmlFor="rows">Enter No Rows:</label>
            <input value={rows} onChange={(e) => setRows(e.target.value)} className='block p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md' type="number" name="rows" /> */}


            <button onClick={handleGenerate} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Generate
                </span>
            </button>


            {loading ? (<div role="status">
                <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span class="sr-only">Loading...</span>
            </div>) : (
                <div className=' p-6 border border-gray-400 rounded-md mb-5' >
                    <h2>Summary:</h2>
                    <p class="mb-3 ">{summary}</p>
                </div>
            )}
        </div>
    );
};

export default Summarizer;
