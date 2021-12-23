import React, { useState, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import Lightbox from 'react-image-lightbox'
import styles from './ImgPicker.module.scss'
import 'react-image-lightbox/style.css'

const ImgPicker = React.forwardRef(
  ({ label, name, onChange, id, error, small }, ref) => {
    const [lightboxOpen, setLightboxOpen] = useState(false)
    const [file, setFile] = useState([])

    const { getInputProps } = useDropzone({
      accept: 'image/*',
      maxFiles: 1,
      onDrop: (acceptedFiles) => {
        setFile(
          acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          )
        )
      },
      maxSize: 3_000_000,
      multiple: false,
    })

    useEffect(() => {
      URL.revokeObjectURL(file)
    }, [file])

    // const filePickerRef = useRef()

    const pickImageHandler = () => {
      // filePickerRef.current.click()
    }

    const closeLightbox = () => {
      setLightboxOpen(false)
    }

    const openLightbox = () => {
      setLightboxOpen(true)
    }

    const removeImg = () => {
      setFile([])
    }

    return (
      <div className=''>
        {lightboxOpen && (
          <Lightbox mainSrc={file[0].preview} onCloseRequest={closeLightbox} />
        )}
        <label className='truncate ' htmlFor={id}>
          {label}
        </label>
        <div
          className={`relative rounded-md mt-1 bg-secondary-100/40 ${
            small ? styles.smallHeight : 'py-2'
          } overflow-hidden bg-s`}
          // {...getRootProps({ onDrop: () => setRemoved(false) })}
        >
          <input
            type='file'
            id={id}
            ref={ref}
            {...getInputProps()}
            style={{ display: 'inline' }}
          />
          <div className='absolute inset-0 bg-white pointer-events-none'></div>
          <div
            className='absolute grid place-items-center inset-0  bg-secondary-100/40 pointer-events-none'
            onClick={pickImageHandler}
          >
            {file.length > 0 ? (
              <React.Fragment>
                <div
                  className={`${styles.close_scss} z-10 close-scss bg-red-600 text-white cursor-pointer pointer-events-auto w-3 h-3 transform -translate-y-full -translate-x-full rounded-sm absolute grid place-content-center text-xs`}
                  onClick={removeImg}
                >
                  <span>x</span>
                </div>
                <div
                  className={`${styles.img_scss} img-scss w-6 h-6 overflow-hidden rounded-sm cursor-pointer pointer-events-auto`}
                  onClick={openLightbox}
                >
                  <img
                    src={file[0].preview}
                    alt={label}
                    className='object-cover w-full h-full'
                  />
                </div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <p className='text-gray-400 text-center'>
                  Choose file
                </p>
              </React.Fragment>
            )}
          </div>
        </div>
        <p className='error-text'>{error}</p>
      </div>
    )
  }
)

export default ImgPicker
