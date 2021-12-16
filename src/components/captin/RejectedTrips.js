import React from 'react'
import { strings } from '../../Localization/languages'
import Table from '../../shared/ui/Table'

const RejectedTrips = () => {
  return (
    <div>
      <p className='title-added'>{strings.RejectedTrips}</p>
      <Table
        head={[
          strings.Id,
          strings.TripNumber,
          strings.status,
          strings.CreatedAt,
        ]}
      />
    </div>
  )
}

export default RejectedTrips
