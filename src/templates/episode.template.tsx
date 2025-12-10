import bannerHorizontal from '../imgs/banner-horizontal.png';

interface IEpisode {
    ep: string;
    title: string;
    body: string;
    day: string;
}

export default function EpisodeTemplate({ep, title, body, day}: IEpisode) {
    
    return (
        <>
            <div className='post-container episode'>

                <div className='hashtagh'>#</div>

                <div className='content'>
                    <div className="post-header-content">
                        <div className="label-header">
                            <p id='line-1'>Pauta  da</p> <br />
                            <p id='line-2'>SEMANA!</p>
                        </div>

                        <div className="post-main-content">
                            <div className="title-content">
                                <p>ep<span>{ep}</span></p>
                                
                                <div className="headline">
                                    <h2 className='headline-title'>{title}</h2>
                                    <p className='headline-body'>{body}</p>
                                </div>

                                <div className="date-label">
                                    <p>Quarta-Feira <span>{day}</span> às 20h</p>
                                    <p>No Youtube e Spotify</p>
                                </div>
                            </div>

                            <div className="post-footer-content">
                                <div className="post-footer-container">
                                    <figure>
                                        <img src={bannerHorizontal}></img>
                                    </figure>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}