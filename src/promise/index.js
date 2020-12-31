function randomHandle() {
    return new Promise((resolve, reject) => {
        const num = Math.ceil(Math.random() *10);
        console.log('num', num)
        if(num > 5) {
            resolve(num);
        } else {
            reject(new Error)
        }
    })
}

Promise.all([randomHandle(), randomHandle()]).then(res => {
    console.log('res', res);
})