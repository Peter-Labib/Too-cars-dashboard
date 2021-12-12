import React from 'react'
import Table from '../../shared/ui/Table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'
import { strings } from '../../Localization/languages'
import DropDownSelect from '../../shared/ui/DropDownSelect'

const TripsControl = () => {
  return (
    <div>
      <p className='title-added'>{strings.TripsControl}</p>
      <form className='py-4 mb-8'>
        <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-4 mb-4'>
          <DropDownSelect placeholder={strings.City} />
          <DropDownSelect placeholder={strings.Agency} />
          <DropDownSelect placeholder={strings.CarType} />
          <DropDownSelect placeholder={strings.CarModel} />
          <DropDownSelect placeholder={strings.Status} />
          <DropDownSelect placeholder={strings.Agency} />
          <DropDownSelect placeholder={strings.Agency} />
          <DropDownSelect placeholder={strings.Agency} />
          <DropDownSelect placeholder={strings.Agency} />
          <DropDownSelect placeholder={strings.Agency} />
          <DropDownSelect placeholder={strings.Agency} />
          <DropDownSelect placeholder={strings.Agency} />
        </div>
        <div className='flex gap-x-3 items-center'>
          <button className='transition-colors bg-green-500 hover:bg-green-700 shadow-green-500/50 shadow-sm px-3 py-1 text-white rounded-md'>
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <button className='transition-colors bg-red-500 hover:bg-red-700 px-3.5 shadow-sm shadow-red-500/50 py-1 text-white rounded-md'>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      </form>
      <Table
        head={[
          strings.TripNumb,
          strings.City,
          strings.ClientName,
          strings.Status,
          strings.CreatedAt,
          strings.Car,
          strings.Distance,
          strings.Edit,
          strings.Chat,
        ]}
        body={[
          {
            tripNumb: '1598431458',
            city: 'New York',
            client: 'ahmed',
            status: 'waiting',
            createdAt: '8/8/2021',
            car: 'verna',
            distance: '0',
          },
        ]}
        chat
        edit
      />
    </div>
  )
}

export default TripsControl
