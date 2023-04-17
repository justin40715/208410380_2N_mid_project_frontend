import { useState,useEffect } from 'react';
import axios from 'axios';
import Wrapper from '../assets/wrapper/Cards_80';
import { useCardContext_80 } from '../context/CardContext';
// let api_url = `https://mid-project-backend.onrender.com/api/card2_80`;

const CardNodeServerPage_80 = () => {
    const {name, id, data} = useCardContext_80();
    // const [name, setName] = useState('Pocheng Chu');
    // const [id, setId] = useState('208410380');

    // const [data, setData] = useState([]);
    // console.log('card data', data);

    // const fetchCardDataFromServer = async () => {
    //     try {
    //         const results = await axios.get(api_url);
    //         console.log('results', results);
    //         setData(results.data);
    //       } catch (error) {
    //         console.log(error);
    //       }
    //   };
    //   useEffect(() => {
    //     fetchCardDataFromServer();
    //   }, []);

    return (
        <Wrapper>  
            <div className="section-title">
                <h2>Fetch Cards Node Server</h2>
                <h3>{name} {id}</h3>
            </div>
            <section className="articles">
                {data.map((item) => {
                    const { id, img, title, descr } = item;
                    return (
                        <article key={id} >
                            <div className="article-wrapper">
                                <figure>
                                    <img src={img} alt="" />
                                </figure>
                                <div className="article-body">
                                    <h2>{title}</h2>
                                    <p>
                                        {descr}
                                    </p>
                                    <a href="#" className="read-more">
                                        Read more <span className="sr-only">about this is some title</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </article>
                    )
                })}

            </section>
        </Wrapper>
    )
}

export default CardNodeServerPage_80;