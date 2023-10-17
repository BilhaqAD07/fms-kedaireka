'use client'
import { useState } from 'react'
import * as XLSX from 'xlsx'

const fileExtension = ['xlsx', 'xls', 'csv']

interface neededDataInterface {
  Responden?: string
  Q8?: number
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const neededData: neededDataInterface[] = []

export default function FileInput () {
  const [colDefs, setColDefs] = useState<Array<{ title: string, field: string }>>([])
  const [data, setData] = useState<any[]>([])

  const getExtension = (file: any) => {
    const parts = file.name.split('.')
    const extension = parts[parts.length - 1]
    return fileExtension.includes(extension)
  }

  const importExcel = (e: any) => {
    const file = e.target.files[0]

    const reader = new FileReader()
    reader.onload = (event: any) => {
      const bstr = event.target.result
      const workBook = XLSX.read(bstr, { type: 'binary' })
      const workSheetName = workBook.SheetNames[0]
      const workSheet = workBook.Sheets[workSheetName]
      const fileData = XLSX.utils.sheet_to_json(workSheet, { header: 1 })

      setData(fileData)
    }

    if (file) {
      if (getExtension(file)) {
        reader.readAsBinaryString(file)
      } else {
        alert('Invalid file input, Please select Excel or CSV file')
      }
    } else {
      setData([])
      setColDefs([])
    }
  }
  data.splice(0, 1)
  // eslint-disable-next-line array-callback-return
  // data[0].map((data: any) => { console.log(data) })
  // eslint-disable-next-line prefer-const, @typescript-eslint/no-for-in-array
  for (let i in data) {
    const newData: neededDataInterface = {
      Responden: data[i][1],
      Q8: data[i][10]
    }
    neededData.push(newData)
  }

  console.log(neededData)

  return (
    <div className="min-h-screen w-screen bg-primary_blue text-white px-5">
      <div className="flex flex-col mb-5">
        <label htmlFor="input">Input Excel</label>
        <input type="file" id="" onChange={importExcel} />
      </div>

      <table className="table-auto border border-separate">
        <thead>
          <tr>
            <th className='border py-2 px-2'>Responden</th>
            <th className='border py-2 px-2'>Q8</th>
          </tr>
        </thead>
        <tbody>
          {neededData.map((row, index) => (
            <tr key={index}>
              <td className='border py-2 px-2'>
                {row.Responden}
              </td>
              <td className='border py-2 px-2'>
                {row.Q8}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
