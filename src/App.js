import logo from './logo.svg';
import './App.css';

function App() {
    const images = [
    {
      name: 'instaslut1',
      imageUrl: 'https:gg.gg'
    },
    {
      name: 'instaslut2',
      imageUrl: 'https:gg.gg'
    },
    {
      name: 'instaslut3',
      imageUrl: 'https:gg.gg'
    },
    {
      name: 'instaslut4',
      imageUrl: 'https:gg.gg'
    }
  ]
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body>
      <div>
        <h1>
        wefwef
        </h1>
        
        <div>
          {images.map(img =>{
            return (
            <div className="img-container" >
              <img src={img.imageUrl} />
            </div>)
          })}
        </div>
      </div>
      </body>
    </div>
  );
}

export default App;
