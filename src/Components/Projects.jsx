import React from 'react'

const Projects = () => {
  return (
    <div>
        <div className="bg-indigo-900 text-center md:py-4 lg:px-4">
            <div className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex flex-col" role="alert">
              <span className="flex rounded-full bg-indigo-500 uppercase px-3 py-1 text-2xl font-bold mr-3">Recent Projects </span>
            </div>
        </div>
       <div>
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
   
        <div className="rounded overflow-hidden shadow-lg transform transition duration-500 hover:scale-110">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">SAP PI/PO to SAP Integration Suite Migration</div>
              <p className="text-gray-700 text-base">
              Description: <br/> Successfully led the migration of existing SAP Process Integration/Process Orchestration (SAP PI/PO) interfaces to the SAP Integration Suite, ensuring minimal downtime and enhanced functionality. The project involved analyzing legacy integration scenarios, redesigning workflows, and leveraging advanced features of the SAP Integration Suite to optimize performance and scalability.
              </p>
            </div>
            <div className="px-6 pt-2 pb-2">
            Key Achievements:
            <br/>
             Migrated over 80 interfaces.<br/>
             Utilized SAP Integration Suite’s cloud-based capabilities to improve system reliability and scalability.<br/>
             Enhanced system performance by implementing modern integration patterns and adapters.<br/>
             Provided detailed documentation and user training for seamless adoption.<br/>
            </div>
          </div>

          <div className="rounded overflow-hidden shadow-lg transform transition duration-500 hover:scale-110">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2"> SAP PI/PO to SAP Integration Suite Migration</div>
              <p className="text-gray-700 text-base">
              Description:
              <br/>
              Executed an advanced implementation of SAP PI/PO migration to the SAP Integration Suite for a large enterprise client. This project involved implementing cloud integration capabilities, setting up secure connectivity between on-premise and cloud systems, and ensuring compliance with industry standards.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
            Key Achievements:
            <br/>
            Established hybrid integration scenarios for seamless on-premise-to-cloud connectivity.<br/>
            Integrated multiple SAP and non-SAP systems, including S/4HANA, Salesforce, and third-party applications.<br/>
            Designed and implemented robust monitoring and error-handling mechanisms using SAP Integration Suite’s tools.<br/>
            Achieved a 25% reduction in interface maintenance costs post-migration.<br/>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-110">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">PI/PO Interfaces Development</div>
              <p className="text-gray-700 text-base">
              Description:
              <br/>
              Designed and developed custom SAP PI/PO interfaces to address complex business requirements. The project involved creating integration flows for data synchronization across systems, implementing secure communication protocols, and ensuring high system availability and performance.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
            Key Achievements:
            <br/>
            Developed over 20 end-to-end interfaces using various adapters (e.g., REST, SOAP, SFTP, IDoc).<br/>
            Implemented advanced error-handling and retry mechanisms for mission-critical processes.<br/>
            Optimized integration workflows, reducing processing time by 30%.<br/>
            Ensured high-quality deliverables by performing comprehensive testing and validation.<br/>
            </div>
          </div>

          <div className="rounded overflow-hidden shadow-lg transform transition duration-500 hover:scale-110">
            <img className="w-full" src="/Audiobuddy.png" alt="Audiobuddy" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">AudioBuddy</div>
              <p className="text-gray-700 text-base">
                A web application which extract the text from any image and convert that text into a voice which can be listen anytime and anywhere you want in no time.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Live</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Github</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Buymecoffee</span>
            </div>
          </div>

          <div className="rounded overflow-hidden shadow-lg transform transition duration-500 hover:scale-110">
            <img className="w-full" src="/kryptverse.png" alt="River" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">CryptoVerse</div>
              <p className="text-gray-700 text-base">
                A Decentralized web application by which users can transfer the real Ethers from one account to another account from any part of the world to anyone who is on the same blockchain network. also users can also keep track of changing values of 20+ cryptocurrencies in real time.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Live</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Github</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Buymecoffee</span>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-110">
            <img className="w-full" src="/playground.png" alt="Forest" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">GCOEA PlayGround</div>
              <p className="text-gray-700 text-base">
                A web application which is helpful in realtime tracking and maintaining the any types of college sports activities from any part the world.  
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Live</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Github</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Buymecoffee</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Projects