import React from 'react'
import rectangle from '../../../Assets/images/Rectangle.png';
import pencil from '../../../Assets/images/pencil.png'
import { Link } from 'react-scroll';
import bgcover from '../../../Assets/images/bg-cover.png';
import avatar from '../../../Assets/images/avatar-1.jpg';
import userAvatar from "../../../Assets/images/user.png"
import Moment from 'react-moment';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { useEffect } from 'react'
import { useState } from 'react';
import { FileRequestCreator, RequestCreator, imgBaseUrl } from "../../../ApiController/baseUrl"
import Spinner from "../../Components/Spinner"

const months = ['January', 'Febuary', `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];


function Picture_Component() {

    const dispatcher = useDispatch()
    const [headerImage, setHeaderImage] = useState()
    const [profileImage, setProfileImage] = useState()
    const [headerImgLoading, setHeaderImgLoading] = useState(false)
    const [profileImgLoading, setProfileImgLoading] = useState(false)

    const user = useSelector(state => state.user.userInfo);
    const [date, setDate] = useState({
        month: '',
        day: '',
        year: ''
    })

    useEffect(() => {
        if (user[0]) {
            var check = moment(user[0].joined, 'YYYY/MM/DD');

            let month = check.format('M');
            let day = check.format('D')

            let year = check.format('YYYY');

            setDate({
                month: parseInt(month, 10) - 1,
                day: day,
                year: year
            })
        }
    }, [user])

    async function FileRequestCreatorFunction(type, path, input, headerOrProfileImage) {
        headerOrProfileImage === "headerImage" ? setHeaderImgLoading(true) : setProfileImgLoading(true)
        const response = await FileRequestCreator(type, path, input)
        if (headerOrProfileImage === "headerImage") {
            const response2 = await RequestCreator("POST", "/users/imageUpload", { "profileHeader": response.data.data[0].s3key }, localStorage.getItem('token'))
        }
        if (headerOrProfileImage === "profileImage") {
            const response2 = await RequestCreator("POST", "/users/imageUpload", { "profileImage": response.data.data[0].s3key }, localStorage.getItem('token'))
        }
        RequestCreator('GET', '/users/userInformation', '', localStorage.getItem('token')).then((response) => {
            dispatcher({ type: 'LOGIN', payload: response.data.data })
            setHeaderImgLoading(false)
            setProfileImgLoading(false)
        })
    }

    useEffect(() => {
        if (headerImage && headerImage !== null) {
            const fd = new FormData()
            fd.append("file", headerImage)
            const res = FileRequestCreatorFunction("POST", "/uploads/upload/profileHeader", fd, "headerImage")
            setHeaderImage("")
        }
        if (profileImage && profileImage !== null) {
            const fd = new FormData()
            fd.append("file", profileImage)
            const res = FileRequestCreatorFunction("POST", "/uploads/upload/profileImage", fd, "profileImage")
            setProfileImage("")
        }
    }, [headerImage, profileImage])

    return (
        <div className="cs_container_fluid cs_padding">
            <div className="card mb-0">
                <div className="profile-cover">
                    <div className="profile-cover-img-wrapper">
                        {/* <div className="profile-cover-content profile-cover-btn">
                            <div className="custom-file-btn">
                                <input type="file" id="img" name="img" accept="image/*" className="input-upload bg-white" onChange={e => setHeaderImage(e.target.files[0])} />
                                <label className="custom-file-btn-label btn btn-sm bg-white text_gray_zp">
                                //<img src={Camera} className="pr-2" /> 
                                    <img src={rectangle} className="pr-2 upload_icon sm_pr_0" />
                                    <span className="d-none d-sm-inline-block vr_align_bottom">{headerImgLoading ? <Spinner color="text-primary spinner-border-sm" /> : "Update your header" }</span>
                                </label>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="card-body text-center card-body-sm">
                    <div className="avatar avatar-xxl card-avatar card-avatar-top">
                        <img src={
                            user && user[0] && user[0].profileImage
                                ?
                                String(imgBaseUrl + user[0].profileImage)
                                :
                                userAvatar
                        } className="avatar-img rounded-circle border border-4 border-card" alt="..." />
                        <span className="edit-btn"  >
                            {/* <i class="fad fa-pen"></i> */}
                            <input type="file" name="profileImg" accept="image/*" className="input-upload bg-white" onChange={e => setProfileImage(e.target.files[0])} />
                            {profileImgLoading ? <Spinner color="text-primary spinner-border-sm" /> : <img src={pencil} className="edit_icon_pencil" />}
                        </span>
                    </div>
                    <h2 className="page-header-title">
                        {user.length > 0 && user[0].name}

                    </h2>
                    <p className=" sub-title text-dark-gray  text-muted mb-3">
                        Joined on {months[date.month]} {date.day},  <Moment format="YYYY" parse="YYYY">  {user.length > 0 && user[0].joined}</Moment>
                        {/* {user.length>0&&user[0].joined} */}

                    </p>
                </div>
            </div>
        </div>
    )
}

export default Picture_Component
