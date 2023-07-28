import Service from './Service'
import Title from './Title'
import { services } from '../data'

const Services = () => {
    return (
        <section className="section services" id="services">
            <div className="section-title">
                <Title title="our" subTitle="services" />
            </div>
            <div className="section-center services-center">
                {services.map((service) => {
                    return <Service {...service} key={service.id} />
                })}
            </div>
        </section>
    )
}

export default Services
