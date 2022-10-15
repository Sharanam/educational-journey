const btnNavbar = document.querySelector('#btnNavbar');
const btnStory = document.querySelector('#btnStory');

const mainHome = document.querySelector('main#home')
const mainSocial = document.querySelector('main#social')

const divOverview = document.querySelectorAll('.overview')
const divStory = document.querySelectorAll('.story')

const updateState = (function(state) {
    let userState = state;
    return function(state) {
        userState = state;
        // updater
        switch (userState) {
            case 'togglePage':
                btnNavbar.innerHTML = btnNavbar.innerHTML === "Social Life" ? "Home" : "Social Life";
                [mainHome, mainSocial].forEach(function(t) {
                    if (t.classList.contains('hidden'))
                        t.classList.remove("hidden");
                    else
                        t.classList.add('hidden');
                })
                break;
            case 'toggleStory':
                btnStory.innerHTML = btnStory.innerHTML === "Hide Story" ? "Read Story" : "Hide Story"
                divStory.forEach(function(t) {
                    if (t.classList.contains('hidden'))
                        t.classList.remove("hidden");
                    else
                        t.classList.add('hidden');

                })
                divOverview.forEach(function(t) {
                    if (t.classList.contains('hidden'))
                        t.classList.remove("hidden");
                    else
                        t.classList.add('hidden');

                })
                break;

            default:
                break;
        }
        return userState;
    }
})()

btnNavbar.addEventListener('click', () => updateState("togglePage"))
btnStory.addEventListener('click', () => updateState("toggleStory"))