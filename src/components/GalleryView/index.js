import {NavLink, useParams} from 'react-router-dom';

function GalleryView({galleries}) {
    let {galleryId} = useParams();
    const galleryView = galleries.find((gallery) => gallery.galleryid === parseInt(galleryId, 10))
    console.log(galleryView)
    return (
        <>
        <h1>Hello from GalleryView</h1>
        <h2>{`${galleryView.name}`}</h2>
        </>
    )
}


export default GalleryView;
