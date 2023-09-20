import{ React,  useState, useEffect } from 'react';
import usericon from './images/usericon.png';
import './MyInfo.css';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
const MyInfo = () => {

    const [bmi, setbmi] = useState(10);
    const [name, setname] = useState("某某某");
    const [gender, setgender] = useState('男性');
    const [height, setheight] = useState(180);
    const [weight, setweight] = useState(65);
    const [age, setage] = useState(22);
    const [mail, setmail] = useState("abc@mail.com");

    useEffect(() => {
      // 从 Cookie 中读取 JSON 数据
      const storedUserData = Cookies.get('userData');
      
      if (storedUserData) {
        // 将从 Cookie 中读取的数据反序列化为 JSON 对象
        const parsedUserData = JSON.parse(storedUserData);
        if( parsedUserData.gender==="male")
          parsedUserData.gender="男性";
        else
          parsedUserData.gender="女性";
        const cleanedName = parsedUserData.name.replace(/"/g, '');
        setname(cleanedName);
        const cleanedgender = parsedUserData.gender.replace(/"/g, '');
        setgender(cleanedgender);
        setheight(parsedUserData.height);
        setweight(parsedUserData.weight);
        setage(parsedUserData.age);
        const cleanedmail = parsedUserData.info_id.replace(/"/g, '');
        setmail(cleanedmail);
        let bmi1 = Math.round(parsedUserData.weight / Math.pow(parsedUserData.height/100, 2) *100) / 100;
        setbmi(bmi1);
      }
      
    }, []);

    return (
        <div class='container'>
            <div class='InfoTitle'>基本資料</div>
            <div class='InfoState'>                
                <div class='InfoTop'>
                    <img src={usericon} class='InfoIcon'></img>
                    <text style={{fontSize: '40px'}}>{name}</text>
                </div>
                <div class='InfoBot'>
                    <table>
                        <tr>
                            <td class='Infoline'>生理性別:</td>
                            <td class='Infoline' style={{textAlign: 'left'}}>
                            <text style={{fontSize: '40px'}}> {gender}</text>
                            </td>                            
                        </tr>
                        <tr>
                            <td class='Infoline'>電子信箱:</td>
                            <td><text style={{fontSize: '40px'}}> {mail}</text></td>
                        </tr>
                        <tr>
                            <td class='Infoline'>身高:</td>
                            <td style={{textAlign: 'left'}}>
                            <text style={{fontSize: '40px'}}> {height}</text>
                                <label style={{fontSize: '20px', fontWeight: 'bold'}}>公分</label>
                            </td>
                        </tr>
                        <tr>
                            <td class='Infoline'>體重:</td>
                            <td style={{textAlign: 'left'}}>
                            <text style={{fontSize: '40px'}}> {weight}</text>
                                <label style={{fontSize: '20px', fontWeight: 'bold'}}>公斤</label>
                            </td>
                        </tr>
                        <tr>
                            <td class='Infoline'>年齡:</td>
                            <td style={{textAlign: 'left'}}>
                            <text style={{fontSize: '40px'}}> {age}</text>
                                <label style={{fontSize: '20px', fontWeight: 'bold'}}>歲</label>
                            </td>
                        </tr>
                        <tr>
                            <td class='Infoline'>BMI:</td>
                            <td style={{textAlign: 'left'}}><text style={{fontSize: '40px'}}> {bmi}</text></td>
                        </tr>
                    </table>
                    <Link to="/changeinfo">
                        <button class='InfoEditButton'>修改資料</button>
                    </Link>
                </div>        
            </div>
        </div>
    );
}
export default MyInfo;