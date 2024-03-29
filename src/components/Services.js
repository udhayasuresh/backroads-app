import React from 'react'
import Title from './Title'
import { services } from '../data'
import Service from './Service'

const Services = () => {
  return (
    <section class="section services" id="services">
        <Title title='our' subTitle='services'/>
      
      <div class="section-center services-center">
        {services.map((service)=>{
            return <Service key={service.id} {...service} />
        })}
        

        <article class="service">
          <span class="service-icon"><i class="fas fa-tree fa-fw"></i></span>
          <div class="service-info">
            <h4 class="service-title">endless hiking</h4>
            <p class="service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.
            </p>
          </div>
        </article>

        <article class="service">
          <span class="service-icon"><i class="fas fa-socks fa-fw"></i></span>
          <div class="service-info">
            <h4 class="service-title">amazing comfort</h4>
            <p class="service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Services