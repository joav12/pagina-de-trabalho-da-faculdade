'use client';

import styles from './emails.module.css';

export default async function Home() {
    try{
      // const res = await fetch(`http://localhost:8080/fetch`);
      // const data = await res.json();
      // data.reverse();
      const data: any[] = [
        [1, "teste"],
        [2, "teste 2"]
      ];

      async function deleteEmail(id: number){
        const res = await fetch(`http://localhost:8080/delete/${id}`);
        try{
          alert(`Email  ${id} deletado com sucesso`);
        }
        catch(err){
          alert(`ocorreu um erro ao tentar deletar o email ${id}`);
        }
      }

      return (
        <div className={`${styles.emailsContainer} h-screen flex flex-col items-center p-6 font-[family-name:var(--font-geist-sans)]`}>
          <h1 className='text-3xl mb-8 font-bold flex justify-center text-white'>Lista de emails cadastrados</h1>

          <div className={`${styles.listaEmails} max-w-96 min-w-96 p-6 flex flex-col`}>
            {data.length == 0 ? (
              <p>Nenhum email cadastrado</p>

            ) : (
              <table>
                <thead>
                  <tr>
                    <th className={styles.tableHeader}>ID</th>
                    <th className={styles.tableHeader}>E-mail</th>
                    <th className={styles.tableHeader}>Ação</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    data.map((value: any) =>  (
                      <tr>
                        <td>{value[0]}</td>
                        <td>{value[1]}</td>
                        <td className={styles.tableDeleteEmail} onClick={()=> deleteEmail(value[0])}>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                          </svg>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            )}
          </div>
        </div>
      );
    }
    catch(err){
      <div className={`${styles.emailsContainer} flex flex-col items-center p-6 font-[family-name:var(--font-geist-sans)]`}>
      <h1 className='text-3xl mb-8 font-bold flex justify-center'>Lista de emails cadastrados</h1>

      <div className={`${styles.listaEmails} max-w-96 min-w-96 p-6 flex flex-col`}>
        <p>Erro ao tentar se conectar ao banco</p>
      </div>
    </div>
    }
}
