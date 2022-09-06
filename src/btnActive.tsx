

export const removeActive = () => {
    const btn = document.querySelectorAll('.topBarBtn') as NodeListOf<HTMLButtonElement>;
    btn.forEach((t:any) => {
        t.parentElement.classList.remove('active')
    })

}


export const checkForActive = () => {
    const item = localStorage.getItem('item')
    const btn = document.querySelectorAll('.topBarBtn') as NodeListOf<HTMLButtonElement>;
    const newItem = !item ? 'Patronise': JSON.parse(item);
    removeActive();

    btn.forEach((t:any) => {
    if(t.innerText === newItem){
        t.parentElement.classList.add('active')
    }
    })

}
