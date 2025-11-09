import AuthentiqueFormulaire from "./AuthentiqueFormulaire";


function Connexion() {
  const fields = [

    { type: "email", name: "email", placeholder: "E-mail" },
    { type: "password", name: "password", placeholder: "Mot de passe" },
  ];

  return (
    <>
      <h1 className="site-title">🔖 RED PRODUCT</h1>

      <AuthentiqueFormulaire
        titre="Connectez-vous en tant que Admin"
        fields={fields}
        buttonText="Se connecter"
        checkboxLabel="Gardez-moi connecté"
        onSubmit={(e) => e.preventDefault()}
      />

      <div className="links">
        <p className="forgot">Mot de passe oublié ?</p>
        <p>
          Vous n'avez pas de compte ? <span ><a href="Inscription.jsx" className="register">S'inscrire</a></span>
        </p>
      </div>
    </>
  );
}

export default Connexion;
