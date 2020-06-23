import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import './skeleton.css';

const DetailSkeleton = () => {
	return (
		<section>
			<SkeletonTheme color="#202020" highlightColor="#444">
				<div className="skeleton-video">
					<Skeleton duration={1} height={`100%`} width={`100%`} />
				</div>
				<div className="skeleton-description-container">
					<div className="skeleton-description">
						<div className="desc-left">
							<Skeleton duration={1} height={300} width={200} />
						</div>
						<div className="desc-right" style={{ marginLeft: '20px' }}>
							<p style={{ marginBottom: '28px' }}>
								<Skeleton duration={1} height={30} width={200} />
							</p>
							{Array(6).fill().map((item, index) => (
								<p key={index}>
									<Skeleton duration={1} height={30} width={500} />
								</p>
							))}
						</div>
					</div>
					<div className="skeleton-episode">
						<Skeleton duration={1} height={300} width={500} />
					</div>
				</div>
			</SkeletonTheme>
		</section>
	);
};

export default DetailSkeleton;
