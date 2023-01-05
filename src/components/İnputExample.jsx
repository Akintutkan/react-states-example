 import {useState} from 'react'

// const İnputExample = () => {
//     const [name,setName] =useState("")
//     const [surname,setSurname] =useState("")

//     const onChangeSurname = (event) => setName(event.target.value) //içeride yazmak yerine dışarıda yazdık hepsi bu
//   return (
//     <div>
//         Please enter a name <br/>
//         <input value={name} onChange={(event) =>setName(event.target.value)} />

//         Please enter a surname <br/>
//         <input value={surname} onChange={onChangeSurname} />

// {name} {surname}
//     </div>
//   )
// }

// export default İnputExample

//! yukarıdaki gibi tekli inputlara yönelmek yerine bu şekilde tek tek formlara gitmek yerine tek bir state tanımıyla çözdük
import React from 'react'

const İnputExample = () => {
    const [form, setForm] = useState({name:"",surname:""})
    const onChangeForm = (e) => setForm({...form,[e.target.name]: e.target.value})
  return (
    <div>
        Please enter a name <br/>
     <input name="name" value={form.name} onChange={onChangeForm} />
        Please enter a surname <br/>
     <input name="surname" value={form.surname} onChange={onChangeForm} />
    
     {form.name} {form.surname}</div>
  )
}

export default İnputExample