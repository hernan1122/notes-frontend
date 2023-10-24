import React, { useEffect, useRef, useState } from 'react';

const Camera = () => {
  const videoRef = useRef(null)
  const canvasRef = useRef(null)
  const [photoUrl, setPhotoUrl] = useState(null)
  const [showImg, setShowImg] = useState(false)
  const [facingMode, setFacingMode] = useState('environment')
  console.log('1', facingMode)

  useEffect(() => {
    const initCamera = async () => {
      try {
        const constraints = {video: {facingMode}}
        const stream = await navigator.mediaDevices.getUserMedia(constraints)
        //const stream = await navigator.mediaDevices.getUserMedia({video: {facingMode: 'environment'}})
        if (videoRef.current) {
          videoRef.current.srcObject = stream
        }
      } catch (error) {
        console.error('Error accessing camera: ', error)
      }
    }

    initCamera()
  }, [])

  const switchCamera = () => {
    setFacingMode(facingMode === 'user' ? 'environment' : 'user')
    console.log('cambio de camara,', facingMode)
  }

  const takePhoto = () => {
    if (videoRef.current) {
      const canvas = canvasRef.current
      const context = canvas.getContext('2d')
      context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height)
      
      // Convert the canvas content to a data URL and set it as the photo URL
      const photoDataUrl = canvas.toDataURL('image/jpeg')
      setPhotoUrl(photoDataUrl)
      setShowImg(true)
    }
  }

  const deletePhoto = () => {
    setPhotoUrl(null)
    setShowImg(false)
  }

  const downloadPhoto = () => {
    if (photoUrl) {
      const a = document.createElement('a')
      a.href = photoUrl
      a.download = 'photo.jpg'
      a.click()
    }
  }

  return (
    <div>
      <video ref={videoRef} autoPlay></video>
      <button
        className='my-3 px-4 py-2 text-white font-medium rounded-lg bg-black hover:bg-yellow-400 hover:text-black transition-all duration-300'
        onClick={takePhoto}
      >
        Tomar foto
      </button>
      <div className={`${showImg ? 'opacity-1' : 'opacity-0'}`}>
        <canvas ref={canvasRef} width={640} height={480} style={{ display: 'none' }}></canvas>
        <img src={photoUrl} alt="Foto tomada" />
        <div className='flex gap-3'>
          <button
            className='my-3 px-4 py-2 text-white font-medium rounded-lg bg-black hover:bg-yellow-400 hover:text-black transition-all duration-300'
            onClick={downloadPhoto}
          >
            Descargar foto
          </button>
          <button
            className='my-3 px-4 py-2 text-white font-medium rounded-lg bg-red-500 hover:bg-red-600 hover:text-white transition-all duration-300'
            onClick={deletePhoto}
          >
            Eliminar foto
          </button>

          <button
          className=' h-12 px-6 text-white font-bold tracking-tighter rounded-lg bg-black hover:bg-yellow-400 hover:text-black transition-all duration-300'
          onClick={switchCamera}
          type='button'
        >
          Cambiar camara
        </button>

        </div>
      </div>
    </div>
  );
}

export default Camera;






/* import React, { useEffect, useRef } from 'react';

const Camera = () => {
  const videoRef = useRef(null)

  useEffect(() => {
    const initCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true })
        if (videoRef.current) {
          videoRef.current.srcObject = stream
        }
      } catch (error) {
        console.error('Error accessing camera: ', error)
      }
    }

    initCamera()
  }, [])

  return (
    <div>
      <video ref={videoRef} autoPlay></video>
    </div>
  );
}

export default Camera; */
