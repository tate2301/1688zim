import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>NextJS-Redux-Thunk-TailwindCSS-Mongo-CustomExpress Starter</title>
      </Head>
      <div className="container mx-auto">
      
        <p className="font-medium text-3xl text-gray-800">NextJS-Redux-Thunk-TailwindCSS-Mongo-CustomExpress Starter</p>
      </div>
    </>
    )
}

export async function getServerSideProps() {
  return ({props: {}})
}
