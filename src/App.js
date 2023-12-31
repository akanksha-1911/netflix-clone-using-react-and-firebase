import logo from './logo.svg';
import './App.css';

function App() {
  return (
     //HeaderNav
     <div className="App">
     <Nav />
     <Banner />
     <Row 
     title = "NETFLIX ORIGINALS" 
     fetchUrl = {requests.fetchNetFlixOriginals}
     isLargeRow = {true}
     />
     <Row title = "Trending Now" fetchUrl = {requests.fetchTreding}/>
     <Row title = "Top Rated" fetchUrl = {requests.fetchTopRated}/>
     <Row title = "Action Movies" fetchUrl = {requests.fetchActionMovies}/>
     <Row title = "Horror Movies" fetchUrl = {requests.fetchHorroMovies}/>
     <Row title = "Romance Movies" fetchUrl = {requests.fetchRomanticMovies}/>
     <Row title = "Documentaries" fetchUrl = {requests.fetchDocumentaries}/>
 </div>
  );
}

export default App;
