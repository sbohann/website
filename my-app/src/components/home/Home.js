import './Home.css';

function Home() {
    return ( 
        <div class='home-main-div'>
            <img src={require('./images/test-photo.jpg')} alt='Home' class='home-background-img'></img>
        </div>
    );
}

export default Home;