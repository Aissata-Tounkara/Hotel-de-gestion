import AuthentiqueFormulaire from "./AuthentiqueFormulaire";


function Inscription() {
  const fields = [
    { type: "text", name: "name", placeholder: "Nom" },
    { type: "email", name: "email", placeholder: "E-mail" },
    { type: "password", name: "password", placeholder: "Mot de passe" },
  ];

  return (
    <>
      <h1 className="site-title">🔖 RED PRODUCT</h1>

      <AuthentiqueFormulaire
        titre="Inscrivez-vous en tant que Admin"
        fields={fields}
        buttonText="S'inscrire"
        checkboxLabel="Accepter les termes et conditions politiques"
        onSubmit={(e) => e.preventDefault()}
      />

      <div className="links">
        <p>
          Vous avez deja un compte ? <span ><a href="Connexion.jsx" className="register">Se connecter</a></span>
        </p>
      </div>
    </>
  );
}

export default Inscription;
