import AuthentiqueFormulaire from "./AuthentiqueFormulaire";
function MotdepasseOublier() {
  const fields = [

    { type: "email", name: "email", placeholder: "E-mail" },
  ];

  return (
    <>
      <h1 className="site-title">🔖 RED PRODUCT</h1>

      <AuthentiqueFormulaire
        titre="Mot de passe oublié" placeholder="Entrez votre e-mail pour réinitialiser le mot de passe"
        fields={fields}
        montrerCheckox = {false}
        buttonText="Envoyer"
          checkboxLabel="Entrez votre adresse e-mail ci-dessous et nous vous envoyons des instructions sur la façon de modifier votre mot de passe. "
        onSubmit={(e) => e.preventDefault()}
      />

      <div className="links">
        <p>
          Revenir a la connexion? <span ><a href="Connexion.jsx" className="register">Se connecter</a></span>
        </p>
      </div>
    </>
  );
}

export default MotdepasseOublier;