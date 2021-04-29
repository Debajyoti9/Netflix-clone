import './App.css';
import Row from './Row';
import Banner from './Banner';
import requests from './request';
import Nav from './Nav';
function App() {
    return ( 
    <div className = "app" >
        <Nav/>
        <Banner movieURL={requests.fetchNetflixOriginals}/>
        <Row title="NETFLIX-ORIGINAL" fetchURL={requests.fetchNetflixOriginals} isLargeRow/>
        <Row title="TRENDING" fetchURL={requests.fetchTrending}/>
        <Row title="TOP-RATED" fetchURL={requests.fetchTopRated}/>
        <Row title="ACTION-MOVIES" fetchURL={requests.fetchActionMovies}/>
        <Row title="COMEDY-MOVIES" fetchURL={requests.fetchComedyMovies}/>
        <Row title="HORROR-MOVIES" fetchURL={requests.fetchHorrorMovies}/>
        <Row title="ROMANTIC-MOVIES" fetchURL={requests.fetchRomanceMovies}/>
        <Row title="DOCUMENTERY" fetchURL={requests.fetchDocumenteries}/>
        </div>
    );
}

export default App;