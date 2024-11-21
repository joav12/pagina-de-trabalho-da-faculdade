'use client';

import styles from './member_card.module.css';

export default function Member_card(props: any) {
  return(
    <div className={`${styles.member_card_container} w-60 flex flex-col gap-10 p-5 justify-center items-center `}>
      <img className={`${styles.imagem}`} src={props.img} alt={props.nome} />
      <p className={`${styles.nome}`}>{props.nome}</p>
      <p className={`${styles.desc}`}>{props.descricao}</p>
    </div>
  )
}
