const info = document.getElementsByClassName('info')[0]
const setInfo = () => {
    const set = info.innerHTML.replaceAll('[', '').replaceAll(']', '')
    info.innerHTML = set;
}