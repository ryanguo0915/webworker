onmessage = function(e) {
    console.log('Worker: Message received from main script', e.data);
    let final = 0;
    for(let i = 0; i< 1000000000000000; i++) {
        final+=i;
    }
    postMessage(final);
  }