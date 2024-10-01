export const usePopupState = () => {

    const popupTrigger = useState('popupTrigger',() => ({
        createPlaylistTrigger: false
    }));
    
    const TogglePopup = (trigger) => {
        popupTrigger.value[trigger] = !popupTrigger.value[trigger]
        console.log(popupTrigger.value[trigger]);
    }

    return {popupTrigger, TogglePopup}
}