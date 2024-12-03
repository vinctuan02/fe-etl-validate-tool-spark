

import instance from './customizeAxios'

const getAllReports = () => {
    return instance.get(`report/get-all-reports`)
}

export {
    getAllReports
}