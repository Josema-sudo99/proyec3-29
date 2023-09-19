const LocationInfo = ({location}) => {

console.log(location)

  return (
    <div className="containerLocaTit-0">
  <article className="titulitos-1 center-content">
      <h3 className="titulitos-2">{location?.name}</h3>
      <div className="containerLocaTit">
          <ul className="titulitos-3">
            <li className="liCss"><span className="titulo-arriba">type:</span>
              <span className="titulo-abajo">{  location?.type }</span>
            </li>
            <li className="liCss"><span className="titulo-arriba">Dimension:</span>
              <span className="titulo-abajo">{location?.dimension }</span>
            </li>
            <li className="liCss"><span className="titulo-arriba">Population:</span>
              <span className="titulo-abajo">{location?.residents.length}</span>
            </li>
          </ul>
      
      </div>
          
  </article>
  </div>
  )
}

export default LocationInfo