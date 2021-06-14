const url = `http://localhost:5000/pets`;

export const getAll = (category = '') => {
    let petUrl = url + (category && category !== 'all') //ако имаме категория, която е различна от all
        ? `?category=${category}`
        : '';
    return fetch(url)
        .then(res => res.json())
        // .then(res => this.setState({ pets: res }))
        .catch(err => console.log(err))
}
export const getOne = (petId) => {
    return fetch(`${url}/{petId}`)
        .then(res => res.json())
        // .then(res => this.setState({ pets: res }))
        .catch(err => console.log(err))
}
export const create = (petName, description, imageURL, category) => {   // а може да си сглобим обекта в компонентата и да го подадем тук като обект,а не по отделно всяко поле
    let pet = {
        name: petName, 
        description,
        imageURL,
        category
    }
    console.log(pet)
    return fetch(url,{
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(pet)
    });
}