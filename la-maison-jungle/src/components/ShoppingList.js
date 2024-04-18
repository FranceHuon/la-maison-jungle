import { plantList } from '../datas/plantList'
import PlantItem from '../components/PlantItem'
import '../styles/ShoppingList.css'


function ShoppingList() {
    // Création d'un tableau contenant les catégories uniques de plantes
    // Utilisation de la méthode reduce pour itérer sur la liste des plantes
    const categories = plantList.reduce(
        (acc, plant) =>
         // Vérification si la catégorie de la plante est déjà présente dans le tableau d'accumulation (acc)
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []

    )

    return (
        <div>
            <ul>
                {categories.map((cat) => (
                    <li key={cat}>{cat}</li>
                ))}
            </ul>
            <ul className='lmj-plant-list'> 
                {plantList.map(({id, cover, name, water, light }) => (
                    <PlantItem
                    id={id}
                    cover={cover}
                    name={name}
                    water={water}
                    light={light}
                    />
                ))}
            </ul>
        </div>
    )

}

export default ShoppingList