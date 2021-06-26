import { Link } from 'react-router-dom'
// import './index.scss'
import { useEffect, useState } from 'react';
import * as petsService from '../../services/petsService'
const PetEdit = ({ match, history }) => {
    const [pet, setPet] = useState({});
    useEffect(() => {
        petsService.getOne(match.params.petId)
        .then(res => setPet(res)); //запазваме pet-а в стейта
    }, [match])
    const onDescriptionSaveSubmit = (e) => {
        e.preventDefault()
        let petId = match.params.petId
        console.log(petId)
        let updatedPet = {...pet, description: e.target.description.value, }
        petsService.update(petId, updatedPet)
        .then(res=>setPet(res))
        .then(() => {
            history.push(`/pets/details/${petId}`)
            return
        })
        .catch(err=>console.log(err))
    }

    return (
        <section className="detailsMyPet">
            <h3>{pet?.name}</h3>
            <p>Pet counter: <i className="fas fa-heart"></i> {pet?.likes}</p>
            <p className="img"><img alt="" src={pet?.imageURL} /></p>
            <form onSubmit={onDescriptionSaveSubmit}>
                <textarea type="text" name="description" defaultValue={pet.description}></textarea>
                <button className="button"> Save</button>
                {/* във формата by default button играе ролята на submit */}
            </form>
        </section>
    )

}
export default PetEdit