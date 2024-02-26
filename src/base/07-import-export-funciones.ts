import { heroes } from '../data/hero';

export const getHeroeById = (id: number) => heroes.find( (hero) => hero.id === id);
export const getHeroeByOwner = (owner: string) => heroes.filter( (hero) => hero.owner === owner);


// console.log(getHeroeById(2));
// console.log(getHeroeByOwner('DC'));