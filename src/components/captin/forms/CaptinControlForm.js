import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { strings } from '../../../Localization/languages'
import Input from '../../../shared/formElements/Input'
import DropSelect from '../../../shared/formElements/DropSelectW/DropSelectW'
import DateSelect from '../../../shared/formElements/DateSelect'
import SearchBtn from '../../../shared/formElements/SearchBtn'
import ResetBtn from '../../../shared/formElements/ResetBtn'

const CaptinControlForm = () => {
  const { control, handleSubmit, reset } = useForm()
  const onSubmit = (e) => console.log(e)
  return (
    <form className='  mt-6' onSubmit={handleSubmit(onSubmit)}>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-2.5'>
        <Controller
          name='name'
          control={control}
          render={({ field }) => (
            <Input
              blue
              name='name'
              id='captin-ctr-name'
              label={strings.Name}
              type='text'
              dir='auto'
              {...field}
            />
          )}
        />
        <Controller
          name='mobile'
          control={control}
          render={({ field }) => (
            <Input
              blue
              name='mobile'
              id='captin-ctr-mobile'
              label={strings.Mobile}
              type='text'
              dir='auto'
              {...field}
            />
          )}
        />
        <Controller
          name='email'
          control={control}
          render={({ field }) => (
            <Input
              blue
              name='email'
              id='captin-ctr-email'
              label={strings.Email}
              type='text'
              dir='auto'
              {...field}
            />
          )}
        />
        <Controller
          name='city'
          control={control}
          render={({ field }) => (
            <DropSelect
              blue
              name='city'
              id='captin-ctr-city'
              label={strings.City}
              options={[
                { value: 'a', label: 'a' },
                { value: 'b', label: 'b' },
                { value: 'c', label: 'c' },
                { value: 'd', label: 'd' },
              ]}
              {...field}
            />
          )}
        />
        <Controller
          name='birthday'
          control={control}
          render={({ field }) => (
            <DateSelect
              blue
              name='birthday'
              id='captin-ctr-birthday'
              label={strings.BirthDate}
              {...field}
            />
          )}
        />
        <Controller
          name='captinStatus'
          control={control}
          render={({ field }) => (
            <DropSelect
              blue
              name='captinStatus'
              id='captin-ctr-status'
              label={strings.CaptinStatus}
              options={[
                { value: 'a', label: 'a' },
                { value: 'b', label: 'b' },
                { value: 'c', label: 'c' },
                { value: 'd', label: 'd' },
              ]}
              {...field}
            />
          )}
        />
        <Controller
          name='captinLicense'
          control={control}
          render={({ field }) => (
            <Input
              blue
              name='captinLicense'
              id='captin-ctr-captin-license'
              label={strings.CaptinLicense}
              type='text'
              dir='auto'
              {...field}
            />
          )}
        />
        <Controller
          name='carLicense'
          control={control}
          render={({ field }) => (
            <Input
              blue
              name='carLicense'
              id='captin-ctr-car-license'
              label={strings.CarLicense}
              type='text'
              dir='auto'
              {...field}
            />
          )}
        />
        <Controller
          name='status'
          control={control}
          render={({ field }) => (
            <Input
              blue
              id='captin-ctr-status'
              label={strings.Status}
              options={[
                { value: 'a', label: 'a' },
                { value: 'b', label: 'b' },
                { value: 'c', label: 'c' },
                { value: 'd', label: 'd' },
              ]}
              type='text'
              dir='auto'
              {...field}
            />
          )}
        />
        <Controller
          name='adminActive'
          control={control}
          render={({ field }) => (
            <DropSelect
              blue
              name='adminActive'
              id='captin-ctr-admin-active'
              label={strings.AdminActivation}
              options={[
                { value: 'a', label: 'a' },
                { value: 'b', label: 'b' },
                { value: 'c', label: 'c' },
                { value: 'd', label: 'd' },
              ]}
              {...field}
            />
          )}
        />
        <Controller
          name='agency'
          control={control}
          render={({ field }) => (
            <DropSelect
              blue
              name='agency'
              id='captin-ctr-agency'
              label={strings.Agency}
              options={[
                { value: 'a', label: 'a' },
                { value: 'b', label: 'b' },
                { value: 'c', label: 'c' },
                { value: 'd', label: 'd' },
              ]}
              {...field}
            />
          )}
        />
        <Controller
          name='balace'
          control={control}
          render={({ field }) => (
            <Input
              blue
              name='balace'
              id='captin-ctr-balance'
              label={strings.Balance}
              type='text'
              dir='auto'
              {...field}
            />
          )}
        />
        <Controller
          name='minTrips'
          control={control}
          render={({ field }) => (
            <Input
              blue
              name='minTrips'
              id='captin-ctr-minTrips'
              label={strings.MinTrips}
              type='text'
              dir='auto'
              {...field}
            />
          )}
        />
        <Controller
          name='maxTrips'
          control={control}
          render={({ field }) => (
            <Input
              blue
              name='maxTrips'
              id='captin-ctr-maxTrips'
              label={strings.MaxTrips}
              type='text'
              dir='auto'
              {...field}
            />
          )}
        />
        <Controller
          name='from'
          control={control}
          render={({ field }) => (
            <DateSelect
              blue
              name='from'
              id='captin-ctr-from'
              label={strings.From}
              {...field}
            />
          )}
        />
        <Controller
          name='to'
          control={control}
          render={({ field }) => (
            <DateSelect
              blue
              name='to'
              id='captin-ctr-to'
              label={strings.To}
              {...field}
            />
          )}
        />
      </div>
      <div className='flex mt-4 gap-x-3'>
        <SearchBtn type='submit' />
        <ResetBtn onClick={() => reset()} />
      </div>
    </form>
  )
}

export default CaptinControlForm
