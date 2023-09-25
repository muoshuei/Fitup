import{ React,  useState, useEffect } from 'react';
import usericon from './images/usericon.png';
import infobg from './images/infobg.png'
import './MyInfo.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const MyInfo = () => {

    const [data, setData] = useState({
        bmi: 0,
        name: "",
        gender: "",
        height: 110,
        weight: 50,
        age: 18,
    });
    const userData = useSelector((state) => state.auth?.userData)

    useEffect(() => {
        setData(userData);
    }, []);
    const navigate = useNavigate();
    return (
        <div>
            <img src={infobg} className="info-background-image" alt='info_background'></img>
            <div  className='wrapper  d-flex align-items-center  w-100'>
                <div className='basic-information '>
                    <div class='InfoTitle'>基本資料</div>
                     
                    <div class='InfoTop'>
                        <img src={usericon} class='InfoIcon' alt='usericon'></img>
                        <div style={{fontSize: '30px'}}>{data.name}</div>
                    </div>
                    <div className='form-group  was-validated mb-2'>
                        <table className="info_table">
                            <tbody>
                                <tr>
                                    <td className='Infoline'>• 生理性別 :</td>
                                    <td className='info_data'>
                                        {data.gender}
                                    </td>                        
                                </tr>
                                <tr>
                                    <td className='Infoline'>• 電子信箱 :</td>
                                    <td className='info_data'>
                                        {data.account}
                                    </td>
                                </tr>
                                <tr>
                                    <td className='Infoline'>• 身高   :</td>
                                    <td className='info_data'>
                                        {data.height}公分
                                    </td>
                                </tr>
                                <tr>
                                    <td className='Infoline'>• 體重 :</td>
                                    <td className='info_data'>
                                        {data.weight}公斤
                                    </td>
                                </tr>
                                <tr>
                                    <td className='Infoline'>• 年齡 :</td>
                                    <td className='info_data'>
                                        {data.age}歲
                                    </td>
                                </tr>
                                <tr>
                                    <td className='Infoline'>• BMI :</td>
                                    <td className='info_data'>
                                        {data.bmi}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <br/>
                        <button class='InfoEditButton' onClick={() => navigate('/changeinfo')}>修改資料</button>
                    </div>        
                </div>
            </div>
        </div>
    );
}
export default MyInfo;