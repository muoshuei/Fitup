import { useState } from "react";

/* Below is the test api on the backend side.
    It takes an user_id and sends it to the backend.
    Then the backend just sends the user_id back to client side.
*/
/* NOTE: "Access-Control-Allow-Origin: *" is added to allow backend to communicate
    with nodejs dev server for convenience. This should be not used in production.
*/

// @app.route('/api/user/<user_id>')
// def get_user_data(user_id):
//     print(f"{user_id}")
//     response = jsonify({"test": f"{user_id} as data"})
//     response.headers.add('Access-Control-Allow-Origin', '*')
//     return response

const APITest = ()=>{
    const [jsonData, setJsonData] = useState({
        "test": "Empty"
    });
    const handleGetData = async (e)=>{
        fetch(`http://localhost:8000/api/user/${e.target.value}`)
        .then(response => response.json())
        .then(data => setJsonData(data))
    }
    return (
        <div>
            <button onClick={handleGetData} value="1">getData1</button>
            <button onClick={handleGetData} value="2">getData2</button>
            <button onClick={handleGetData} value="3">getData3</button>
            <div>{jsonData.test}</div>;
        </div>
    )
}
export default APITest;