export async function fetchRecipes(filter) {
    const { query, limit } = filter;

    const url = `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_EDAMAM_APP_ID}&app_key=${'df0daf56074f6bb9deefc19195773220'}&from=0&to=${limit}&`;

    const response = await fetch(url)

    const data = await response.json();

    return data?.hits
}

export async function fetchRecipe(id) {
    const url = `https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23${id}&app_id=${process.env.REACT_APP_EDAMAM_APP_ID}&app_key=${'df0daf56074f6bb9deefc19195773220'}`
    console.log(url)
    const response = await fetch(url)

    const data = await response.json();
    console.log(data)

    return data[0];
}