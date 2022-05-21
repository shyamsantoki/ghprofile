import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Users.module.css";

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
		<div className={styles.users}>
			<div className={styles.profile_details}>
				<img className={styles.avatar_url} src={details.avatar_url} alt="profile"/>
				<div className={styles.namewrapper}>
					<div className={styles.name}>{details.name}</div>
					<div className={styles.login}>{details.login}</div>
				</div>
			</div>
			<div className={styles.bio}>{details.bio}</div>
			<div className={`${styles.continfo} ${styles.icon}`}>
				<i className="fa fa-folder" aria-hidden="true"><span className={styles.extraspace}>{details.public_repos}</span></i>
				<i className="fa fa-file" aria-hidden="true"><span className={styles.extraspace}>{details.public_gists}</span></i>
			</div>
			<div className={`${styles.text} ${styles.icon}`}>
				<i className="fa-solid fa-location-pin"><span className={`${styles.text} ${styles.extraspace}`}>{details.location === null ? "N/A" : details.location}</span></i>
			<div className={`${styles.text} ${styles.icon}`}>
				<i className="fa fa-globe" aria-hidden="true"><span className={`${styles.text} ${styles.extraspace}`}>{details.blog === "" ? "N/A" : details.blog}</span></i>
			</div>
			<div className={`${styles.text} ${styles.icon}`}>
				<i className="fa-solid fa-at" aria-hidden="true"><span className={`${styles.text} ${styles.extraspace}`}>{details.email === null ? "N/A" : details.email}</span></i>
			</div>
			<div className={`${styles.text} ${styles.icon}`}>
				<div className={styles.created_at}>Created at: {details.created_at}</div>
				<div className={styles.updated_at}>Updatd at: {details.updated_at}</div>
			</div>
		</div></div>
	);
}
