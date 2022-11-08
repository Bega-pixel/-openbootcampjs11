class estudiantes {
    nombre = "Jones"
    asignaturas= ["Javascript", "HTML", "CSS"]

    obtenDatos() {
        return {
            nombre:this.nombre,
            asignatura:this.asignatura
        }
    }

}

const estudiante = new estudiantes();
console.log(estudiante.obtenDatos());