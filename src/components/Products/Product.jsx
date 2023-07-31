import React, { useState } from 'react'

import styles from '../../styles/Product.module.css'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../utils/routes'

const Product = ({ images, title, price, description }) => {
	const SIZES = [4, 5, 6]
	const [currentImage, setCurrentImage] = useState(images[0])
	const [currentSize, setCurrentSize] = useState(SIZES[0])

	return (
		<section className={styles.product}>
			<div className={styles.images}>
				<div className={styles.current} style={{ backgroundImage: `url(${currentImage})` }} />
				<div className={styles['images-list']}>
					{images.map((image, i) => (
						<div
							key={i}
							className={`${styles.image} ${currentImage === image ? styles.activeImage : ""}`}
							style={{ backgroundImage: `url(${image})` }}
							onClick={() => {
								setCurrentImage(image)
							}}
						/>
					))}
				</div>
			</div>
			<div className={styles.info}>
				<h1 className={styles.title}>{title}</h1>
				<div className={styles.price}>{price}$</div>
				<div className={styles.color}>
					<span>Color:</span> Green
				</div>
				<div className={styles.sizes}>
					<span>Sizes:</span>

					<div className={styles.list}>
						{SIZES.map((size) => (
							<div
								className={`${styles.size} ${currentSize === size ? styles.active : ''}`}
								onClick={() => {
									setCurrentSize(size)
								}}
								key={size}
							>
								{size}
							</div>
						))}
					</div>
				</div>

				<p className={styles.description}>{description}</p>

				<div className={styles.actions}>
					<button onClick={() => {}} className={styles.add}>
						Add to cart
					</button>
					<button className={styles.favourite}>Add to favourites</button>
				</div>

				<div className={styles.bottom}>
					<div className={styles.purchase}>19 people purchased</div>

					<Link to={ROUTES.HOME}>Return to store</Link>
				</div>
			</div>
		</section>
	)
}

export default Product
