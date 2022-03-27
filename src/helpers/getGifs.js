
export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=BbATQL5jEHkdBInuYWSwojqwGLHwD7hA`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return ({
            id: img.id,
            title: img.title,//signo de interrogacion para preguntar si devuelve  un dato
            url: img.images?.downsized_medium.url
        })
    });

    return gifs;
}