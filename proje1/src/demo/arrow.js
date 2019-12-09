function ornekMetot () {

}

const ornekArrow = (param1,param2) => {
    return {p: param1, p1: param2}
}

const nesne = ornekArrow(1,2)
nesne.p1

const sonuc = ornekArrow(1,2)


const collapsed = (param1,param2) => {
    console.log(param1)
    param2()
}

collapsed('text', () => {

})