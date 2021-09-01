import React, { useEffect, useState } from "react";
import './App.css';

export default function App() {

  // Lista de Objetos -----------------------------------------------------------
  const [rest, setRest] = useState([
    {
      id: 1,
      nome: "McDonalds",
      avaliacao:"Muito Bom",
      imgUrl: "https://itaupowershopping.com.br/wp-content/uploads/2020/10/lojas-itaupower-shopping-91.png",
    },
    {
      id: 2,
      nome: "Spoleto",
      avaliacao:"Muito Bom",
      imgUrl: "https://static-images.ifood.com.br/image/upload/t_high/logosgde/201808141830_e210dca1-dd0e-4557-9d2b-b511f2359a8b.jpg"
    },
    {
      id: 3,
      nome: "Burger King",
      avaliacao:"Bom",
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRG0VjVB7Vq7JDucijTyPhJwIfgjh0p2ISvWNjICMhK3o7QK1FV-bRUQboBrIuIr87Oew&usqp=CAU"
    },
    {
      id: 3,
      nome: "Subway",
      avaliacao:"Bom",
      imgUrl: "https://iguatemi.com.br/saocarlos/sites/saocarlos/files/logo-1360167386205.png"
    },
    {
      id: 3,
      nome: "KFC",
      avaliacao:"Muito Bom",
      imgUrl: "https://1000logos.net/wp-content/uploads/2017/03/KFC-Symbol.jpg"
    },
    {
      id: 3,
      nome: "Habib's",
      avaliacao:"Bom",
      imgUrl: "https://static-images.ifood.com.br/image/upload/t_high/logosgde/e08a7979-0270-4223-a06c-3b1283c83b0c/202103031209_K4C8_i.jpg"
    },
  ])
//-----------------------------------------------------------------------------



    // Estados para adicionar e editar objetos --------------------------------
  const [nomeRest, setNomeRest] = useState("");
  const [avaRest, setAvaRest] = useState("");
  const [imgUrlRest, setImgUrlRest] = useState("");

  const [editando, setEditando] = useState(false);
  const [indiceEditando, setIndiceEditando] = useState(null);


  const handleNameChange = (e) => {
    setNomeRest(e.target.value);
  }

  const handleAvaChange = (e) => {
    setAvaRest(e.target.value);
  }
  

  const handleImgChange = (e) => {
    setImgUrlRest(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editando) {
      const restAtualizados = rest.map((rest, indice) => {
        if(indiceEditando === indice) {
          rest.nome = nomeRest;
          rest.avaliacao = avaRest;
          rest.imgUrl = imgUrlRest;
        }
        return rest
      });
    setRest(restAtualizados);
    setEditando(false);
    setIndiceEditando(null);
    setNomeRest("");
    setAvaRest("");
    setImgUrlRest("");
    } else {
      const id = rest[rest.length - 1].id + 1;
      setRest([
        ...rest,
        {
          id: id,
          nome: nomeRest,
          avaliacao: avaRest,
          imgUrl: imgUrlRest
        }

        
      ]);
      setNomeRest("");
      setAvaRest("");
      setImgUrlRest("");
    
    }
  }

  useEffect(() => {
    if((indiceEditando !==null) && editando) {
      setNomeRest(rest[indiceEditando].nome)
      setAvaRest(rest[indiceEditando].avaliacao)
      setImgUrlRest(rest[indiceEditando].imgUrl)
    }
  }, [indiceEditando])
  //---------------------------------------------------------------------------




  // Estado para deletar filme ------------------------------------------------
  const handleDelete = (indice) => {
    setRest(rest.filter((rest, indiceRest) =>
      indice !== indiceRest
    ));
  }
  //---------------------------------------------------------------------------
  


  

  // return para mostrar a pagina ---------------------------------------------
  return(
    <div className="container">
      
      <h1>Restaurantes Favoritos:</h1>
      
      <ul>
        {rest.map((rest, indice) => (
          <li key={indice}>
            <h3>{rest.nome}</h3>
            <p>{rest.avaliacao}</p>
            <img id='img'src={rest.imgUrl} alt={rest.nome} />
            <div>
              <button type="button" onClick={() => handleDelete(indice)}>Deletar</button>
              <button type="button" onClick={() => {
                setEditando(true);
                setIndiceEditando(indice);
              }}>Editar</button>
            </div>
            
            <button type="button" >Localização</button>
          </li>
        ))}
      </ul>
      <div class="gif">
        <img id='inicio'src="https://c.tenor.com/OZwc2uFjSLAAAAAj/hamburgers-foods.gif"></img>
        <img id='inicio'src="https://c.tenor.com/OZwc2uFjSLAAAAAj/hamburgers-foods.gif"></img>
        <img id='inicio'src="https://c.tenor.com/OZwc2uFjSLAAAAAj/hamburgers-foods.gif"></img>
      </div>
      

      <form onSubmit={handleSubmit}>
        <h2>Cadastrar novo restaurante:</h2>
        <div id="cadastro">
          <label>Digite o nome do restaurante: </label>
          
          <input type="text"
                value={nomeRest}
                onChange={handleNameChange} />
          <br/>
          <label>Insira a imagem: </label>
          <input type="url"
                value={imgUrlRest}
                onChange={handleImgChange} />
          <br/>
          <label>Avaliação: </label>
          <input type="text"
                value={avaRest}
                onChange={handleAvaChange} />
          <br/>
          <button type="submit">Salvar</button>
        </div>        
      </form> 
      <h2>O melhor dos melhores:</h2>
      <h2>MC DONALDS!!!!!</h2>
      <div class='final'>
        
        <p>“E se a gente fizesse uma piscininha de Cheddar...?” &nbsp; 😱 😱 😱 😱 😱 </p>

        <iframe width="560" height="315"  src="https://www.youtube.com/embed/HReDVOeT5r0" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>      
        
      </div>
      
    </div>
  );
}
//------------------------------------------------------------------------