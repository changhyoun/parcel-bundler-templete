console.log('hello parcel!!');

async function test(){
    const promise = Promise.resolve(1234);
    console.log(await promise)
}
test()