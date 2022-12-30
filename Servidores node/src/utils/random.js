export const random = () =>{
    
    return Math.floor(Math.random()*1000)

}

export const listRandom = (cantidad)=> {
    const list = []
    if(!cantidad){
        for (let index = 0; index < 100000; index++) {
            list.push(random())
    }
    }else{
    for (let index = 0; index < cantidad; index++) {
        list.push(random())
    }
    }

    const resultado = list.reduce((prev, cur) => ((prev[cur] = prev[cur] + 1 || 1), prev), {})

    return resultado
}