import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import './skeleton.css';

const HomeSkeleton = () => {
	return (
		<section>
			<SkeletonTheme color="#202020" highlightColor="#444">
				<div className="skeleton-hero">
					<Skeleton duration={1} height={`100%`} width={`100%`} />
				</div>
				<div className="skeleton-container">
					<h2 className="skeleton-title">
						<Skeleton duration={1} height={30} width={200} />
					</h2>

					<ul className="skeleton-list">
						{Array(6).fill().map((item, index) => (
							<li key={index}>
								<Skeleton height={350} />
								<p className="card-channel">
									<Skeleton width={`100%`} />
								</p>
								<div className="card-metrics">
									<Skeleton width={`30%`} />
								</div>
							</li>
						))}
					</ul>

					<h2 className="skeleton-title">
						<Skeleton duration={1} height={30} width={200} />
					</h2>

					<ul className="skeleton-list">
						{Array(6).fill().map((item, index) => (
							<li key={index}>
								<Skeleton height={350} />
								<p className="card-channel">
									<Skeleton width={`100%`} />
								</p>
								<div className="card-metrics">
									<Skeleton width={`30%`} />
								</div>
							</li>
						))}
					</ul>
				</div>
			</SkeletonTheme>
		</section>
	);
};

export default HomeSkeleton;
