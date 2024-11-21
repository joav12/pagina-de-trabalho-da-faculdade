'use client';

import styles from './footer.module.css';

export default function Footer() {
  return(
    <div id='newsletter' className={`${styles.footer_container} flex flex-col gap-6 pt-20 pb-5 justify-center items-center text-white`}>
      <p className='text-slate-600'>Esse site foi feito para a Global solution de 2024  @energy+</p>
    </div>
  )
}
