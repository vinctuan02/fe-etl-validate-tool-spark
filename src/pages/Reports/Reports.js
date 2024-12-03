import { useEffect } from 'react'
import './Reports.scss'
import { getAllReports } from '../../services/ReportsService'

const Reports = () => {

    useEffect(() => {
        console.log("hihi");
        getAllReports()
    }, [])


    return (
        <div className='others-page'>
            Reports
        </div>
    )
}

export default Reports