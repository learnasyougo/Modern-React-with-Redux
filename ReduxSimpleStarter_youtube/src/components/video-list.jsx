import React from 'react';
import VideoListItem from './video-list-item';

const VideoList = props => {
    const videoListItems = props
        .videos
        .map(video => {
            return (
                <VideoListItem
                    key={video.etag}
                    video={video}
                    onVideoSelected={props.onVideoSelected}
                />
            );
        });

    return (
        <ul className="col-md-4 list-group">
            {videoListItems}
        </ul>
    );
}

export default VideoList;