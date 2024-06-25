const buttonGroupIds = ["drawerButtons", "washHandButtons", "kitchenButtons", "realestateKitchenButtons", "realestateBedroomButtons",
    "realestateSteppeButtons"
];
const posters = [
    "videos/interactive/drawer_1stframe.png",
    "videos/interactive/washhand_1stframe.png",
    "videos/interactive/choppingboard_1stframe.png",
    "videos/interactive/realestateKitchen.jpg",
    "videos/interactive/realestateBedroom.jpg",
    "videos/interactive/realestateSteppe.jpg"
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
