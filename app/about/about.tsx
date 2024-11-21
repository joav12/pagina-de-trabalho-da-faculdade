'use client';

import styles from './about.module.css';

export default function About() {
  return(
    <div id='about' className={`${styles.about_container} flex flex-col gap-10 pt-5 justify-center items-center text-white`}>
      <h1 className='text-2xl font-bold'>Sobre nós</h1>

      <div className={`${styles.texto} w-3/6 flex flex-col gap-10`}>
        <p>é uma startup inovadora dedicada a promover a transição para um futuro energético sustentável e inclusivo. Em um mundo cada vez mais afetado pelas mudanças climáticas, acreditamos que a transformação do setor energético é essencial para criar um planeta mais justo, resiliente e próspero. Nossa missão é educar, inspirar e capacitar as pessoas a se envolverem com soluções energéticas limpas e renováveis, como solar, eólica, hidrelétrica e geotérmica.</p>

        <p>Nosso objetivo é aumentar a conscientização sobre a crise energética global, a disparidade no acesso à eletricidade e as consequências do uso excessivo de combustíveis fósseis. Através de uma plataforma digital, queremos oferecer uma experiência educacional única, informando e desafiando o público a repensar seus hábitos de consumo de energia e abraçar fontes renováveis.</p>

        <p>Além disso, buscamos democratizar o acesso à energia, fornecendo informações claras sobre como as energias renováveis podem ser implementadas de forma acessível e eficaz, tanto em nível global quanto local. Com uma interface interativa e módulos educacionais, nosso objetivo é inspirar mudanças de comportamento que contribuam para um sistema energético mais justo e ambientalmente responsável.</p>

        <p>Estamos comprometidos com a construção de um futuro onde todos, independentemente da região ou condição social, tenham acesso a uma energia limpa, segura e sustentável. Através da educação, tecnologia e inovação, acreditamos que é possível criar soluções energéticas que atendem às necessidades do presente sem comprometer o futuro do nosso planeta.</p>
      </div>
    </div>
  )
}
