const url = `http://localhost:5001/pets`;

export const getAll = (category = '') => {
    let petsUrl = url + ((category && category !== 'all') ? `?category=${category}` : ''); //ако имаме категория, която е различна от all

    return fetch(petsUrl)
        .then(res => res.json())
        // .then(res => this.setState({ pets: res }))
        .catch(err => console.log(err))
}
export const getOne = (petId) => {
    
    return fetch(`${url}/${petId}`)
        .then(res => res.json())
        // .then(res => this.setState({ pets: res }))
        .catch(err => console.log(err))
}
export const create = (petName, description, imageURL, category) => {   // а може да си сглобим обекта в компонентата и да го подадем тук като обект,а не по отделно всяко поле
    let pet = {
        name: petName, 
        description,
        imageURL,
        category, 
        likes: 0,
    }
   
    return fetch(url, {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(pet)
    });
}
export const pet = (petId, likes) => {
    return fetch(`${url}/${petId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({likes})
    })
        .then(res => res.json())
}
export const update = (petId, pet) => {
    return fetch(`${url}/${petId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(pet)
    });
}

