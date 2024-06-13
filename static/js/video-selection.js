const buttonGroupIds = ["drawerButtons", "kitchenButtons", "PlaceholderButtons2"];


const showButtons = (idx) => {
    buttonGroupIds.forEach((x) => $(`#${x}`).hide());
    $(`#${buttonGroupIds[idx]}`).show();
};


// const buttonKitchenHandler = (e) => {
//     showButtons(0);
// };

const changeVideoSource = (source, componentId="videoSource") => {
    $(`#demoVideo`).attr('src', source);
};

const changeVideoHandler = (source, prompt) => {
    changeVideoSource(source);
    $('#caption').text(`Prompt: ${prompt}`)
};



const hello = () => {
    console.log("hello");
};