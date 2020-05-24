const myPromise = new Promise((resolve,reject) =>  {
    if (true) {
        setTimeout(() => {
            resolve('I have succeed');
        }, 1000);
    } else {
        reject('I have failed');
    }

})
myPromise
    .then(value =>value + '!!!!!')
    .then(value =>console.log(value))
    .catch(value =>console.log(value))
