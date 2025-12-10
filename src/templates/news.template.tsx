import React from 'react';
import './news.template.css'
import bannerHorizonal from '../imgs/banner-horizontal.png'

interface News {
    headline: string;
    subHeadline: string;
    bodyText: string;
    bg: string | null;
}

export default function NewsTemplate({headline, subHeadline, bodyText, bg}: News) {

    const backgroundStyle = bg 
        ? `url(${bg})` 
        : 'none'; 

    return (
        <>
            <div 
                className="post-container" 
                style={{
                    backgroundImage: backgroundStyle,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }} 
            >
                <div className="background-gradient"></div>

                <div className="content">
                    <div className="post-header-content">
                        <div className='label-header'>NOTÍCIA</div>
                    </div>

                    <div className="post-main-content">
                        <div className="title-content">
                            <h1>{headline}</h1>
                            <h4>{subHeadline}</h4>
                        </div>
                        <p>{bodyText}</p>
                    </div>

                    <div className="post-footer-content">
                        <div className="post-footer-container">
                            <figure>
                                <img src={bannerHorizonal} alt="" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}