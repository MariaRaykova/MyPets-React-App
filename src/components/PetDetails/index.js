// import { Link } from 'react-router-dom'
// import './index.scss'
import {useEffect, useState} from 'react';
import * as petsService from '../../services/petsService'
const PetDetails = ({match}) => {
    let [pet, setPet] = useState({});
    useEffect(()=>{
        petsService.getOne(match.params.petId)
        .then(res=>setPet(res)) //това може да е само .then(setPet)
    }, [match]) //ако match се промени да се пререндерира
    return (
        <section className="detailsOtherPet">
            <h3>{pet.name}</h3>
            <p>Pet counter: {pet.likes} <a href="#"><button className="button"><i class="fas fa-heart"></i>
                            Pet</button></a>
            </p>
            <p className="img"><img src={pet.imageURL} /></p>
            <p className="description">{pet.description}</p>
        </section>
    )

}
export default PetDetails