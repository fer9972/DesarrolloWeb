<template>
  <div>
    <h1>Gestion de estudiantes</h1>
    {{mensaje}}
    <br />
    <b-form action="javascript:void(0)" onsubmit="crearEstudiante()">
      <b-form-group
      label= "identificacion"
      label-for="id"
      >
        <label for="identificacion">identificación</label>
        <input class="form-control" type="number" placeholder="Ingrese su identificación" id="id" />
      </b-form-group>
      <b-form-group>
        <label for="nombre">nombre</label>
        <input class="form-control" type="text" placeholder="Ingrese su nombre" id="nombre" />
      </b-form-group>
      <b-form-group>
        <label for="apellido">apellido</label>
        <input class="form-control" type="text" placeholder="Ingrese su apellido" id="apellido" />
      </b-form-group>
      <b-form-group>
        <label for="edad">edad</label>
        <input class="form-control" type="number" placeholder="Ingrese su edad" id="edad" />
      </b-form-group>
      <b-form-group>
        <label for="correo">correo</label>
        <input class="form-control" type="text" placeholder="Ingrese su correo" id="correo" />
      </b-form-group>

      <b-form-group>
        <label for="carrera">carera</label>
        <select class="form-control" name="carreras" id="carreras">
          <option value="001">Ingeniería en Sistemas</option>
          <option value="002">Derecho</option>
          <option value="003">Comunicación</option>
        </select>
      </b-form-group>
      <input class="btn btn-primary" id="btnCrearEstudiante" type="submit" value="Crear estudiante" />
      <input
        class="btn btn-primary"
        id="btnEditarEstudiante"
        onclick="actualizarEstudiante()"
        type="button"
        value="Actualizar estudiante"
      />
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mensaje: "Hola Estudiantes"
    };
  }
};
</script>
