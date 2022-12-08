import {useState} from "react"; //öncelikle use state Hook'unu import ettik


function App() {
  const [name,setName] = useState("Akın") //fonksiyonumuzda useState 2 parametre alır genel kullanım ... , set... gibi USeState ilk parametreti tutar 
  //returnün içerisinde 2. parametreyi değiştirmemizi sağlar
  const [age,setAge] =useState(28)
  const [friends,setFriends] = useState(["Burak","Mehmet"])
  const [address, setAddress] = useState({title:"İstanbul", zip:34104})
  return (
    <div className="App">
  <h1>Merhaba {name}!</h1>
  <h2>{age}</h2>
  <button onClick={()=> setName("Ahmet")}>Change Name</button> 
  {/*onClick metodu yardımıyla butona basılması ile değişikliği set etmiş olduk */}
  <button onClick={()=> setAge("29")}>Change Age</button>
    
    <hr />
    <br></br>
    {friends.map((friend,index) =>(
      <div key={index}> {friend}
      </div>
      ))}
      {/* <button onClick={()=> setFriends("Ayşe")}>Add New Friends</button>  bu kod çalışmayacaktır çünkü array içerisine string ifaede göndermeye çalıştık */}
      <button onClick={()=> setFriends([...friends,"Eda"])}>Add New Friends</button> {/*... rest operatörü olmasaydı sadece ayşe eklenecekti rest operatörü sayesinde 
      hem ilk değerler korundu hemde yeni ekleme yapıldı */}
    <br></br>
    <h2>Address</h2>
    <div>
      {address.title}   {address.zip}
      <br></br>
      {/*<button onClick={()=> setAddress({title: "Ankara" ,zip:34111})}> Adres değiştir</button>*/} {/* şu haliyle değişikliği yapacaktır. Ancak zip olmasaydı sadece title değişecekti diğer değeri atacaktı*/}
      <button onClick={()=> setAddress({...address, title: "Ankara"})}> Adres değiştir</button>
    </div>
    </div>

  );
}

export default App;
