const delay = t => new Promise(resolve => setTimeout(resolve, t));

async function countUp() {
    console.log('start');
    for (var i = 1; i <= 10; i++) {
        await delay(1000);
        console.log(i);
    }
    console.log('end');
}

console.log('before');
countUp().then(() => {
    console.log('after');
});
