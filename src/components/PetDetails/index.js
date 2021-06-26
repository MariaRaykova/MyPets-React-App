import { Link } from 'react-router-dom'

// import './index.scss'
import { useEffect, useState } from 'react';
import * as petsService from '../../services/petsService'

const PetDetails = ({ match, history }) => {
    let [pet, setPet] = useState({});

    useEffect(() => {
        petsService.getOne(match.params.petId)
            .then(res => setPet(res)) //това може да е само .then(setPet)
    }, [match]) //ако match се промени да се пререндерира

    const onPetButtonClickHandler = (e) => {
        e.preventDefault()
        let petId = match.params.petId
        let incrementedLikes = Number(pet.likes) + 1;
        let updatedPet = {...pet, likes: incrementedLikes}
        petsService.update(petId, updatedPet)
        .then(res=>res.json()) //не знам защо тук ни трябва,а на edit description не
        .then(res=>setPet(res))
        .catch(err=>console.log(err))
    } 
    return (
        <section className="detailsOtherPet">
            <h3>{pet?.name}</h3>
            <p className="img"><img alt="" src={pet?.imageURL} /></p>
            <p className="description">{pet?.description}</p>
            <div className="pet-info">
                <Link to={`/pets/edit/${match.params.petId}`}><button className="button">Edit</button></Link>
                <Link to="#"><button className="button">Delete</button></Link>
                <button className="button" onClick={onPetButtonClickHandler}>
                    <i class="fas fa-heart"></i> Pet
                </button>
                Likes:<span>{pet?.likes}</span>
                
            </div>
        </section>
    )
}
export default PetDetails