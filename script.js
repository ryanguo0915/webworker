const work = document.getElementById('work-btn');
work.addEventListener('click',() => {
    console.log
    if(window.Worker) {
        const myWorker = new Worker("worker.js");
        myWorker.postMessage('worker start');
        myWorker.onmessage=function(e) {
            document.getElementById('output').innerHTML = e.data;
        };
    }
});

const lolButton = document.getElementById('btn');
lolButton.addEventListener('click',() => {
    document.getElementById('random').innerHTML = 'random';
});