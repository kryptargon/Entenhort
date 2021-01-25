const socket = io();

const buttonfunc = function() {
    socket.emit('pack_users');
};

socket.on('user_list', list => {
    const msgBox = document.getElementById('messages');

    for (let i = msgBox.childNodes.length - 1; i > 0 ; i--) {
        msgBox.removeChild(msgBox.childNodes[i]);
    }

    for (const i in list) {
        const msgBox = document.getElementById('messages');
        const node = document.createElement('li');
        // TODO check potential `hasOwnProperty` issue
        node.appendChild(document.createTextNode('' + list[i].id));
        msgBox.appendChild(node);
    }
});
