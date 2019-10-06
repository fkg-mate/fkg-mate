var UI = {
    showCover: function() {
        document.querySelector('#window').classList.add('blur');
        document.querySelector('#cover').classList.add('show');
    },
    hideCover: function() {
        document.querySelector('#window').classList.remove('blur');
        document.querySelector('#cover').classList.remove('show');
    },
}