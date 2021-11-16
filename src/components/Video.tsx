const Video = () => {
    return (
        <article className="video">
            <a href="#" className="video__thumbnail" data-duration="12:24">
                <img className="video__thumbnail-image" src="http://unsplash.it/250/150?gravity=center" />
            </a>
            <div className="video__bottom-section">
                <a href="#">
                    <img className="video__channel-icon" src="http://unsplash.it/36/36?gravity=center" />
                </a>
                <div className="video__details">
                    <a href="#" className="video__title">Video Title</a>
                    <a href="#" className="video__channel-name">Channel Name</a>
                    <div className="video__metadata">
                        <span>12K views</span>
                        •
                        <span>1 week ago</span>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default Video;