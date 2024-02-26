import { getHeroeById } from "./07-import-export-funciones";

// const promiseTest = new Promise( (res, rej)=>{
//     setTimeout(() => {
//         const hero = getHeroeById(1);
//         res(hero);
//         rej('not found')
//     }, 2000);
// })

// promiseTest
//     .then( fullfiled => {
//         console.log(fullfiled);
//     })
//     .catch(err => console.log(err));

    const heroAsync = (id: number) => {

        return new Promise( (res, rej)=>{
            setTimeout(() => {
                const hero = getHeroeById(id);
                if (hero) {
                    res(hero);
                } else {
                    rej('not found, id invalid')
                }
            }, 2000);
        })
    }
    
    heroAsync(5)
        .then( console.log)
        .catch(console.warn);
