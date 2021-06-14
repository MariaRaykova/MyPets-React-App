// import { Link } from 'react-router-dom'
// import './index.scss'
import * as petsService from '../../services/petsService'

const PetCreate = () => {
    const onCreatePetSubmitHandler = (e) => {
        e.preventDefault(); //за да не се презарежда страницата

        const {name, description, image, category} = e.target;
        petsService.create(name.value, description.value, image.value, category.value);
        // тук с then и catch можем да си направим loader-и примерно
    }
    return (
        <section className="create">
            {/* подаваме на формата  функцията/хендлъра по референция*/}
            <form onSubmit={onCreatePetSubmitHandler}>
                <fieldset>
                    <legend>Add new Pet</legend>
                    <p className="field">
                        <label for="name">Name</label>
                        <span className="input">
                            <input type="text" name="name" id="name" placeholder="Name" />
                            <span className="actions"></span>
                        </span>
                    </p>
                    <p className="field">
                        <label for="description">Description</label>
                        <span className="input">
                            <textarea rows="4" cols="45" type="text" name="description" id="description"
                                placeholder="Description"></textarea>
                            <span className="actions"></span>
                        </span>
                    </p>
                    <p className="field">
                        <label for="image">Image</label>
                        <span className="input">
                            <input type="text" name="imageURL" id="image" placeholder="Image" />
                            <span className="actions"></span>
                        </span>
                    </p>
                    <p className="field">
                        <label for="category">Category</label>
                        <span className="input">
                            <select type="text" name="category">
                                {/* value-то как е изписано трябва да отговая на back-end-а с главна буква ед число в случая */}
                                <option value="Cat">Cat</option>
                                <option value="Dog">Dog</option>
                                <option value="Parrot">Parrot</option>
                                <option value="Reptile">Reptile</option>
                                <option value="Other">Other</option>
                            </select>
                            <span className="actions"></span>
                        </span>
                    </p>
                    <input className="button" type="submit" className="submit" value="Add Pet" />
                </fieldset>
            </form>
        </section>
    )

}
export default PetCreate