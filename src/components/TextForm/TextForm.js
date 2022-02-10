const TextForm = (props)=>{
	// console.log("TextForm props : ", props.labelInfo);
	const handleChange = (e)=>{
		props.refFnc.current = e.target.value
	}
	return (
		<div>
			<label>{props.labelInfo} : </label>
			<input type='text' onChange = {handleChange}/>			
		</div>
	)		
}

export default TextForm