import _ from 'lodash';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import YTSearch from 'youtube-api-search';

import SearchBar from './components/search-bar';
import VideoList from './components/video-list'
import VideoDetail from './components/video-detail';

const youtubeApiKey = 'AIzaSyD1J3NQiUCi02XujJ4yToq54hVb7nNlli4';

class App extends Component {
    constructor(props) {
        super(props);

        this.onSearchTermChanged(`psy'aviah`);
    }

    state = {
        videos: [],
        selectedVideo: null
    };

    render() {
        const onSearchTermChanged = _.debounce(searchTerm =>
        { this.onSearchTermChanged(searchTerm) }, 300);

        return (
            <div>
                <SearchBar onSearchTermChanged={onSearchTermChanged} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    videos={this.state.videos}
                    onVideoSelected={selectedVideo => this.setState({ selectedVideo })}
                />
            </div>
        );
    }

    onSearchTermChanged(searchTerm) {
        YTSearch({
            key: youtubeApiKey,
            term: searchTerm
        }, videos => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }
};

ReactDOM.render(
    <App />,
    document.getElementById('container')
);