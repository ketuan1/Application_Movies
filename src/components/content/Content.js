import styled from "styled-components";
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const movies = [
    "https://m.media-amazon.com/images/I/61Fm+N+NncL._AC_SL1008_.jpg",
    "https://i.pinimg.com/originals/a9/c7/d3/a9c7d36b3aaee651d8f120257587e27b.jpg",
    "https://i.pinimg.com/originals/d9/b9/07/d9b9070c855d7c226c9a26a675c93142.jpg",
    "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547_screen.jpg?ts=1576732289",
    "http://cdn.shopify.com/s/files/1/0290/5663/0868/products/australianbackpacker999x666_1200x.jpg?v=1618847022",
    "https://3.bp.blogspot.com/-XU3gtu_wI6g/WpxBFPk1p0I/AAAAAAAACEw/0JoIwjhNmjs-JrTYJddrGaNL2o32M-WEgCLcBGAs/s1600/Screen%2BShot%2B2018-03-04%2Bat%2B18.53.17.png",
    "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/87108/88101/edge_of_tomorrow_regular_buy_original_movie_posters_at_starstills__48110.1400669257.jpg?c=2",
    "https://i.pinimg.com/originals/0f/b4/1f/0fb41ff936741bb71415352180b86611.jpg",
    "https://cdn.shopify.com/s/files/1/0747/3829/products/mL1755_1024x1024.jpg?v=1571445470",
    "https://i.pinimg.com/originals/6d/6a/6c/6d6a6c1cba5068c1626adedf00db5865.jpg",
    "https://www.discountdisplays.co.uk/our-blog/wp-content/uploads/tomb-raider-long-neck-691x1024.jpg",
];

function Content() {
    return ( 
        <MoviesRowContainer>
            <h1 className="heading">Netflix Origin</h1>
            <MoviesSlider>
                {
                    movies.map((movie, index) => {
                        return (
                            <div key={index} className='movie__item'>
                                <img src={movie} alt="" />
                                <div className='movie__name'>Movie Name</div>
                           </div>
                       )
                   })
                }
            </MoviesSlider>
            <div className="btn__left">
                <AiOutlineLeft />
            </div>
            <div className="btn__right">
                <AiOutlineRight />
            </div>
        </MoviesRowContainer>
     );
}

export default Content;

const MoviesRowContainer = styled.div`
    background-color: var(--color--background);
    color: var(--color-white);
    padding: 20px 20px 0;
    position: relative;
    width: 100%;
    height: 100%;

    .heading {
        font-size: 18px;
        user-select: none;
    }

    .btn__left {
        position: absolute;
        top: 50%;
        left: 30px;
        z-index: 20;
        transform-origin: center;
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.5);
        height: 100px;
        width: 50px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        transform: translateY(-20%);

        &:hover {
            background-color: rgba(0, 0, 0, 0.8);
        } 

        &:hover svg {
            opacity: 1;
            transform: scale(1.2);
        }

        svg {
            opacity: 0.7;
            font-size: 50px;
            transition: all 0.3s linear;
        }
    }

    .btn__right {
        position: absolute;
        top: 50%;
        right: 30px;
        z-index: 20;
        transform-origin: center;
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.5);
        height: 100px;
        width: 50px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        transform: translateY(-20%);

        &:hover {
            background-color: rgba(0, 0, 0, 0.8);
        } 

        &:hover svg {
            opacity: 1;
            transform: scale(1.2);
        }

        svg {
            opacity: 0.7;
            font-size: 50px;
            transition: all 0.3s linear;
        }
    }
`;

const MoviesSlider = styled.div`
    display: grid;
    gap: 6px;
    grid-template-columns: repeat(${movies.length}, 300px);
    transition: all 0.3s linear;
    user-select: none;
    overflowY: hidden;
    overflowX: auto;
    overflow: hidden;
    padding-top: 28px;
    padding-bottom: 28px;
    scroll-behavior: smooth;

    &:hover .movie__item {
        opacity: 0.5;
    }

    .movie__item {
        transform: scale(1);
        max-width: 400px;
        max-height: 500px;
        width: 100%;
        height: 100%;
        transition: all 0.3s linear;
        user-select: none;
        overflow: hidden;
        border-radius: 6px;
        transform: center left;
        position: relative;

        &:hover {
            opacity: 1;
            transform: scale(1);
        }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }   
    .movie__name {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
    }
    }
`;
