import axios from 'axios'

const BASE_URL = process.env.REACT_APP_BASE_URL

const getLightForce = axios.get(`${BASE_URL}/people/1`).then(response => {
	return response?.data
}).catch(error => {
	return error
})

const getDarkForce = axios.get(`${BASE_URL}/people/4`).then(response => {
	return response?.data
}).catch(error => {
	return error
})

export const getYourMaster = () => Promise.race([getLightForce, getDarkForce]).then(function (value1) {
	return value1
}, function(value2) {
	return value2
}).catch(function (error1) {
	return error1
}, function(error2) {
	return error2
})

