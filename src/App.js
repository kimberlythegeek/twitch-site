import React from 'react';
import './App.css';
import Header from './Header.js'
import ReactTwitchEmbedVideo from 'react-twitch-embed-video'

class App extends React.Component {

  state = {
    isLive: false
  }

  componentDidMount() {
    fetch('https://api.twitch.tv/helix/streams?user_id=36769016',
      {
        headers: {
        'Client-ID': 'tyms13crm70tx7nlmlf6eo8k41a1eq'
      }
    })
    .then(res => res.json())
    .then(response => console.log(JSON.stringify(response))
    .catch(error => console.error(error)));
  }

  streamIsLive() {
    fetch('https://api.twitch.tv/helix/streams?user_id=36769016',
      {
        headers: {
        'Client-ID': 'tyms13crm70tx7nlmlf6eo8k41a1eq'
      }
    })
    .then(res => res.json())
    .then(response => console.log(JSON.stringify(response))
    .catch(error => console.error(error)));

  }

  render() {
    return (
      <div className="App">
        <Header />
        <ReactTwitchEmbedVideo channel="kimberlythegeek" />
      </div>
    );
  }
}

export default App;
