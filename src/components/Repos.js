import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Repos.module.css";

export default function DisplayUser() {
	const [repos, setRepos] = useState([]);
	let { username } = useParams();
	const getRepos = () => {
		axios
			.get(`https://api.github.com/users/${username}/repos`)
			.then((response) => {
				const userAvatar = response.data;
				setRepos(userAvatar);
			})
			.catch((error) => console.error(error.response.data.message));
	};
	useEffect(() => getRepos(), []);
	return (
		<>
			<div className={`${styles.title} ${styles.id}`}>{username}</div>
			{repos.map((repo) => (
				<div className={styles.id} key={repo.id}>
					<div className={styles.reponame}>
						<span className={styles.username}>{username}</span>
						<span style={{margin: "0px 5px 0px 5px", color: "#999", fontWeight: "bold"}}>/</span>
						<span className={styles.name}>{repo.name}</span>
					</div>
						{repo.description === null 
							? <div className={`${styles.description} ${styles.na}`}>n/a</div>
							: <div className={`${styles.description}`}>{repo.description}</div>}
						{repo.homepage === null || repo.homepage === ""
							? null
							: <div className={styles.homepage}>{repo.homepage}</div>}
						<div className={styles.repoinfo}>
							<div><i className="fa-solid fa-star">&nbsp;</i>{repo.stargazers_count}</div>
							<div><i className="fa-solid fa-code-branch">&nbsp;</i>{repo.forks_count}</div>
						</div>
						{repo.license === null ? null : <div className={styles.license}>License:{repo.license.name}</div>}
						{repo.language === null ? null : <div className={styles.language}>{repo.language}</div>}
						<div className={styles.size}>Size: {repo.size > 1024 ? Math.ceil(repo.size/1024) + " MB" : repo.size + " KB"}</div>
						<div className={`${styles.text}`}>
							<div className={styles.created_at}>Created at: {repo.created_at}</div>
							<div className={styles.updated_at}>Updated at: {repo.updated_at}</div>
						</div>
				</div>
			))}
		</>
	)
}
