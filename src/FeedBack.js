import { FormikProvider, useFormik } from 'formik'
import * as Yup from 'yup';
import * as UI from 'react-bootstrap';
import "react-phone-input-2/lib/style.css";
import Swal from 'sweetalert2';
import { FeedBackForm } from './FeedBackForm';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
export const FeedBack = () => {
    const formData= []
    const history=useHistory()
    const formik = useFormik({
        initialValues: {
            customerName: "", email: "", mobileNo: "+91", serviceQuality: "",
            beverageQuality: "", clean: "", overallExperience: ""
        },
        validationSchema: Yup.object({
            customerName: Yup.string().required('Customer Name is required'),
            email: Yup.string().email('Invalid Email').required('Email is required'),
            mobileNo: Yup.string().min(12,"Invalid Mobile Number").required('Phone Number is Required'),
            serviceQuality: Yup.lazy(val => (Array.isArray(val) ? 
            Yup.array().of(Yup.string().required('Rate the Service Quality')) : Yup.string().required('Rate the Service Quality'))),
            beverageQuality: Yup.lazy(val => (Array.isArray(val) ? 
            Yup.array().of(Yup.string().required('Rate the quality of Beverage')) : Yup.string().required('Rate the quality of Beverage'))),
            clean: Yup.lazy(val => (Array.isArray(val) ? 
            Yup.array().of(Yup.string().required("Rate Restaurant's cleanliness")) : Yup.string().required("Rate Restaurant's cleanliness"))),
            overallExperience: Yup.lazy(val => (Array.isArray(val) ? 
            Yup.array().of(Yup.string().required("Rate Overall Experience")) : Yup.string().required("Rate Overall Experience"))),
        }),
        onSubmit: (values) => {
            Swal.fire({
                icon: "success",
                title: "Thank you for providing the feedback.",
                text: "We will work towards improving your experience.",
                width: '590px',
                confirmButtonText: "Close"
            }).then(function () {
                formData.push(values)
                let previousValues = JSON.parse(localStorage.getItem('reviews'))
                if (previousValues === null) {
                    localStorage.setItem('reviews', JSON.stringify(formData))
                }
                else {
                    previousValues.push(values)
                    localStorage.setItem('reviews', JSON.stringify(previousValues))
                }
                formik.resetForm()
                history.push('/feedBackTable')
            })
        }
    })
    useEffect(()=>{
        Swal.fire({
            imageUrl:'https://cdn.shopify.com/s/files/1/1061/1924/products/Emoji_Icon_-_Happy_grande.png?v=1513251069',
            imageWidth: 200,
            imageHeight: 200,
            width:"38%",
            imageAlt: 'Custom image',
            title:"Thank you for Visiting.",
            text:"We are committed to providing you with the best dining experience possible, so we welcome your comments. Please fill out the questionnaire."
        })
    },[])
    return (
        <>
            <FormikProvider value={formik}>
                <br></br><br></br><br></br><br></br><br></br><br></br>
                <UI.Container className="outer-page-content-container">
                        <nav class="navbar bg-info" style={{ borderRadius: "5px", margin: "10px 0px 0px 0px" }}>
                            <div class="container-fluid">
                                <span class="navbar-brand mb-0 h1">&nbsp;Aromatic Bar</span>
                            </div>
                        </nav>
                    <br></br>
                    <UI.Row>
                        <UI.Col xs={12} sm={12} md={12} lg={10} xl={10} xxl={10}>
                        </UI.Col>
                        <UI.Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}>
                                <button type="button" className='btn btn-info' onClick={() => history.push('/feedBackTable')}>View Reviews</button>
                        </UI.Col>
                    </UI.Row>
                    <br></br>
                   <FeedBackForm formik={formik}/>
                </UI.Container>
            </FormikProvider>
        </>
    )
}