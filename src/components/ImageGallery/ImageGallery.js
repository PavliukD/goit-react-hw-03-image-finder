import s from './ImageGallery.module.css'

export default function ImageGallery({children, onClick}){
    return(
        <ul className={s.ImageGallery} onClick = {onClick}>
            {children}
        </ul>
    )
}