import { dancing_script } from "../fonts"

export default function Meet_us() {
    return (
        <>
            <div className="min-h-screen flex items-center justify-center">
                <div className="max-w-4xl mx-auto p-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="md:col-span-1 pt-14 ">
                            <img src="https://i.imgur.com/6lREdMf.jpg" alt="Product Image" className="w-full h-auto rounded-lg shadow-md pt-8" />
                        </div>
                        <div className="md:col-span-2 align-middle">
                            <h3 className={`${dancing_script.className} text-6xl font-bold mb-3 p-5`}>D'Liriz</h3>
                            <p className='text-lg pl-8'>
                            D'Liriz es una exquisita página especializada en ofrecer bocaditos temáticos que deleitan los sentidos y 
                            llevan la experiencia gastronómica a un nivel superior. Con una dedicación inigualable a la creatividad y 
                            la calidad, D'Liriz se ha convertido en el destino preferido para aquellos que buscan deleitar sus paladares 
                            con auténticas obras maestras culinarias.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}