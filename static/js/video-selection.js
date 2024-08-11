const buttonGroupIds = Array.from({ length: 11 }, (_, index) => `s${index + 1}Buttons`);

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
    // $(`#demoVideo`).attr('src', source);
    $('#videoSource').attr('src', source);
    $('#videoPlayer')[0].load();
    $('#videoPlayer')[0].play();
};

const changeVideoHandler = (source, prompt) => {
    changeVideoSource(source);
    $('#caption').text(`Prompt: ${prompt}`)
};
