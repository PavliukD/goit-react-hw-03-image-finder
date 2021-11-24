import s from './ImageGallery.module.css'

export default function ImageGallery({children, onClick}){
    return(
        <ul className={s.gallery} onClick = {onClick}>
            {children}
        </ul>
    )
}