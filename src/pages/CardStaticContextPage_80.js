import { useState } from 'react';

import Wrapper from '../assets/wrapper/Cards_80';
import { useCardContext_80 } from '../context/CardContext';
const CardLocalJsonPage_80 = () => {
  const {name, id, data} = useCardContext_80();
  // const [name, setName] = useState('Pocheng Chu');
  // const [id, setId] = useState('208410380');

  return (
    <Wrapper>
      <div className='section-title'>
        <h2>Fetch Cards from Static</h2>
        <h3>
          {name} {id}
        </h3>
      </div>
      <section class='articles'>
        <article>
          <div class='article-wrapper'>
            <figure>
              <img
                src='https://fastly.picsum.photos/id/1011/800/450.jpg?hmac=AcIOjTIwzVkiq83Iq7b-fjWHV-BqPtti93tGef3D48A'
                alt=''
              />
            </figure>
            <div class='article-body'>
              <h2>Boating</h2>
              <p>
                Curabitur convallis ac quam vitae laoreet. Nulla mauris ante,
                euismod sed lacus sit amet, congue bibendum eros. Etiam mattis
                lobortis porta. Vestibulum ultrices iaculis enim imperdiet
                egestas.
              </p>
              <a href='#' class='read-more'>
                Read more <span class='sr-only'>about this is some title</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='icon'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fill-rule='evenodd'
                    d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                    clip-rule='evenodd'
                  />
                </svg>
              </a>
            </div>
          </div>
        </article>
        <article>
          <div class='article-wrapper'>
            <figure>
              <img
                src='https://as1.ftcdn.net/v2/jpg/02/49/60/72/1000_F_249607296_uUC1y1aED5clDH8j0v4kyZplTRlMCQdw.jpg'
                alt=''
              />
            </figure>
            <div class='article-body'>
              <h2>Overlooks the sea</h2>
              <p>
                Curabitur convallis ac quam vitae laoreet. Nulla mauris ante,
                euismod sed lacus sit amet, congue bibendum eros. Etiam mattis
                lobortis porta. Vestibulum ultrices iaculis enim imperdiet
                egestas.
              </p>
              <a href='#' class='read-more'>
                Read more <span class='sr-only'>about this is some title</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='icon'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fill-rule='evenodd'
                    d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                    clip-rule='evenodd'
                  />
                </svg>
              </a>
            </div>
          </div>
        </article>
        <article>
          <div class='article-wrapper'>
            <figure>
              <img
                src='https://c8.alamy.com/zooms/9/da78a796123e46b1be1ccad1df421e6a/e82ct6.jpg'
                alt=''
              />
            </figure>
            <div class='article-body'>
              <h2>Lying on the plain</h2>
              <p>
                Curabitur convallis ac quam vitae laoreet. Nulla mauris ante,
                euismod sed lacus sit amet, congue bibendum eros. Etiam mattis
                lobortis porta. Vestibulum ultrices iaculis enim imperdiet
                egestas.
              </p>
              <a href='#' class='read-more'>
                Read more <span class='sr-only'>about this is some title</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='icon'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fill-rule='evenodd'
                    d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                    clip-rule='evenodd'
                  />
                </svg>
              </a>
            </div>
          </div>
        </article>
        <article>
          <div class='article-wrapper'>
            <figure>
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/6/62/%E8%87%BA%E6%B1%9F%E5%9C%8B%E5%AE%B6%E5%85%AC%E5%9C%92_%E9%A0%82%E9%A0%AD%E9%A1%8D%E6%B2%99%E6%B4%B2.jpg'
                alt=''
              />
            </figure>
            <div class='article-body'>
              <h2>Desert</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <a href='#' class='read-more'>
                Read more <span class='sr-only'>about this is some title</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='icon'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fill-rule='evenodd'
                    d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                    clip-rule='evenodd'
                  />
                </svg>
              </a>
            </div>
          </div>
        </article>
        <article>
          <div class='article-wrapper'>
            <figure>
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/View_towards_the_sea_from_the_coastal_path_on_Guanyinbi.jpg/640px-View_towards_the_sea_from_the_coastal_path_on_Guanyinbi.jpg'
                alt=''
              />
            </figure>
            <div class='article-body'>
              <h2>Seaside</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <a href='#' class='read-more'>
                Read more <span class='sr-only'>about this is some title</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='icon'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fill-rule='evenodd'
                    d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                    clip-rule='evenodd'
                  />
                </svg>
              </a>
            </div>
          </div>
        </article>
        <article>
          <div class='article-wrapper'>
            <figure>
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Taroko_National_Park_20150125.jpg/640px-Taroko_National_Park_20150125.jpg'
                alt=''
              />
            </figure>
            <div class='article-body'>
              <h2>Taroko</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <a href='#' class='read-more'>
                Read more <span class='sr-only'>about this is some title</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='icon'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fill-rule='evenodd'
                    d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                    clip-rule='evenodd'
                  />
                </svg>
              </a>
            </div>
          </div>
        </article>
      </section>
    </Wrapper>
  );
};

export default CardLocalJsonPage_80;
