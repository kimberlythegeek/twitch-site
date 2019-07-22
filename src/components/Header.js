import React from 'react'
import PropTypes from 'prop-types'
import Twitch from '../assets/js/twitch-embed'

const TwitchLiveStream = () => {
    Twitch.Embed("twitch-embed", {
        width: 600,
        height: 400,
        layout: video,
        channel: "kimberlythegeek"
        });
}

class Header extends React.Component {

    componentDidMount() {
        // axios.get("https://api.twitch.tv/helix/streams?user_id=kimberlythegeek")
        //     .then((response) => {
        //         console.log(response)
        //     })
        //     .catch(error => console.log(error))


        // fetch("https://api.twitch.tv/helix/streams?user_id=kimberlythegeek&callback=?", {
        //     headers: {
        //         'Client-ID': 'tyms13crm70tx7nlmlf6eo8k41a1eq'
        //     }
        // })
        //     .then((response) => {
        //         console.log(response)
        //     })
        //     .catch(error => console.log(error))
        new Twitch.Embed("twitch-embed", {
            width: 854,
            height: 480,
            channel: "monstercat"
          });
    }

    render() {
        return (
        <header id="header" style={this.props.timeout ? {display: 'none'} : {}}>
            <div className="logo text-center"><h1>kimberlythegeek</h1></div>
            <div className="content">
                <div className="inner">
                    <TwitchLiveStream />
                </div>
            </div>
            <nav>
                <ul>
                    <li><a href="javascript:;" onClick={() => {this.props.onOpenArticle('intro')}}>Intro</a></li>
                    <li><a href="javascript:;" onClick={() => {this.props.onOpenArticle('work')}}>Work</a></li>
                    <li><a href="javascript:;" onClick={() => {this.props.onOpenArticle('about')}}>About</a></li>
                    <li><a href="javascript:;" onClick={() => {this.props.onOpenArticle('contact')}}>Contact</a></li>
                </ul>
            </nav>
        </header>
        )
    }
}


Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
