import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./Users.module.css";

export default function DisplayUser() {
	const [details, setDetails] = useState([]);
	let { username } = useParams();
	const getDetails = () => {
		axios
			.get(`https://api.github.com/users/${username}`)
			.then((response) => {
				const userAvatar = response.data;
				console.log(response);
				setDetails(userAvatar);
			})
			.catch((error) => console.error(error.response.data.message));
	};
	useEffect(() => getDetails(), []);
	return (
		<div className={style.users}>
			<div className={style.profile_details}>
				<img className={style.avatar_url} src={details.avatar_url} alt="profile"/>
				<div className={style.namewrapper}>
					<div className={style.name}>{details.name}</div>
					<div className={style.login}>{details.login}</div>
				</div>
			</div>
			<div className={style.bio}>{details.bio}</div>
			<div className={`${style.continfo} ${style.icon}`}>
				<i className="fa fa-folder" aria-hidden="true"><span className={style.extraspace}>{details.public_repos}</span></i>
				<i className="fa fa-file" aria-hidden="true"><span className={style.extraspace}>{details.public_gists}</span></i>
			</div>
			<div className={`${style.text} ${style.icon}`}>
				<i className="fa-solid fa-location-pin"><span className={`${style.text} ${style.extraspace}`}>{details.location === null ? "N/A" : details.location}</span></i>
			<div className={`${style.text} ${style.icon}`}>
				<i className="fa fa-globe" aria-hidden="true"><span className={`${style.text} ${style.extraspace}`}>{details.blog === "" ? "N/A" : details.blog}</span></i>
			</div>
			<div className={`${style.text} ${style.icon}`}>
				<i className="fa-solid fa-at" aria-hidden="true"><span className={`${style.text} ${style.extraspace}`}>{details.email === null ? "N/A" : details.email}</span></i>
			</div>
			<div className={`${style.text} ${style.icon}`}>
				<div className={style.created_at}>Created at: {details.created_at}</div>
				<div className={style.updated_at}>Updatd at: {details.updated_at}</div>
			</div>
		</div></div>
	);
}
