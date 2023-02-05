import { NavLink } from "react-router-dom";
import '../GalleryNavigation/GalleryNavigation.css'

function GalleryNavigation({ galleries }) {
  return (
    <nav>
      <h1>Galleries</h1>
      {galleries.map((gallery) => {
        return <NavLink key={gallery.id} to={`/galleries/${gallery.id}`}>{gallery.name}</NavLink>
      })}
    </nav>

  )
}

export default GalleryNavigation;
