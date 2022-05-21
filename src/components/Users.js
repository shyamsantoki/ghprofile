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
			<img
				src={details.avatar_url}
				className={styles.avatar_url}
				alt="profile pic"
			></img>
			<div className={styles.flexb}>
				<div className={styles.name}>{details.name}</div>
				<div className={styles.login}>{details.login}</div>
			</div>
			<div className={styles.bio}>{details.bio}</div>
			<div className={styles.public_repos}>{details.public_repos}</div>
			<div className={styles.created_at}>{details.created_at}</div>
			<div className={styles.updated_at}>{details.updated_at}</div>
			<div className={styles.blog}>{details.blog}</div>
			<div className={styles.location}>{details.location}</div>
			<div className={styles.email}>{details.email}</div>
		</div>
	);
	{
		/*
			<html>
				<head>
					<link rel="stylesheet" href="stylesheet.css">
					<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
					<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Plus+Jakarta+Sans">
				</head>
				<body>
					<div class="users">
						<div class="profile_details">
							<img class="avatar_url" src="https://avatars.githubusercontent.com/u/56479219?v=4" alt="profile">
							<div class="namewrapper">
								<div class="name">Shyam Santoki</div>
								<div class="login">shyamsantoki</div>
							</div>
						</div>
						<div class="bio">You know who I am</div>
						<div class="continfo icon">
							<i class="fa fa-folder" aria-hidden="true"><span class="extraspace">16</span></i>
							<i class="fa fa-file" aria-hidden="true"><span class="extraspace">0</span></i>
						</div>
						<div class="text icon">
							<i class="fa-solid fa-location-pin"><span class="text extraspace">Surat, IN</span></i>
						<div class="text icon">
							<i class="fa fa-globe" aria-hidden="true"><span class="text extraspace">https://shyam.sh</span></i>
						</div>
						<div class="text icon">
							<i class="fa-solid fa-at" aria-hidden="true"><span class="text extraspace">shyam_santoki@outlook.com</span></i>
						</div>
						<div class="times text">
							<div class="created_at">Created: 2022-05-20</div>
							<div class="updated_at">Updated: 2022-05-20</div>
						</div>
					</div>
				</body>
			</html>
		*/
	}
}
