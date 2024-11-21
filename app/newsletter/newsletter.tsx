'use client';

import { useState } from 'react';
import styles from './newsletter.module.css';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  async function cadastraEmail(email:string) {
    try{
      await fetch(`http://localhost:8080/create/${email}`);

      alert("Email cadastrado com sucesso")
    }
    catch(err){
      alert("Erro ao tentar se conectar ao banco")
    }
  }

  return(
    <div id='newsletter' className={`${styles.newsletter_container} flex flex-col gap-6 pt-5 justify-center items-center text-white`}>
      <h1 className='text-2xl font-bold'>Newsletter</h1>

      <div className={`${styles.texto} w-3/6 flex flex-col`}>
        <p className='mb-10'>Se inscreva no newsletter para ficar informado nas atualizações do nosso projeto</p>

        <input type="text" className={`${styles.input} text-black`} onChange={(event) => setEmail(event.target.value)} />
        <button className={`${styles.submit_button} flex justify-start`} onClick={()=> cadastraEmail(email)}>Enviar e-mail</button>
      </div>
    </div>
  )
}
