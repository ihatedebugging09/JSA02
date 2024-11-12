toggleClock1 = () => {
    let time = 0
    c1 = setInterval(() => {
        time++;
        let minute= Math.floor(time/60);
        let second = time%60;
        document.getElementById('c1').innerHTML = `Time: ${minute} : ${second}`;
        stop1 = () => {
            clearInterval(c1);
            document.getElementById('c1').innerHTML = 'Time: 0 : 0';
        }
    }, 1000);
}
toggleClock2 = () => {
    let time = 0
    c2 = setInterval(() => {
        time++;
        let minute= Math.floor(time/60);
        let second = time%60;
        document.getElementById('c2').innerHTML = `Time: ${minute} : ${second}`;
    }, 1000);
    stop2 = () => {
        clearInterval(c2);
        document.getElementById('c2').innerHTML = 'Time: 0 : 0';
    }
}
stopall = () => {
    clearInterval(c2);
    clearInterval(c1);
    document.getElementById('c2').innerHTML = 'Time: 0 : 0';
    document.getElementById('c1').innerHTML = 'Time: 0 : 0';
}