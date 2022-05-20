import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import styles from "./Users.module.css";


export default function DisplayUser() {
	const [details, setDetails] = useState([]);
  let { username } = useParams();
	const getDetails = () => {
		axios.get(`https://api.github.com/users/${username}`)
		.then((response) => {
			const userAvatar = response.data
			console.log(response);
			setDetails(userAvatar);
		})
		.catch(error => console.error(error.response.data.message));
	}
	useEffect(() => getDetails(), []);
  return (
		<div className={styles.users}>
			<img src={details.avatar_url} className={styles.avatar_url} alt="profile pic"></img>
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
}

