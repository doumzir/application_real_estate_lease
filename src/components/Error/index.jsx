
import "../../style/error.scss"

function Error() {
  return (
    <div className="error">
      <h2>404</h2>
      <h1>Oups ! la page que vous demandez n'existe pas</h1>
      <a rel="stylesheet" href="/">Retourner sur la page d'acceuil </a>
    </div>
  )
}

export default Error