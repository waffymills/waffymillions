import logo from './logo.svg';
import './App.css';

function App() {
    const images = [
    {
      name: 'model1',
      imageUrl: 'https://images.squarespace-cdn.com/content/v1/600ded4a2c69ea16574d48c5/1611658633431-O9XIOE7IIJZ0JZZM2URH/ke17ZwdGBToddI8pDm48kMXRibDYMhUiookWqwUxEZ97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0luUmcNM2NMBIHLdYyXL-Jww_XBra4mrrAHD6FMA3bNKOBm5vyMDUBjVQdcIrt03OQ/IMG_7804.jpg'
    },
    {
      name: 'model2',
      imageUrl: 'https://images.squarespace-cdn.com/content/v1/600ded4a2c69ea16574d48c5/1611540128883-R6UP1VSVFXEYI7A4VQTE/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/IMG_6923-d.jpg?format=1000w'
    },
    {
      name: 'model3',
      imageUrl: 'https://images.squarespace-cdn.com/content/v1/600ded4a2c69ea16574d48c5/1611655653361-E9T02S13LEATO7EHQAZR/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/IMG_7463.jpg?format=1000w'
    },
    {
      name: 'model4',
      imageUrl: 'https://images.squarespace-cdn.com/content/v1/600ded4a2c69ea16574d48c5/1611548878888-70PN3IEHNQGK8F0IR8TM/ke17ZwdGBToddI8pDm48kB-EZ_SAtRHqSoQGq_mKxlZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmmbLecD_NwfjqNxjfNDWHyP_zK3hrU4izrTKXHIOTklRxzSwXU4R36-j_aCjTL0-c/IMG_6999-final.jpg?format=1000w'
    },
    {
      name: 'model4',
      imageUrl: 'https://images.squarespace-cdn.com/content/v1/600ded4a2c69ea16574d48c5/1611548878888-70PN3IEHNQGK8F0IR8TM/ke17ZwdGBToddI8pDm48kB-EZ_SAtRHqSoQGq_mKxlZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmmbLecD_NwfjqNxjfNDWHyP_zK3hrU4izrTKXHIOTklRxzSwXU4R36-j_aCjTL0-c/IMG_6999-final.jpg?format=1000w'
    },
  ]
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body>
      <div>
        <h1>
        Waffy Millions
        </h1>

        
        <div>
            <div className="image-row-container">
                {images.map(img => {
                  return (
                    <div className="image-container">
                      <img className="image-item" src={img.imageUrl} rounded xs={3} md={2}/>
                      {img.name}
                    </div>
                  )
                })}
            </div>
          </div>
      </div>
      </body>
    </div>
  );
}

export default App;
