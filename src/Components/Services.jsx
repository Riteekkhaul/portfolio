import React from 'react';
import { FaRegPaperPlane } from 'react-icons/fa';
import { BsCodeSlash } from 'react-icons/bs';
import { AiOutlineCloudUpload } from 'react-icons/ai';

const Services = () => {
    return (
        <div className="services">
            <div className="container">
                <div clasName="flex-row text-center">
                    <div className="bg-indigo-900 text-center md:py-4 lg:px-4">
                        <div className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex flex-col" role="alert">
                            <span className="flex rounded-full bg-indigo-500 uppercase px-3 py-1 text-2xl font-bold mr-3">Services </span>
                        </div>
                    </div>
                    <div className="heading-line mb-1"></div>
                </div>
            </div>

           <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services md:mt-12 md:pt-12">
                        <div className="services__content">
                            <FaRegPaperPlane className='text-4xl font-bold text-purple-700' />
                            <h3 className='text-4xl font-bold text-purple-700'>SAP CPI Integration Services</h3>
                            <p className="lh-lg">
                            We specialize in providing seamless integration solutions to connect your business applications, ensuring efficient and reliable data exchange. 
                            <br/>
                            Our SAP CPI integration services include:
                            <br/>
                            <b>End-to-End System Integration:  </b>Connect SAP and non-SAP systems with custom-designed integration flows.<br/>
                            <b>Adapter Configuration: </b> Expertise in configuring REST, SOAP, OData, SFTP, and IDoc adapters for smooth data transfer.<br/>
                            <b>Error Handling and Monitoring: </b> Implement robust error-handling mechanisms and proactive monitoring to ensure uninterrupted operations.<br/>
                            <b>Performance Optimization: </b> Refine existing integration scenarios to maximize efficiency and scalability.<br/>
                            <b>Migration and Upgrades: </b>Migration and Upgrades: Transition legacy integrations to SAP CPI with minimal disruption to your business.<br/>
                            </p>
                            <button type="button" className="rounded-pill btn-rounded border-primary">
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services md:mt-4 text-end ">
                        <div className="services__pic transform transition duration-500 hover:scale-110">
                            <img src="/services/service-1.png" alt="marketing illustration" className="img-fluid" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services md:-mt-20 text-start">
                        <div className="services__pic transform transition duration-500 hover:scale-110">
                            <img src="/services/service-2.png" alt="web development illustration" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services md:mt-4">
                        <div className="services__content mt-4">
                            <BsCodeSlash className='text-4xl font-bold text-purple-700' />
                            <h3 className='text-4xl font-bold text-purple-700'>Full Stack Web Development Services</h3>
                            <p className="lh-lg ">
                            Delivering tailored, high-performance web applications to drive your digital transformation.
                            <br/> Our full stack development services include:
                            <br/>
                            <b>Custom Web Application Development: </b> Build dynamic and responsive web applications tailored to your business needs.<br/>
                            <b>Frontend Development:</b> Create user-centric interfaces using modern frameworks like React, Angular, and Vue.js.<br/>
                            <b>Backend Development:</b> Design robust server-side logic with Node.js, Python, or Java to power your applications.<br/>
                            <b>Database Management:</b> Implement secure and efficient databases with MySQL, MongoDB, or PostgreSQL.<br/>
                            <b>API Integration:</b> Seamlessly integrate third-party APIs to extend your application’s functionality.<br/>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
                        <div className="services__content">
                            <AiOutlineCloudUpload className='text-4xl font-bold text-purple-700' />
                            <h3 className='text-4xl font-bold text-purple-700'>Why Choose Us?</h3>
                            <p className="lh-lg">
                             With expertise in SAP CPI and Full Stack Development, we combine technical excellence with a deep understanding of business processes to deliver solutions that empower your organization.
                             Whether it's streamlining integrations or creating engaging web applications, we’re committed to achieving your goals.
                            </p>
                            <button type="button" className="rounded-pill btn-rounded border-primary">Learn more
                                <span><i className="fas fa-arrow-right"></i></span>
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services -mt-12 text-end">
                        <div className="services__pic transform transition duration-500 hover:scale-110">
                            <img src="/services/service-3.png" alt="cloud hosting illustration" className="img-fluid" />
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    )
}

export default Services