export function Card({nome, idade, input}){
    return(
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', width: '250px', margin: '10px' }}>
        <img
          src="https://i.pinimg.com/originals/d7/2a/61/d72a61d5413e47e963251d70facef274.jpg"
          alt="Imagem do usuário"
          style={{ width: '100%', borderRadius: '8px' }}
        />
        <h3>{nome}</h3>
        
        <input value={idade}></input>
      </div>

    );
}
export default Card;