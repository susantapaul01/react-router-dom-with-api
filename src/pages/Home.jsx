import landingImg from '../../public/landingImg.png';

function Home() {
  
  return (
    <>
      <section>
        <div className="container mx-auto">
            <div className="md:flex">
                <div className="w-full md:w-1/2 px-3 md:px-2 lg:py-32 md:py-14 mb-2">
                    <h1 className='text-3xl lg:mb-12 md:mb-6 mb-2 text-slate-600 font-bold'>How do I reference a local image in React?</h1>
                    <p className='text-base text-slate-500'>I actually have a similar issue, my image is been imported in the index.jsx file, I have the loaders in webpack, the compile face is working fine, as indeed a copy of the image is been created in my server/public/js folder with a random number, and the correct path to it is in the bundler, but I can't visualize the image. Its also strange that its been produced in the server/public/js and not server/public/img as I wrote into index.js</p>
                </div>
                <div className="w-full md:w-1/2">
                    <img src={landingImg} alt="" className='w-5/6 h-auto mx-auto' />
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Home;
