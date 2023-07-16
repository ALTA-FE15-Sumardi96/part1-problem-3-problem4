function jajanBoba(uang: number, massage: string, price: number): void{
     console.log("kamu jajan seblak dengan harga Rp. 8000")
     setTimeout(() => {
         console.log("sisa uang kamu Rp.7000")
      }, 5000)
     
}

function jajanSeblak(callback: any): void{
    console.log("kamu jajan boba dengan harga Rp.5000")
    console.log("sisa uang kamu sebesar Rp. 15000")
    setTimeout(() => {
        callback("")
    }, 9000)

}

jajanSeblak(jajanBoba)