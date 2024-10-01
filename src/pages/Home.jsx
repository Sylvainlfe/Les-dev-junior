import Realisation from './Realisation'

function Home() {
  return (
    <>
    <main className="h-screen">
      <p className='absolute w- top-[40%] left-[50%] transform -translate-x-1/2 text-[1rem] md:text-4rem text-white'>Un collectif de jeune développeur qui a soif d'experience</p>
      <Realisation/>
      
    </main>
    </>
  );
}
export default Home;
