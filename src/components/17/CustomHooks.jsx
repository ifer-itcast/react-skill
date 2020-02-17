import React, { useState, useEffect, useCallback } from 'react';

const useWinSize = () => {
    // size 初始值是一个对象
	const [size, setSize] = useState({
		width: document.documentElement.clientWidth,
		height: document.documentElement.clientHeight
	});

	const onResize = useCallback(() => {
		setSize({
			width: document.documentElement.clientWidth,
			height: document.documentElement.clientHeight
		});
	}, []);

	useEffect(() => {
		window.addEventListener('resize', onResize);
		return () => {
            // 组件卸载的时候解绑事件
			window.removeEventListener('resize', onResize);
		};
	}, []);
	return size;
};

export default () => {
	const size = useWinSize();
	return (
		<div>
			页面size: {size.width}x{size.height}
		</div>
	);
};
