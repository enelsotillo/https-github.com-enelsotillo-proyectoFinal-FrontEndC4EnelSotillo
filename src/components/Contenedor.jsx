const MyContenedor = (pros) =>{
    const { nombre, apellido } = pros;
    console.log(nombre);
    return (
        <>
       
        <p>Hola {pros.nombre} {pros.apellido}</p>
        </>
    )
}

export default MyContenedor;