import Video from '../components/Video';
import Suggestion from '../components/Suggestion';

const Home = () => {
    return (
        <div className="home">

            <section className="suggestions-section">
                <div className="suggestions">
                    <Suggestion title='All' isActive={true} />
                    <Suggestion title='Suggestion 1' />
                    <Suggestion title='Suggestion 2' />
                    <Suggestion title='Suggestion 3' />
                    <Suggestion title='Suggestion 4' />
                    <Suggestion title='Suggestion 5' />
                    <Suggestion title='Suggestion 6' />
                    <Suggestion title='Suggestion 7' />
                    <Suggestion title='Suggestion 8' />
                    <Suggestion title='Suggestion 9' />
                    <Suggestion title='Suggestion 10' />
                    <Suggestion title='Suggestion 11' />
                    <Suggestion title='Suggestion 12' />
                    <Suggestion title='Suggestion 13' />
                    <Suggestion title='Suggestion 14' />
                </div>
            </section>

            <section className="videos-section">
                <div className="videos">
                    <Video />
                    <Video />
                    <Video />
                    <Video />
                    <Video />
                    <Video />
                    <Video />
                    <Video />
                    <Video />
                    <Video />
                    <Video />
                    <Video />
                    <Video />
                    <Video />
                    <Video />
                    <Video />
                    <Video />
                    <Video />
                    <Video />
                </div>
            </section>
        </div>
    )
}

export default Home;