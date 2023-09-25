import React, { useState } from 'react';
import Back from './images/Back.png';
import infobg from './images/infobg.png'
import './MyInfo.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserDataAction } from '../../redux/actions/authActions';
const Changeinfo = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        height: '',
        weight: '',
      });
    const [showPopup, setShowPopup] = useState(false);
    const userData = useSelector((state) => state.auth?.userData)
    const handleSave = async () => {
        // let obj = {
        //     height: formData.height,
        //     weight: formData.weight,
        //     user_id: userData.id
        // };
        
        //  const data = await changeUserInfoData(obj);
        let obj = {
            ...userData,
            height: formData.height,
            weight: formData.weight
        }
        await dispatch(updateUserDataAction(obj))
        setShowPopup(true);
     } 
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }
    const navigate = useNavigate();
    return (
        <div>
            <img src={infobg} className="info-background-image" alt="info_background"></img>
            <div  className='wrapper  d-flex align-items-center  w-100'>
                <div className='change-information '>
                    <div class='InfoTop'>
                        <div class='Back' onClick={()=>navigate(-1)}>
                            <img src = { Back } alt='return'></img>
                        </div>
                    </div>
                     <div class='InfoBot'>
                        <table className='info_table'>
                            <tbody>                   
                                <tr>
                                    <td class='Infoline'>• 身高 :</td>
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
                                        <span style={{fontSize:'16px', fontWeight: 'bold'}}>  公分</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class='Infoline'>• 體重 :</td>
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
                                        <span style={{fontSize: '16px', fontWeight: 'bold'}}>  公斤</span>
                                    </td>
                                </tr>
                            </tbody>  
                        </table>
                        <br/>
                        <button class='InfoEditButton' onClick={handleSave}>儲存資料</button>
                        {showPopup && (
                            <div className="popup">
                            <div className="popup-content">
                                <p>修改資料成功!</p>
                                <button onClick={()=>navigate('/home')}>返回主畫面</button>
                            </div>
                            </div>
                        )}
                    </div>        
                </div>
            </div>
        </div>
    );
}
export default Changeinfo;