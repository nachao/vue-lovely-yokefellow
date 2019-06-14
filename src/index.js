let socket;
let tartet = 'LY1';

export function sendAction (action) {
    socket.emit(tartet, action)
}

export function addNum (a, b) {
    return a + b
}

function bindDirectiveClick (el, binding) {
    if (binding.value) {
        el.addEventListener('click', () => sendAction(binding.value))
    }
}

function init (Vue) {
    Vue.directive('ly-click', { bind: bindDirectiveClick })
    Vue.prototype.$lovelyYokefellow = (data) => sendAction(data)
}

export function VueLovelyYokefellowPlugin (io, tartet) {
    tartet = tartet
    socket = io
    return init
}