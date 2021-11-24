export default function ImageGalleryItem({array}){
    return array.map(item => {
        return (
            <li className="gallery-item" key = {item.id} >
                <img src={item.previewURL} alt="" id = {item.id}/>
            </li>
        )
    })
}