document.addEventListener('DOMContentLoaded', function () {
    var lock = document.getElementById('lock');
    var button = document.getElementById('btn');
    var tick = document.getElementById('tick');
    var loading = document.getElementById('loading');
    var error = document.getElementById('error');
    var disabled = true;
    function resetBtn() {
        textBox.value = '';
        btntext.innerHTML = 'Subscribe';
        loading.style.display = 'none';
        tick.style.display = 'none';
        tick.style.animationPlayState = 'paused'
        button.style.backgroundColor = '#0074d4';
        butonOpacity();
        disabled = false;
    }
    function continueExecution() {
        btntext.innerHTML = '';
        if (textBox.value == 'glazybyte') {
            button.style.backgroundColor = '#24b57e';
            loading.style.display = 'none';
            tick.style.display = 'inline';
            tick.style.animationPlayState = 'running'
            error.innerHTML = '';
            setTimeout(resetBtn, 2000);
        } else {
            error.innerHTML = 'A processing error has occured';
            resetBtn();
        }
    }
    button.addEventListener('click', function () {
        if (disabled) {
            return;
        }
        disabled = true
        btntext.innerHTML = 'Processing...';
        lock.style.display = 'none';
        loading.style.display = 'block';
        setTimeout(continueExecution, 500);

    });
    const textBox = document.getElementById('credit');
    function butonOpacity() {
        if (textBox.value != '') {
            button.style.opacity = '100%';
            document.getElementById('lock').style.display = 'inline';
            disabled = false;
            document.documentElement.style.setProperty('--cursor-status', 'pointer');
        } else {
            button.style.opacity = '70%';
            document.getElementById('lock').style.display = 'none';
            disabled = false;
            document.documentElement.style.setProperty('--cursor-status', 'default');
        }
    }
    textBox.addEventListener('input', butonOpacity);
});