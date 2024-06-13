<script lang="ts">
export default {}
</script>
<template>
  <div class="newsletter">
    <section class="container">
      <div class="row">
        <div class="box_newsletter">
          <div class="text_newsletter">
            <i class="fid-mail"></i>
            <h3>¿Quieres mantenerte al día con las últimas noticias y consejos?</h3>
            <h5>
              Únete a nuestra comunidad de suscriptores y empieza a disfrutar de los beneficios.
            </h5>
          </div>
          <div class="box_form">
            <form>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Nombre"
              />
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Email"
              />
              <button type="submit" class="btn btn-primary">Registrar</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
