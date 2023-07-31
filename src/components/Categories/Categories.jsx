import React from 'react'

import styles from "../../styles/Categories.module.css"
import { Link } from 'react-router-dom'

const Categories = ({title, categories = [], amount}) => {
	const list = categories.filter((_, i) => i < amount)

	return (
		<section className={styles.section} >
			<h2>{title}</h2>

			<div className={styles.list} >
				{
					list.map(({id, image, name}, i) => (
						<Link to={`/categories/${id}`} className={styles.item} key={i} >
							<div className={styles.image} style={{backgroundImage: `url(${image})`}} />
							<h3 className={styles.title} >{name}</h3>
						</Link>
					))
				}
			</div>
		</section>
	)
}

export default Categories