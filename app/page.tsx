import { useState } from "react"

export default function Home() {
  return (

    const [email , setEmail] = useState("")
    <div className="flex flex-col justify-center items-center h-screen">
      <div className=" flex items-center mb-6 md:w-[600px] bg-base-200 rounded-3xl">
        <div className="flex flex-col items-center w-full">
          <div className="h-[200px] w-full bg-[url('/img.jpg')] bg-cover bg-center rounded-3xl mb-6">
          
          </div>
          <div className="w-full p-10 pt-0">
            <h1 className="text-2xl md:text-4xl font-bold text-white">Abonne-toi ici</h1>
            <p className="my-4 text-sm">
              Recevez des mails pour les nouveautés. 
            </p>
            <form className="flex items-center w-full">
              <input type="text"
              className="input input-bordered w-full"
              placeholder="email@mail.com" />
              <button className="btn ml-2 btn-primary">
                S&apos;abonner
              </button>
            </form>
            <p className="text-xs mt-2">
              Pas de spams !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
