'use client';

import Member_card from './member_card/member_card';
import styles from './members.module.css';

export default function Members() {
  return(
    <div id='members' className={`${styles.members_container} flex flex-col gap-10 pt-20 pb-20 justify-center items-center text-white`}>
      <h1 className='text-2xl font-bold'>Integrantes</h1>

      <div className={`${styles.texto} justify-center grid grid-rows-2 grid-flow-col gap-4`}>
        <Member_card nome="João Victor Rosinhole" img="/img/members/joao.jpg" descricao="dev full-stack do time" />

        <Member_card nome="Italo Pacheco" img="/img/members/italo.jpg" descricao="dev mobile" />

        <Member_card nome="Paulo Shigueaki" img="/img/members/paulo.enc" descricao="dev full-stack do time" />

        <Member_card nome="Bryan Teixeira" img="/img/members/bryan.enc" descricao="dev full-stack do time" />

        <Member_card nome="André Matzumura" img="/img/members/andre.jpg" descricao="dev full-stack do time" />
      </div>
    </div>
  )
}
