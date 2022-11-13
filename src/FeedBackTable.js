/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import Swal from "sweetalert2";
import { ReviewModal } from "./ReviewModal";
import { useEffect, useState } from 'react';
import DataTable from "./DataTable";
import * as UI from 'react-bootstrap';
import { useHistory } from "react-router-dom";

export const FeedBackTable = () => {
    const [openReview, setOpenReview] = useState(false)
    const [reviewData, setReviewData] = useState()
    const history = useHistory()
    useEffect(() => {
            setDetails(prevState => ({
                ...prevState,
                headers: columns,
                body: JSON.parse(localStorage.getItem('reviews'))
            }));
    }, [])
    const columns = [
        {
            dataField: '',
            text: 'View Details',
            headerStyle: () => {
                return { width: "170px" };
            },
            formatter: (col, row) => {
                return <div style={{ textAlign: "center" }}>
                    <a href="javascript:void()" onClick={() => openReviewDetails(row)}>View Details</a>
                </div>
            }
        },
        {
            dataField: 'customerName',
            text: 'Customer Name',
            sort: true
        },
        {
            dataField: 'email',
            text: 'Email',
            sort: true
        },
        {
            dataField: 'mobileNo',
            text: 'Mobile Number',
            sort: true
        },
        {
            dataField: 'overallExperience',
            text: 'Overall Experience',
            sort: true
        },
        {
            dataField: '',
            text: 'Delete Review',
            formatter: (cell, row) => {
                return (
                    <div style={{ textAlign: "center" }}>
                        <button type="button" className="btn btn-sm btn-danger" onClick={() => deleteReview(row)}>Delete</button>
                    </div>
                )
            }
        },
    ];
    function openReviewDetails(data) {
        setOpenReview(true)
        setReviewData(data)
    }
    function deleteReview(rowData) {
        Swal.fire({
            icon: "question",
            text: "Are you sure want to Delete this review?",
            cancelButtonText: "No",
            cancelButtonColor: "red",
            confirmButtonText: "Yes",
            confirmButtonColor: "green",
            showCancelButton: true,
        }).then(function (result) {
            if (result.isConfirmed === true) {
                let data = JSON.parse(localStorage.getItem('reviews'))
                let filteredData = data.filter(item => item.customerName !== rowData.customerName || item.email !== rowData.email || item.mobileNo !== rowData.mobileNo)
                Swal.fire({
                    icon: "success",
                    text: "Review Deleted Successfully"
                }).then(function () {
                    localStorage.setItem('reviews', JSON.stringify(filteredData))
                    setDetails(prevState => ({
                        ...prevState,
                        headers: columns,
                        body: filteredData
                    }));
                })

            }
        })
    }
    const [details, setDetails] = useState({ headers: columns, body: [], keyField: 'name' });
    function closeReview() {
        setOpenReview(false)
    }
    return (
        <>
            <br></br><br></br><br></br><br></br><br></br><br></br>
            <UI.Container className="outer-page-content-container">
                <nav class="navbar bg-info" style={{ borderRadius: "5px", margin: "10px 0px 0px 0px" }}>
                    <div class="container-fluid">
                        <span class="navbar-brand mb-0 h1">&nbsp;Submitted Reviews</span>
                    </div>
                </nav>
                <br></br>
                <UI.Row>
                    <UI.Col xs={12} sm={12} md={12} lg={10} xl={10} xxl={10}>
                    </UI.Col>
                    <UI.Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}>
                        <button type="button" className='btn btn-info' onClick={() => history.push('/feedBackForm')}>Add Review</button>
                    </UI.Col>
                </UI.Row>
                <DataTable plotData={details} />
                <ReviewModal show={openReview} data={reviewData} close={closeReview} />
            </UI.Container>
        </>
    )
}