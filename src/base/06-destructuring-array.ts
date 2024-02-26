(() => {
    // Destructuring Array
    const heroes = ['vegeta', 'goku', 'krilin'];
    
    const [ , , p3] = heroes;
    console.log(p3);

    const numbers = () => {
        return ['uno', 'dos', 'tres'];
    }

    const [n1, n2, n3] = numbers();
    console.log(n1, n2, n3);

    const useState = (value: string): [string, ()=>void] => {
        return [value, () => { console.log('Hola Mundo') }];
    }

    const [nombre, setNombre] = useState('Goku');
    console.log(nombre);
    setNombre();



})();