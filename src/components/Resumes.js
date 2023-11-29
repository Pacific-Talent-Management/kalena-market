import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import UserService from '../services/user.service';

const Resumes = () => {
    const API_URL = "http://localhost:8080/";
    const[file, setFile] = useState(null);
    const[resumeData, setResumeData] = useState({
        summary:'',
        civilian:'',
        education:'',
        assignments:'',
        skills_certs:'',
        languages:'',
        lang_desc:'',
        cultural:'',
        ref1_name:'',
        ref1_org:'',
        ref1_email:'',
        ref1_phone:'',
        ref2_name:'',
        ref2_org:'',
        ref2_email:'',
        ref2_phone:'',
        ref3_name:'',
        ref3_org:'',
        ref3_email:'',
        ref3_phone:'',
        ref4_name:'',
        ref4_org:'',
        ref4_email:'',
        ref4_phone:''
    });
    const[summary, setSummary] = useState("");
    const[civilian, setCivilian] = useState("");
    const[education, setEducation] = useState("");
    const[assignments, setAssignments] = useState("");
    const[skills_certs, setSkills_certs] = useState("");
    const[languages, setLanguages] = useState("");
    const[lang_desc, setLang_desc] = useState("");
    const[cultural, setCultural] = useState("");
    const[ref1_name, setRef1_name] = useState("");
    const[ref1_org, setRef1_org] = useState("");
    const[ref1_email, setRef1_email] = useState("");
    const[ref1_phone, setRef1_phone] = useState("");
    const[ref2_name, setRef2_name] = useState("");
    const[ref2_org, setRef2_org] = useState("");
    const[ref2_email, setRef2_email] = useState("");
    const[ref2_phone, setRef2_phone] = useState("");
    const[ref3_name, setRef3_name] = useState("");
    const[ref3_org, setRef3_org] = useState("");
    const[ref3_email, setRef3_email] = useState("");
    const[ref3_phone, setRef3_phone] = useState("");
    const[ref4_name, setRef4_name] = useState("");
    const[ref4_org, setRef4_org] = useState("");
    const[ref4_email, setRef4_email] = useState("");
    const[ref4_phone, setRef4_phone] = useState("");
    
    function setSummaryData(event){
        setSummary(event.target.value);
    }
    function setCivilianData(event){
        setCivilian(event.target.value);
    }
    function setEducationData(event){
        setEducation(event.target.value);
    }
    function setAssignmentsData(event){
        setAssignments(event.target.value);
    }
    function setSkillsCertsData(event){
        setSkills_certs(event.target.value);
    }
    function setLanguagesData(event){
        setLanguages(event.target.value);
    }
    function setLanguagesDescData(event){
        setLang_desc(event.target.value);
    }
    function setCulturalData(event){
        setCultural(event.target.value);
    }
    function setRef1NameData(event){
        setRef1_name(event.target.value);
    }
    function setRef1OrgData(event){
        setRef1_org(event.target.value);
    }
    function setRef1EmailData(event){
        setRef1_email(event.target.value);
    }
    function setRef1PhoneData(event){
        setRef1_phone(event.target.value);
    }
    function setRef2NameData(event){
        setRef2_name(event.target.value);
    }
    function setRef2OrgData(event){
        setRef2_org(event.target.value);
    }
    function setRef2EmailData(event){
        setRef2_email(event.target.value);
    }
    function setRef2PhoneData(event){
        setRef2_phone(event.target.value);
    }
    function setRef3NameData(event){
        setRef3_name(event.target.value);
    }
    function setRef3OrgData(event){
        setRef3_org(event.target.value);
    }
    function setRef3EmailData(event){
        setRef3_email(event.target.value);
    }
    function setRef3PhoneData(event){
        setRef3_phone(event.target.value);
    }
    function setRef4NameData(event){
        setRef4_name(event.target.value);
    }
    function setRef4OrgData(event){
        setRef4_org(event.target.value);
    }
    function setRef4EmailData(event){
        setRef4_email(event.target.value);
    }
    function setRef4PhoneData(event){
        setRef4_phone(event.target.value);
    }

    function handleFileChange(event){
        setFile(event.target.files[0]);
    }

    async function handleUpload(event){
        event.preventDefault();
        try {
            const formData = new FormData();
            formData.append('file', file);

            const url = 'http://localhost:5000/flask';
            const config = {
                headers: {
                    'content-type': 'multipart/form-data',
                },
            };
            const response = await axios.post(url, formData, config);
            setResumeData(response.data);
            setSummary(response.data.summary);
            setCivilian(response.data.civilian);
            setEducation(response.data.education);
            setAssignments(response.data.assignments);
            setSkills_certs(response.data.skills_certs);
            setLanguages(response.data.languages);
            setLang_desc(response.data.lang_desc);
            setCultural(response.data.cultural);
            setRef1_name(response.data.ref1_name);
            setRef1_org(response.data.ref1_org);
            setRef1_email(response.data.ref1_email);
            setRef1_phone(response.data.ref1_phone);
            setRef2_name(response.data.ref2_name);
            setRef2_org(response.data.ref2_org);
            setRef2_email(response.data.ref2_email);
            setRef2_phone(response.data.ref2_phone);
            setRef3_name(response.data.ref3_name);
            setRef3_org(response.data.ref3_org);
            setRef3_email(response.data.ref3_email);
            setRef3_phone(response.data.ref3_phone);
            setRef4_name(response.data.ref4_name);
            setRef4_org(response.data.ref4_org);
            setRef4_email(response.data.ref4_email);
            setRef4_phone(response.data.ref4_phone);
        }
        catch(error) {
            console.error("Error uploading PDF:", error);
        }
        
        
    }
    async function getData() {
        const results = await UserService.getResumeData();
        const data = results.data;
        setResumeData(data);
    }
    useEffect(() => {getData();
    },[]);


    async function handleSubmit() {
        const user = JSON.parse(localStorage.getItem("user"));
        const user_id = user.id;
        await axios.post(API_URL+"resumes/upload", {
            user_id,
            summary,
            civilian,
            education,
            assignments,
            skills_certs,
            languages,
            lang_desc,
            cultural,
            ref1_name,
            ref1_org,
            ref1_email,
            ref1_phone,
            ref2_name,
            ref2_org,
            ref2_email,
            ref2_phone,
            ref3_name,
            ref3_org,
            ref3_email,
            ref3_phone,
            ref4_name,
            ref4_org,
            ref4_email,
            ref4_phone
        });
    }
    
    return (
        
        <div className="resumes d-flex justify-content-center align-items-center">
            <div className = "container">
                <div className="row">
                    <div class="col-md-6 mb-3" >
                        <div className="input-group">
                            <input
                                className="form-control"
                                type="file"
                                onChange={handleFileChange}
                            />
                            <div className="input-group-append">
                                <button
                                className="btn btn-primary"
                                type="submit"
                                onClick={handleUpload}
                            >
                                Upload
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <h2>Summary</h2>
                    <div className= "newline-label">
                        <label>Summary Statement</label>
                        <br/>
                        <textarea
                            className="form-control"
                            rows="8"
                            col="50"
                            defaultValue={resumeData.summary}
                            onChange={setSummaryData}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className= "newline-label">
                        <label>Education</label>
                        <br/>
                        <textarea
                            className="form-control"
                            rows="8"
                            col="50"
                            defaultValue={resumeData.education}
                            onChange={setEducationData}
                        />
                    </div>
                </div>
                <h2>Work Experiences</h2>
                <div className="row">
                    <div className= "newline-label">
                        <label>Civilian</label>
                        <br/>
                        <textarea
                            className="form-control"
                            rows="8"
                            col="50"
                            defaultValue={resumeData.civilian}
                            onChange={setCivilianData}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className= "newline-label">
                        <label>Assignments</label>
                        <br/>
                        <textarea
                            className="form-control"
                            rows="8"
                            col="50"
                            defaultValue={resumeData.assignments}
                            onChange={setAssignmentsData}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className= "newline-label">
                        <label>Additional Skills & Certifications</label>
                        <br/>
                        <textarea
                            className="form-control"
                            rows="8"
                            col="50"
                            defaultValue={resumeData.skills_certs}
                            onChange={setSkillsCertsData}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className= "newline-label">
                        <label>Cultural Experiences & Travel</label>
                        <br/>
                        <textarea
                            className="form-control"
                            rows="8"
                            col="50"
                            defaultValue={resumeData.cultural}
                            onChange={setCulturalData}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className= "col-md-6 mb-3">
                        <div className="form-group"></div>
                        <label htmlFor="language">Language</label>
                        <br/>
                        <textarea
                            id="language"
                            className="form-control"
                            rows="8"
                            col="50"
                            defaultValue={resumeData.languages}
                            onChange={setLanguagesData}
                        />
                    </div>
                    <div className= "col-md-6 mb-3">
                        <div className="form-group"></div>
                        <label htmlFor="languageDescription">Describe your Language Experience(s)</label>
                        <br/>
                        <textarea
                            id="languageDescription"
                            className="form-control"
                            rows="8"
                            col="50"
                            defaultValue={resumeData.lang_desc}
                            onChange={setLanguagesDescData}
                        />
                    </div>
                </div>
                <h2>References</h2>
                <div className="row">
                    <div className="col-md-3 mb-3">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                className="form-control mb-4"
                                name="name-1"
                                defaultValue={resumeData.ref1_name}
                                onChange={setRef1NameData}
                            />
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div className="form-group">
                            <label htmlFor="org">Org (Duty Title)</label>
                            <input
                                type="text"
                                className="form-control mb-4"
                                name="org-1"
                                defaultValue={resumeData.ref1_org}
                                onChange={setRef1OrgData}
                            />
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                className="form-control mb-4"
                                name="email-1"
                                defaultValue={resumeData.ref1_email}
                                onChange={setRef1EmailData}
                            />
                        </div>
                    </div>
                    <div className="col-md-2 mb-2">
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="text"
                                className="form-control mb-4"
                                name="phone-1"
                                defaultValue={resumeData.ref1_phone}
                                onChange={setRef1PhoneData}
                            />
                        </div>
                    </div>
                </div> 
                <div className="row">
                    <div className="col-md-3 mb-3">
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control mb-4"
                                name="name-2"
                                defaultValue={resumeData.ref2_name}
                                onChange={setRef2NameData}
                            />
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control mb-4"
                                name="org-2"
                                defaultValue={resumeData.ref2_org}
                                onChange={setRef2OrgData}

                            />
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control mb-4"
                                name="email-2"
                                defaultValue={resumeData.ref2_email}
                                onChange={setRef2EmailData}
                            />
                        </div>
                    </div>
                    <div className="col-md-2 mb-2">
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control mb-4"
                                name="phone-2"
                                defaultValue={resumeData.ref2_phone}
                                onChange={setRef2PhoneData}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 mb-3">
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control mb-4"
                                name="name-3"
                                defaultValue={resumeData.ref3_name}
                                onChange={setRef3NameData}
                            />
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control mb-4"
                                name="org-3"
                                defaultValue={resumeData.ref3_org}
                                onChange={setRef3OrgData}
                            />
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control mb-4"
                                name="email-3"
                                defaultValue={resumeData.ref3_email}
                                onChange={setRef3EmailData}
                            />
                        </div>
                    </div>
                    <div className="col-md-2 mb-2">
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control mb-4"
                                name="phone-3"
                                defaultValue={resumeData.ref3_phone}
                                onChange={setRef3PhoneData}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 mb-3">
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control mb-4"
                                name="name-4"
                                defaultValue={resumeData.ref4_name}
                                onChange={setRef4NameData}
                            />
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control mb-4"
                                name="org-4"
                                defaultValue={resumeData.ref4_org}
                                onChange={setRef4OrgData}
                            />
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control mb-4"
                                name="email-4"
                                defaultValue={resumeData.ref4_email}
                                onChange={setRef4EmailData}
                            />
                        </div>
                    </div>
                    <div className="col-md-2 mb-2">
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control mb-4"
                                name="phone-4"
                                defaultValue={resumeData.ref4_phone}
                                onChange={setRef4PhoneData}
                            />
                        </div>
                    </div>
                </div>
                <div className = "row">
                    <Button variant="primary" onClick={handleSubmit}>Submit</Button>
                </div>
            </div>
        </div>
    )
 
}
export default Resumes;