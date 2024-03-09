import React, { useState } from "react";
import CheckMatiere from "../../Component/checkBox&Matiere/CheckMatiere";
import mockMatiere from "../../Utils/CheckMatiereMock";
import "./style.scss";

type TdataForm = {
  nom: string;
  professeurPrincipal: string;
  nombrePlace: number;
  nombreMatiere: number;
  cycle:string;
  matieres: {
    [key: string]: {
      id: string | number;
      value: string;
    };
  };
};

function AjouterClasse() {
  const [dataFORM, setdataFORM] = useState<TdataForm>({
    nom: "",
    professeurPrincipal: "",
    nombreMatiere: 0,
    nombrePlace: 0,
    matieres: {},
    cycle:""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    
    setdataFORM((prev) => {
      const copy = {...prev}
      // @ts-ignore
      copy[e.target.name] = e.target.value 
      return copy;
    });
  };
  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    setdataFORM((prev) => {
      const temp = { ...prev };
      console.log(e.target.checked);

      console.log("checked state ", e.target.checked);
      const id = e.target.value;
      const matieres = temp.matieres;
      if (e.target.checked === true) {
        const matiereToAdd = mockMatiere.find((el) => `${el.id}` === `${id}`);
        if (matiereToAdd) matieres[id] = matiereToAdd;
      } else {
        delete matieres[id];
      }

      temp.matieres = matieres;
      return temp;
    });
  };
  console.log("dataForm matieres", dataFORM.cycle);
 const handleChangeCycle = (e: React.ChangeEvent<HTMLSelectElement>)=>{
  setdataFORM(prev=>{
    const temp = {...prev}
    setdataFORM({...temp, cycle:e.target.value})
    return temp
  })
 }
  return (
    <div className="containerAjouterClasse">
      <form>
        <h3>Elements de la classe</h3>
        <div>
          <label>Nom de Classe</label> <br />
          <input
            type="text"
            name="nom"
            placeholder="Ex: TleC"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Professeur Principal</label>
          <input
            type="text"
            name="professeurPrincipal"
            placeholder="Ex: ZEUGANG fabrice"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Nombre de place</label>
          <input type="number" name="nombrePlace" onChange={handleChange} />
        </div>
        <div>
          <label>Cycle</label><br/>
          <select value={dataFORM.cycle} onChange={handleChangeCycle}>
          <option value="1er Cycle" key="1">1er Cycle</option>
          <option value="2eme Cycle" key="2">2eme Cycle</option>
          </select>
        </div>
        <div>
          <span>Matières:</span>
          <div>
            {mockMatiere.map((el, idx) => (
              <CheckMatiere
                key={idx}
                value={el.id}
                handleChecked={handleChecked}
              />
            ))}
          </div>
        </div>

        <button onClick={(e)=> e.preventDefault()}>Créer Classe</button>
      </form>

      <div className="containerAjouterClasse-aperçu">
        <h3>Aperçu</h3>
        <div>
          <span>
            {" "}
            Nom de Classe: <span className="label"> {dataFORM.nom}</span>
          </span>
          <span>
            Professeur Principal:{" "}
            <span className="label">{dataFORM.professeurPrincipal}</span>{" "}
          </span>
          <span>
            Nombre de place:{" "}
            <span className="label">{dataFORM.nombrePlace}</span>{" "}
          </span>
          <span>
            Cycle:{" "}
            <span className="label">{dataFORM.cycle}</span>{" "}
          </span>
          <span>
            Matières:{" "}
            <ul className="label">
              {Object.keys(dataFORM.matieres).map((key, idx) => (
                <li key={idx}>{dataFORM.matieres[key].value}</li>
              ))}
            </ul>{" "}
          </span>
          <span>
            Nombre de matiere:{" "}
            <span className="label">
              {Object.keys(dataFORM.matieres).length}
            </span>{" "}
          </span>
        </div>
      </div>
    </div>
  );
}

export default AjouterClasse;
