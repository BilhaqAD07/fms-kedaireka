'use client'
import { useState } from 'react'
import * as XLSX from 'xlsx'

const fileExtension = ['xlsx', 'xls', 'csv']

export default function FileInput () {
  const [colDefs, setColDefs] = useState<Array<{ title: string, field: string }>>([])
  const [data, setData] = useState<any[]>([])

  const getExtension = (file: any) => {
    const parts = file.name.split('.')
    const extension = parts[parts.length - 1]
    return fileExtension.includes(extension)
  }

  const convertToJson = (headers: string[], data: any[][]) => {
    const rows: any[] = []
    data.forEach((row: any[]) => {
      const rowData: any = {}
      row.forEach((element, index) => {
        rowData[headers[index]] = element
      })
      rows.push(rowData)
    })
    return rows
  }

  const importExcel = (e: any) => {
    const file = e.target.files[0]

    const reader = new FileReader()
    reader.onload = (event: any) => {
      const bstr = event.target.result
      const workBook = XLSX.read(bstr, { type: 'binary' })
      const workSheetName = workBook.SheetNames[0]
      const workSheet = workBook.Sheets[workSheetName]
      const fileData: any[] = XLSX.utils.sheet_to_json(workSheet, { header: 1 })

      const headers: string[] | any = fileData[0]
      console.log(headers)
      const heads = headers.map((head: string) => ({ title: head, field: head }))
      setColDefs(heads)

      fileData.splice(0, 1)
      setData(convertToJson(headers, fileData))
    }

    if (file) {
      if (getExtension(file)) {
        reader.readAsBinaryString(file)
      } else {
        alert('Invalid file input, Select Excel, CSV file')
      }
    } else {
      setData([])
      setColDefs([])
    }
  }

  return (
    <div className="min-h-screen w-screen bg-primary_blue text-white px-5">
      <div className="flex flex-col mb-5">
        <label htmlFor="input">Input Excel</label>
        <input type="file" id="" onChange={importExcel} />
      </div>

      <table className="table-auto border border-separate">
        <thead>
          <tr>
            {colDefs.map((col, index) => (
              <th key={index} className="border px-2 py-2">
                {col.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {colDefs.map((col, colIndex) => (
                <td key={colIndex} className="border px-2 py-2">
                  {row[col.field]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
