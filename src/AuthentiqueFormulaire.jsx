function AuthentiqueFormulaire({ titre, fields, buttonText, checkboxLabel, onSubmit, montrerCheckox =true }) {
  return (
    <form className="form" onSubmit={onSubmit}>
      <h3 className="subtitle">{titre}</h3>
      <p></p>

      {fields.map((field, index) => (
        <div className="input-group" key={index}>
          <input
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
          />
        </div>
      ))}

      {/* <div className="checkbox">
        <input id="case" type="checkbox" />
        <label htmlFor="case">{checkboxLabel}</label>
      </div> */}

       {montrerCheckox ? (
        <div className="checkbox">
          <input id="case" type="checkbox" />
          <label htmlFor="case">{checkboxLabel}</label>
        </div>
      ) : (
        //  Page mot de passe oublié → afficher seulement le texte
        <p>{checkboxLabel}</p>
      )}

      <button className="btn">{buttonText}</button>
    </form>
  );
}

export default AuthentiqueFormulaire;
