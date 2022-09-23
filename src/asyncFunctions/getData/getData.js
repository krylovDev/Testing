const axios = require("axios");
const mapArrToString = require("../../simpleValues/mapArrToString/mapArrToString");

const getData = async () => {
		const response = await axios.get('https://jsonplaceholder.typicode.com/users')
		const userIds = response.data.map((user) => user.id)
		return mapArrToString(userIds)
}

module.exports = getData
