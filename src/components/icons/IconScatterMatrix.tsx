const IconScatterMatrix = ({ height = 20, width = 20 }) => {
	return (
		<svg height={height} width={width} viewBox="0 0 32 32" class="fill-current">
			<circle cx="9.5" cy="9.5" r="2.5" />
			<circle cx="9.5" cy="22.5" r="2.5" />
			<circle cx="22.5" cy="22.5" r="2.5" />
			<path d="M28,2H4A2.0023,2.0023,0,0,0,2,4V28a2.0023,2.0023,0,0,0,2,2H28a2.0023,2.0023,0,0,0,2-2V4A2.0023,2.0023,0,0,0,28,2Zm0,13H17V4H28ZM15,4V15H4V4ZM4,17H15V28H4ZM17,28V17H28V28Z" />
		</svg>
	);
};
export default IconScatterMatrix;
