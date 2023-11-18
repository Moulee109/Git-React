import {useState} from 'react'
import { Autocomplete,TextField} from '@mui/material'
export default function AutoCom() {
  const cities = ['Chennai','Coimbatore','Madurai','Tirupur']
  const[val,setVal] = useState<string|null>(null)
  console.log({val})
  return (
    <div>
      <Autocomplete
        options={cities}
        renderInput={params=><TextField {...params} label="Cities"/>}
        value={val}
        onChange={(event:any,newValue:string|null)=>setVal(newValue)}
        freeSolo
      />
    </div>
  )
}