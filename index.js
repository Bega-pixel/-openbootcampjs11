class estudiantes {
    nombre = "jones"
    asignaturas= ["Javascript", "HTML", "CSS"]

    obtenDatos() {
        return {
            nombre:this.nombre,
            asignatura:this.asignatura
        }
    }

}

const estudiantes = new estudiantes();
console.log(estudiantes.obtenDatos());