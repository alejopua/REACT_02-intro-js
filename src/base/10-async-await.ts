
const imagePromise = async() => {
    try {
        const apiKey = 'AELN5i8kbh32WJ62ntr58TxMSUcDPbPd';
        const httpRequest = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await httpRequest.json();
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );
    } catch (error) {
        console.error(error);
    }
}

imagePromise()