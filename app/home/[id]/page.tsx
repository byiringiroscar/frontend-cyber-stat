import Image from "next/image"


const InformationDetail = () => {
    return (
        <>
            <div className='flexCenter bg-[#F1F6FB] h-[180px] lg:px-40'>
               <h4 className="font-bold text-xl text-[#090337]">Information Detail</h4>
            </div>
            <div className="max-container padding-container py-8 flex flex-col gap-5 bg-[url('../../../public/footer-bg.jpg') bg-[center_center] bg-no-repeat bg-cover">
                <h2 className="font-bold text-4xl text-[#090337]">Benin</h2>
                <p>Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec. 
                    Quisque bibendum orci ac nibh facilisis, at malesuada orci congue. 
                    Nullam tempus sollicitudin cursus. Ut et adipiscing erat. Curabitur this is a text link libero tempus congue.
Duis mattis laoreet neque, et ornare neque sollicitudin at. Proin sagittis dolor sed mi elementum pretium. 
Donec et justo ante. Vivamus egestas sodales est, eu rhoncus urna semper eu. Cum sociis natoque penatibus et
 magnis dis parturient montes, nascetur ridiculus mus. Integer tristique elit lobortis purus bibendum, quis
  dictum metus mattis. Phasellus posuere felis sed eros porttitor mattis. Curabitur massa magna, tempor in blandit
   id, porta in ligula. Aliquam laoreet nisl massa, at interdum mauris sollicitudin et.</p>

                <div className="flex flex-col gap-2">
                    <h4 className="font-bold">CSIRT</h4>
                    <p>Benin CSIRT</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h4 className="font-bold">Country Code</h4>
                    <p>BJ</p>
                    </div>
                <div className="flex flex-col gap-2">
                    <h4 className="font-bold">Country</h4>
                    <p>Benin</p>
                    </div>
                <div className="flex flex-col gap-2">
                    <h4 className="font-bold">Flag</h4>
                    <Image src="https://twemoji.maxcdn.com/2/svg/1f1e6-1f1e9.svg" alt="flag" height={30} width={30} />
                    </div>
            </div>
        </>
    )
}


export default InformationDetail