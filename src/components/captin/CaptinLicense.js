import React from 'react'
import { useTranslation } from 'react-i18next'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import ImagePicker from '../../shared/formElements/ImgPicker/ImgPicker'
import Button from '../../shared/formElements/Button'
// import { validateImage } from '../../utils/functions'

// const schema = yup.object({
//   drivingLicenseFront: yup
//     .mixed()
//     .required('Required')
//     .test('fileSize', 'max size 4mb', (value) => validateImage(value)),
// })

const CaptinLicense = () => {
  const { t } = useTranslation()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // resolver: yupResolver(schema),
  })
  const onSubmit = (data) => console.log(data)

  return (
    <div className='w-full'>
      <p className='title-added'>{t('Captin license img')}</p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='shadowed-container-added p-4'
      >
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 '>
          <Controller
            name='drivingLicenseFront'
            control={control}
            render={({ field }) => (
              <ImagePicker
                label={t('Driving License Front')}
                id='driving-license-front'
                name='drivingLicenseFront'
                {...field}
              />
            )}
          />

          <ImagePicker label={t('Driving License Back')} />
          <ImagePicker label={t('Driver Photo')} />
          <ImagePicker label={t('Car Image With Plate Number')} />
          <ImagePicker label={t('Car License Photo Front')} />
          <ImagePicker label={t('Car License Photo Back')} />
          <ImagePicker label={t('Driving License Number')} />
          <ImagePicker label={t('Driving License Number')} />
          <ImagePicker label={t('National Id Number')} />
          <ImagePicker label={t('National Id Photo Front')} />
          <ImagePicker label={t('National Id Photo Back')} />
        </div>
        <div className='mx-auto max-w-min mt-4'>
          <Button type='submit'>{t('Submit')}</Button>
        </div>
      </form>
    </div>
  )
}

export default CaptinLicense
