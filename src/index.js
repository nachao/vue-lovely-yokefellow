
let socket;
let getUid = () => null;

let actions = [];
let events = [];

function sendAction (action, uid) {
    if (typeof action === 'number') {
        socket.emit('lovely-yokefellow', { action, uid })
    }
}

function bindDirectiveClick (el, binding) {
    if (binding.value) {
        el.addEventListener('click', () => {
            sendAction(binding.value, getUid())
        })
    }
}

function recordEvent () {
    actions.find()
}

function init (Vue) {
    Vue.directive('ly-click', { bind: bindDirectiveClick })
    Vue.prototype.$lovelyYokefellow = (data) => sendAction(data, getUid())
}

export function ServerLovelyYokefellowHandler (actions, events) {
    actions = actions
    events = events
}

export function VueLovelyYokefellowPlugin (io) {
    socket = io
    return init
}