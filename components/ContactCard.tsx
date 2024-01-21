import React from 'react'
import ContactCardSingle from './ContactCardSingle'

const ContactCard = () => {
  return (
    <div className='max-container padding-container py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            <ContactCardSingle title='Email' content='cyberspector@gmail.com' />
            <ContactCardSingle title='Phone' content='+250 788888888' />
            <ContactCardSingle title='Address' content='Cyberspector, 1234, paris, france' />
            <ContactCardSingle title='Country' content='France, Rwanda, Benin' />
    </div>
  )
}

export default ContactCard