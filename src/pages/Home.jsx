import React from 'react';
import '../styles/Home.css';
import starsImg from '../img/stars.png'
import moonImg from '../img/moon.png'
import mountainBehindImg from '../img/mountains_behind.png'
import mountainFrontImg from '../img/mountains_front.png'

const Home = () => {

    let stars = document.getElementById('stars')
    let moon = document.getElementById('moon')
    let mountains_behind = document.getElementById('mountains_behind')
    let text = document.getElementById('text')
    let btn = document.getElementById('btn')
    let mountains_front = document.getElementById('mountains_front')
    let header = document.querySelector('header');
    window.addEventListener('scroll', function () {
        let value = window.scrollY;
        if (stars && moon && mountains_front && mountains_behind && text && btn) {
            stars.style.left = value * .25 + 'px';
            moon.style.top = value * 1.05 + 'px';
            mountains_behind.style.top = value * 0.5 + 'px';
            mountains_front.style.top = value * 0 + 'px';
            text.style.marginRight = value * 4 + 'px';
            text.style.marginTop = value * 1.5 + 'px';
            btn.style.marginTop = value * 1.5 + 'px';
            header.style.top = value * 0.5 + 'px';
        }
    })

    return (
        <div>
            <header>
                <a href="#home" class="logo">tetromino</a>
                <ul>
                    <li><a href="#home" class="active">HOME</a></li>
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="#contact">CONTACT</a></li>

                </ul>
            </header>
            <section class="images">
                <img src={starsImg} alt="" id="stars" />
                <img src={moonImg} alt="" id="moon" />
                <img src={mountainBehindImg} alt="" id="mountains_behind" />
                <h2 id="text">Tetromino</h2>
                <a href="#" id="btn">EXPLORE</a>
                <img src={mountainFrontImg} alt="" id="mountains_front" />
            </section>
            <div class="sec">
                <h2>hello</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus architecto sequi repellat. Quo, esse molestias ad libero neque sapiente. Aliquam saepe magnam rerum, id excepturi molestias non. Deserunt repellendus numquam veniam libero magni dignissimos fugiat, minus in quidem iste quo est a odio tenetur commodi explicabo corporis sequi ut neque! <br /><br />

                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus architecto sequi repellat. Quo, esse molestias ad libero neque sapiente. Aliquam saepe magnam rerum, id excepturi molestias non. Deserunt repellendus numquam veniam libero magni dignissimos fugiat, minus in quidem iste quo est a odio tenetur commodi explicabo corporis sequi ut neque! <br /><br />

                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus architecto sequi repellat. Quo, esse molestias ad libero neque sapiente. Aliquam saepe magnam rerum, id excepturi molestias non. Deserunt repellendus numquam veniam libero magni dignissimos fugiat, minus in quidem iste quo est a odio tenetur commodi explicabo corporis sequi ut neque! <br /><br />

                </p>
            </div>
        </div>
    )
}

export default Home;
