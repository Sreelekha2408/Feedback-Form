import { ErrorMessage, Field, Form } from "formik"
import * as UI from 'react-bootstrap'
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
export const FeedBackForm=({formik})=>{
    return(
        <Form onSubmit={formik.handleSubmit} id='formId'
        >
        <UI.Row>
            <UI.Col xs={12} sm={12} md={12} lg={1} xl={1} xxl={1}>
            </UI.Col>
            <UI.Col xs={12} sm={12} md={12} lg={5} xl={5} xxl={5}>
                <UI.InputGroup className="mb-4p5">
                    <span className="label-text-style"><span className="mandatory" >*</span> Customer Name</span>
                    <Field type='text' name="customerName"
                        id="customerName"
                        className={formik?.errors?.customerName ? "form-control mandatoryField is-invalid" :
                            (formik?.values?.customerName !== "" ? "form-control mandatoryField is-valid" : "form-control mandatoryField")} autoComplete="off" />
                    <ErrorMessage className="text-error" name="customerName" component="div" />
                    <span id="descriptionLong" name="descriptionLong"> </span>
                </UI.InputGroup>
            </UI.Col>
            <UI.Col xs={12} sm={12} md={12} lg={5} xl={5} xxl={5}>
                <UI.InputGroup className="mb-4p5">
                    <span className="label-text-style"><span className="mandatory" >*</span> Email</span>
                    <Field type="text" id="email" name="email"
                        className={formik?.errors?.email ? "form-control mandatoryField is-invalid" :
                            (formik?.values?.email !== "" ? "form-control mandatoryField is-valid" : "form-control mandatoryField")}
                        autoComplete="off"
                    />
                    <ErrorMessage className="text-error" name="email" component="div" />
                </UI.InputGroup>
            </UI.Col>
            <UI.Col xs={12} sm={12} md={12} lg={1} xl={1} xxl={1}>
            </UI.Col>
        </UI.Row>
        <UI.Row>
            <UI.Col xs={12} sm={12} md={12} lg={1} xl={1} xxl={1}>
            </UI.Col>
            <UI.Col xs={12} sm={12} md={12} lg={5} xl={5} xxl={5}>
                <UI.InputGroup className="mb-4p5">
                    <span className="label-text-style"><span className="mandatory" >*</span> Phone</span>
                    <PhoneInput
                        country={'in'}
                        value={formik?.values?.mobileNo}
                        inputProps={{
                            name: "mobileNo",
                            country: "in",
                            required: true,
                            autoComplete:"off"
                        }}
                        inputStyle={{
                            width: "528px",
                            height: "40px",
                            margin: "0px 5px 5px 0px",
                            borderColor: formik?.errors?.mobileNo ? "red" :
                                (formik?.values?.mobileNo !== "" && formik?.values?.mobileNo.length > 11 ? "green" : ""),
                            borderWidth: "1.5px"
                        }}
                        buttonStyle={{
                            borderColor: formik?.errors?.mobileNo ? "red" :
                                (formik?.values?.mobileNo !== "" && formik?.values?.mobileNo.length > 11 ? "green" : ""),
                        }}
                        onChange={(e) => formik.setFieldValue('mobileNo', e)} 
                        
                        />
                    <ErrorMessage className="text-error" name="mobileNo" component="div" />
                </UI.InputGroup>
            </UI.Col>
            <UI.Col xs={12} sm={12} md={12} lg={5} xl={5} xxl={5}>
            </UI.Col>
            <UI.Col xs={12} sm={12} md={12} lg={1} xl={1} xxl={1}>
            </UI.Col>
        </UI.Row>
        <br></br>
        <UI.Row>
            <UI.Col xs={12} sm={12} md={12} lg={1} xl={1} xxl={1}>
            </UI.Col>
            <UI.Col xs={12} sm={12} md={12} lg={5} xl={5} xxl={5}>
                <UI.InputGroup className="mb-4p5">
                    <span className="label-text-style"><span className="mandatory" >*</span> Please rate the quality of service you received from your host.</span>
                    <div role="group" aria-labelledby="my-radio-group">
                        <Field type="checkbox" id="serviceQuality" name="serviceQuality"
                            autoComplete="off" value="Excellent" 
                            style={{ width: 18, height: 18}}/>&nbsp;&nbsp;Excellent
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Field type="checkbox" id="serviceQuality" name="serviceQuality"
                           style={{ width: 18, height: 18 }} autoComplete="off" value="Good" />&nbsp;&nbsp;Good
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Field type="checkbox" id="serviceQuality" name="serviceQuality"
                         style={{ width: 18, height: 18 }}   autoComplete="off" value="Fair" />&nbsp;&nbsp;Fair
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Field type="checkbox" id="serviceQuality" name="serviceQuality"
                          style={{ width: 18, height: 18 }}  autoComplete="off" value="Bad" />&nbsp;&nbsp;Bad
                        <ErrorMessage className="text-error" name="serviceQuality" component="div" />
                    </div>
                </UI.InputGroup>
            </UI.Col>
            <UI.Col xs={12} sm={12} md={12} lg={5} xl={5} xxl={5}>
                <UI.InputGroup className="mb-4p5">
                    <span className="label-text-style"><span className="mandatory" >*</span> Please rate the quality of your beverage.</span>
                    <div role="group" aria-labelledby="my-radio-group">
                        <Field type="checkbox" id="beverageQuality" name="beverageQuality"
                            style={{ width: 18, height: 18}} autoComplete="off" value="Excellent" />&nbsp;&nbsp;Excellent
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Field type="checkbox" id="beverageQuality" name="beverageQuality"
                           style={{ width: 18, height: 18}} autoComplete="off" value="Good" />&nbsp;&nbsp;Good
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Field type="checkbox" id="beverageQuality" name="beverageQuality"
                          style={{ width: 18, height: 18}}  autoComplete="off" value="Fair" />&nbsp;&nbsp;Fair
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Field type="checkbox" id="beverageQuality" name="beverageQuality"
                           style={{ width: 18, height: 18}} autoComplete="off" value="Bad" />&nbsp;&nbsp;Bad
                        <ErrorMessage className="text-error" name="beverageQuality" component="div" />
                    </div>
                </UI.InputGroup>
            </UI.Col>
            <UI.Col xs={12} sm={12} md={12} lg={1} xl={1} xxl={1}>
            </UI.Col>
        </UI.Row>
        <br></br>
        <UI.Row>
            <UI.Col xs={12} sm={12} md={12} lg={1} xl={1} xxl={1}>
            </UI.Col>
            <UI.Col xs={12} sm={12} md={12} lg={5} xl={5} xxl={5}>
                <UI.InputGroup className="mb-4p5">
                    <span className="label-text-style"><span className="mandatory" >*</span> Was our Restaurant Clean?</span>
                    <div role="group" aria-labelledby="my-radio-group">
                        <Field type="checkbox" id="clean" name="clean"
                          style={{ width: 18, height: 18}}  autoComplete="off" value="Excellent" />&nbsp;&nbsp;Excellent
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Field type="checkbox" id="clean" name="clean"
                           style={{ width: 18, height: 18}} autoComplete="off" value="Good" />&nbsp;&nbsp;Good
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Field type="checkbox" id="clean" name="clean"
                           style={{ width: 18, height: 18}} autoComplete="off" value="Fair" />&nbsp;&nbsp;Fair
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Field type="checkbox" id="clean" name="clean"
                          style={{ width: 18, height: 18}}  autoComplete="off" value="Bad" />&nbsp;&nbsp;Bad
                        <ErrorMessage className="text-error" name="clean" component="div" />
                    </div>
                </UI.InputGroup>
            </UI.Col>
            <UI.Col xs={12} sm={12} md={12} lg={5} xl={5} xxl={5}>
                <UI.InputGroup className="mb-4p5">
                    <span className="label-text-style"><span className="mandatory" >*</span> Please rate your overall dining experience.</span>
                    <div role="group" aria-labelledby="my-radio-group">
                        <Field type="checkbox" id="overallExperience" name="overallExperience"
                          style={{ width: 18, height: 18}}  autoComplete="off" value="Excellent" />&nbsp;&nbsp;Excellent
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Field type="checkbox" id="overallExperience" name="overallExperience"
                          style={{ width: 18, height: 18}}  autoComplete="off" value="Good" />&nbsp;&nbsp;Good
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Field type="checkbox" id="overallExperience" name="overallExperience"
                          style={{ width: 18, height: 18}}  autoComplete="off" value="Fair" />&nbsp;&nbsp;Fair
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Field type="checkbox" id="overallExperience" name="overallExperience"
                          style={{ width: 18, height: 18}}  autoComplete="off" value="Bad" />&nbsp;&nbsp;Bad
                        <ErrorMessage className="text-error" name="overallExperience" component="div" />
                    </div>
                </UI.InputGroup>
            </UI.Col>
            <UI.Col xs={12} sm={12} md={12} lg={1} xl={1} xxl={1}>
            </UI.Col>
        </UI.Row>
        <br></br>
        <UI.Container style={{ marginTop: "20px" }}>
            <UI.Row>
                <UI.Col xs={12} sm={12} md={12} lg={10} xl={10} xxl={10}>
                    &nbsp;
                </UI.Col>
                <UI.Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}>
                    <button type="submit" className="btn btn-success">Submit Review</button>
                </UI.Col>
            </UI.Row>
        </UI.Container>
    </Form>
    )
}