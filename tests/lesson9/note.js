let note = function(){
    setTimeout(()=>{
        console.log("after 5 sec")
    },5000 ) 
}

let note1 = function(){
    setTimeout(()=>{
        console.log("after 6 sec")
    },6000 ) 
}

let note2 = function(){
    setTimeout(()=>{
        console.log("after 7 sec")
    },7000 ) 
}
//  note()
//  note1()
//  note2()

let callFun = function(callback){
    setTimeout(()=>{
        console.log("after 2 sec")
        callback()
    },2000 ) 
}

let callFun1 = function(callback){
    setTimeout(()=>{
        console.log("after 3 sec")
        callback()
    },3000 ) 
}

let callFun2 = function(){
    setTimeout(()=>{
        console.log("after 5 sec")
    },5000 ) 
}

// callFun(() =>callFun1(callFun2))

 

let promFunc = function(isTrue) {
    return new Promise ((resolve,rejected )=>{
        setTimeout(()=>{
            if(isTrue){
                resolve("WELL")
            }else{
                rejected("ERROR")
            }
        },3000 ) 
    })
 }

//  console.log(promFunc(true).then((result)=>{
//     console.log(result)
//  }))

//  promFunc(false).then((result)=>{
//     console.log(result)
//  }).catch((fResult)=>{
//     console.log(fResult)
//  })

let asyncFunction = async function() {
    let result = await promFunc(true)
    console.log(result)
}

// asyncFunction()


let callFu = function(callback){
    setTimeout(() => {
     console.log("3 sec")
     callback()
    },3000)
}

let callFu1 = function(){
    setTimeout ((callback) => {
        console.log("5 sec")
    },5000)
}



// callFu(callFu1)

let promiseFunk = function(isTrue){
    return new Promise ((resolved, rejected) => {
        setTimeout (() => {
            if(isTrue){
                resolved ("WELL")
            }else{
                rejected ("error")
            }
        },2000)
    })
}



//     promiseFunk(false)
//     .then((res)=>{
//       console.log(res)
// })  .catch((fRes)=>{
//       console.log(fRes)
// })



let firstName = function(str){
    return str + "Bezhentcev"
}

let secondName = function(){
    return firstName("Maks ")
}

let greed = function(){
    let name = secondName()
    console.log('Hello, my name is ' + name)
}
greed()