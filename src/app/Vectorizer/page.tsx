'use client'
import React, { useState } from 'react'
import ImageTracer from 'imagetracerjs'
import Img from 'next/image'

function Vectorizer () {
  const [files, setFiles] = useState<File[]>()
  const [svgData, setSvgData] = useState<string | null>()
  const [selectedImage, setSelectedImage] = useState<string | null>()

  const convertToSvg = async (file: File) => {
    const img = new Image()
    img.src = URL.createObjectURL(file)
    setSelectedImage(URL.createObjectURL(file)) // Mengatur URL gambar yang digunakan oleh Image

    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = img.width
      canvas.height = img.height
      const context = canvas.getContext('2d')
      context?.drawImage(img, 0, 0)

      const imageData = context?.getImageData(0, 0, img.width, img.height)

      if (imageData) {
        const options = {
          ltres: 1,
          qtres: 1,
          pathomit: 8,
          rightangleenhance: true
          // Atur opsi konversi sesuai kebutuhan Anda
        }

        const svg = ImageTracer.imagedataToSVG(imageData, options)
        console.log('SVG hasil konversi: ', svg)
        setSvgData(svg)
      }
    }
  }

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    // Check if event.target.files is not null
    if (event.target.files) {
      const selectedFiles = Array.from(event.target.files)
      setFiles(selectedFiles)

      // Convert selected files to SVG
      for (const file of selectedFiles) {
        await convertToSvg(file)
      }
    }
  }

  return (
    <div className='bg-primary_blue min-h-screen text-white px-8 py-4'>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          // Handle form submission if needed
        }}
      >
        <input
          id="file"
          name="file"
          type="file"
          multiple
          required
          accept="image/jpeg, image/png, image/webp, image/gif, image/svg+xml, image/heic"
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onChange={handleFileChange}
        />
      </form>
      <div className="flex flex-wrap gap-4">
        {selectedImage && (
          <div className=' w-64 h-64 border border-black'>
            <h2>Gambar yang Dipilih</h2>
            <Img src={selectedImage} alt="Selected Image" width={400} height={400} />
          </div>
        )}

        {svgData && (
          <div className=' w-64 h-64 border border-black'>
            <h2>Hasil Konversi Gambar ke SVG</h2>
            {/* Tampilkan gambar SVG di sini */}
            <div className=' object-contain' dangerouslySetInnerHTML={{ __html: svgData }} />
          </div>
        )}
      </div>
    </div>
  )
}

export default Vectorizer
