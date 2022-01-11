if('serviceWorker' in navigator){
    let promise = navigator.serviceWorker.register('/sw.js')
    
    promise.then((evt)=>{
        console.log("Service worker registered",evt)
    })
    .catch((err)=>{
        console.log(err)
    })
}else{
    alert("Service Worker is not supported in your browser")
}