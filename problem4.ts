function lottery() {
    return new Promise((resolve, reject) => {
        console.log("---Undian lotre dimulai ---")
        console.log("sedang mengundi nomor anda")
        let number = Math.floor(Math.random() * 1000)
        console.log("undian yang di dapatkan adalah ", number)
        setTimeout(() =>{
            if (number >= 1000){
                resolve("Selamat anda mendapatkan hadiah utama berupa mobil")
            }else {
                reject("maaf anda kurang beruntung")
            }
        }, 10000)
    })
}

async function playDraw() {
    await lottery()
    .then((response) => {
        console.log(response)
    })
    .catch((error) =>{
        console.log(error)
    })
    .finally(() => {
        console.log("---undian telah berakhir---")
    })
}

function result () {
    console.log("cek hasil promise : ")
    playDraw()
    console.log("oke")
}
result()
