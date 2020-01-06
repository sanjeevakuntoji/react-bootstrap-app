import React, { Component } from 'react';
import styles from './subHeader.module.css';
import * as FontAwesome from 'react-icons/lib/fa';
import { Link } from 'react-router-dom';
class SubHeader extends Component {
	render() {
		const categorie = this.props.categories;
		return (
				<div className={styles.sub_categorie_content}>
					<Link className={styles.link_bar}>
						{categorie.map((con, i) => (
							<div className={styles.link_item}>
								<FontAwesome.FaServer/>&nbsp;
								{con.category}
							</div>
						))}
					</Link>
				</div>
		);
	}
}
export default SubHeader;
