import React from 'react'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar } from '@fortawesome/free-solid-svg-icons'
import Dropdown from '../../shared/formElements/Dropdown'
import DropSelectW from '../../shared/formElements/DropSelectW/DropSelectW'
// import ImgPicker from '../../shared/ui/ImgPicker/ImgPicker'
import IconedInput from '../../shared/formElements/IconedInput'
import Button from '../../shared/formElements/Button'
import ImgPicker from '../../shared/formElements/ImgPicker/ImgPicker'

const schema = yup.object({
  carModel: yup.string().required('Required'),
  carColor: yup.string().required('Required'),
  productionDate: yup.string().required('Required'),
  arabicCarNumber: yup.string().required('Required'),
  englishCarNumber: yup.string().required('Required'),
})

const EditCpatinCar = () => {
  const { t } = useTranslation()
  const { handleSubmit, register } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) => console.log(DataTransfer)

  return (
    <div className='w-full '>
      <p className='title-added text-main'>{t('Car Edit')}</p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='shadowed-container-added p-4 '
      >
        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 '>
          <div className='h-20'>
            <DropSelectW blue name='Car-model' label={t('Car model')} />
          </div>
          <DropSelectW blue name='Car-model' label={t('Car color')} />
          <DropSelectW blue name='Car model' label={t('Production date')} />
          {/* <ImgPicker label={strings.CarImg} small /> */}
          <ImgPicker label={t('Car img')} small />
          <IconedInput
            {...register('arabicCarNumber')}
            type='text'
            label={t('Arabic car number')}
          >
            <FontAwesomeIcon icon={faCar} className='text-main' />
          </IconedInput>
          <IconedInput
            {...register('englishCarNumber')}
            type='text'
            label={t('English car number')}
          >
            <FontAwesomeIcon icon={faCar} className='text-main' />
          </IconedInput>
        </div>
        <div className='mx-auto max-w-min mt-4'>
          <Button type='submit'>{t('Submit')}</Button>
        </div>
      </form>
    </div>
  )
}

export default EditCpatinCar
