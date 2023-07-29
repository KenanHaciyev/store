import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../utils/routes'

import Logo from '../../images/logo.svg'

import styles from '../../styles/Footer.module.css'

const Footer = () => (
	<section className={styles.footer}>
		<div className={styles.logo}>
			<Link to={ROUTES.HOME}>
				<img src={Logo} alt="Logo" />
			</Link>
		</div>

		<div className={styles.rights}>
			Developed by{' '}
			<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/kanan-hajiyev/">
				Kenan Hajiyev
			</a>
		</div>

		<div className={styles.socials}>
			<a target="_blank" rel="noreferrer" href="https://instagram.com">
				<svg>
					<use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
				</svg>
			</a>

			<a target="_blank" rel="noreferrer" href="https://youtube.com">
				<svg>
					<use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`} />
				</svg>
			</a>

			<a target="_blank" rel="noreferrer" href="https://facebook.com">
				<svg>
					<use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`} />
				</svg>
			</a>
		</div>
	</section>
)

export default Footer
