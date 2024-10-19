const buttonGroupIds = Array.from({ length: 12 }, (_, index) => `s${index + 1}Buttons`);

const posters = [
    "videos/interactive/s1/s1.png",
    "videos/interactive/s2/s2.jpg",
    "videos/interactive/s3/s3.jpg",
    "videos/interactive/s4/s4.png",
    "videos/interactive/s5/s5.jpg",
    "videos/interactive/s6/s6.png",
    "videos/interactive/s7/s7.jpg",
    "videos/interactive/s8/s8.jpg",
    "videos/interactive/s9/s9.jpg",
    "videos/interactive/s10/s10.jpg",
    "videos/interactive/s11/s11.jpg",
    "videos/interactive/s12/s12.png",
];

const showButtons = (idx) => {
    buttonGroupIds.forEach((x) => $(`#${x}`).hide());
    $(`#${buttonGroupIds[idx]}`).show();
};

const groupSelectionButtonHandler = (idx) => {
    showButtons(idx);
    $('#videoSource').attr('src', '');
    $('#videoPlayer')[0].load();
    $('#videoPlayer').attr('poster', posters[idx]);
    $('#arrow-img-1').css('visibility', 'hidden');
    $('#arrow-img-2').css('visibility', 'visible');
}

const changeVideoSource = (source) => {
    $('#videoSource').attr('src', source);
    $('#videoPlayer')[0].load();
    $('#videoPlayer')[0].play();
};

const changeVideoHandler = (source, prompt) => {
    changeVideoSource(source);
    $('#caption').text(`Prompt: ${prompt}`)
};

const changeGifHandler = (source) => {
    $('#extrinsic-gif').attr('src', source + '?t=' + new Date().getTime());
};

const srcMap = {
    '4-1': {
        video_source: 'videos/interactive/s4/washhand-zoomin.mp4',
        caption: 'a person standing in front of sink and washing hand',
        gif_source: 'videos/extrinsics/s4/7-1.gif',
    },
    '4-2': {
        video_source: 'videos/interactive/s4/washhand-zoomout.mp4',
        caption:'a person standing in front of sink and washing hand',
        gif_source: 'videos/extrinsics/s4/7-2.gif',
    },
    '4-3': {
        video_source: 'videos/interactive/s4/washhand-up.mp4',
        caption:'a person standing in front of sink and washing hand',
        gif_source: 'videos/extrinsics/s4/7-3.gif',
    },
    '4-4': {
        video_source: 'videos/interactive/s4/washhand-up-zoomout.mp4',
        caption:'a person standing in front of sink and washing hand',
        gif_source: 'videos/extrinsics/s4/7-4.gif',
    },
    '4-5': {
        video_source: 'videos/interactive/s4/washhand_roll.mp4',
        caption:'a person standing in front of sink and washing hand',
        gif_source: 'videos/extrinsics/s4/7-5.gif',
    },
    '4-6': {
        video_source: 'videos/interactive/s4/washhand_yaw.mp4',
        caption:'a person standing in front of sink and washing hand',
        gif_source: 'videos/extrinsics/s4/7-6.gif',
    },
};

const changeVideoAndGifHandler = (id) => {
    changeVideoHandler(srcMap[id].video_source, srcMap[id].caption);
    // changeGifHandler(srcMap[id].gif_source);
};
