import React, { useEffect, useState } from 'react';
import Back from './MyInfoPic/Back.png';
import './MyInfo.css';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
const Changeinfo = () => {
    const [formData, setFormData] = useState({
        height: '',
        weight: '',
      });
    const [showPopup, setShowPopup] = useState(false);
    const handleSave = async () => {
        // 从 Cookie 中读取 JSON 数据
        const storedUserData = Cookies.get('userData');
        // 将从 Cookie 中读取的数据反序列化为 JSON 对象
        const parsedUserData = JSON.parse(storedUserData);
        var obj = {
           height: formData.height,
           weight: formData.weight,
           id: parsedUserData.info_id
        };
        console.log(obj);
        const response = await fetch(
             "/changeinfo",
             {
                 method: "POST",
                 body: JSON.stringify(obj),
                 headers: {
                     "Content-Type": "application/json"
                 }
             }
         )
         const data = await response.json();
         console.log("成功啦!");
         setShowPopup(true);
         const dataToStore ={info_id :data.id,height :data.height,weight:data.weight,age:data.age,gender:data.gender,name:data.name};
         Cookies.set('userData', JSON.stringify(dataToStore), { expires: 7 });
     } 
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }
    return (
        <div class='container'>
            <div class='Back'>
                <Link to="/info">
                    <img src = { Back }></img>
                </Link>
            </div>
            <div class='InfoTitle'>基本資料</div>
            <div class='InfoState'>                
                <div class='InfoTop'>
                </div>
                <div class='InfoBot'>
                    <table>                        
                        <tr>
                            <td class='Infoline'>身高:</td>
                            <td style={{textAlign: 'left'}}>
                            <select
        id='height'
        name='height'
        value={formData.height}
        onChange={handleChange}
        required
        style={{ width: '50%' }}
    >
        <option value=''></option>
        {Array.from({ length: 171}, (_, index) => index + 80).map((number) => (
        <option key={number} value={number}>
            {number}
        </option>
        ))}
    </select>
                                <span style={{fontSize: '20px', fontWeight: 'bold'}}>  公分</span>
                            </td>
                        </tr>
                        <tr>
                            <td class='Infoline'>體重:</td>
                            <td style={{textAlign: 'left'}}>
                            <select
        id='weight'
        name='weight'
        value={formData.weight}
        onChange={handleChange}
        required
        style={{ width: '50%' }}
    >
        <option value=''></option>
        {Array.from({ length: 150 }, (_, index) => index + 1).map((number) => (
        <option key={number} value={number}>
            {number}
        </option>
        ))}
    </select>
                                <span style={{fontSize: '20px', fontWeight: 'bold'}}>  公斤</span>
                            </td>
                        </tr>
                    </table>
                        <button class='InfoEditButton'  onClick={handleSave}>儲存資料</button>
                        {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>修改資料成功!</p>
            <Link to="/home">
            <button >返回主畫面</button>
            </Link>
          </div>
        </div>
      )}
                </div>        
            </div>
        </div>
    );
}
export default Changeinfo;