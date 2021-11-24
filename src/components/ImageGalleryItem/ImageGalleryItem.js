import s from './ImageGalleryItem.module.css'

export default function ImageGalleryItem({array}){
    return array.map(item => {
        return (
            <li className={s.ImageGalleryItem} key = {item.id} >
                <img src={item.previewURL} alt="" id = {item.id} className = {s.image}/>
            </li>
        )
    })
}