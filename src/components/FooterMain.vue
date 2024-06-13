<script lang="ts">
const itemFooter = [
  {
    label: 'LÍNEA INSTITUCIONAL',
    children: [
      { name: 'Línea Ética', link: '#' },
      { name: 'Política de Tratamiento de Datos', link: '#' },
      { name: 'Política Antisoborno y Anticorrupción', link: '#' }
    ]
  },
  {
    label: 'ENLACES DE INTERÉS',
    children: [
      { name: 'Transparencia', link: '#' },
      { name: 'Personas', link: '#' },
      { name: 'Empresas', link: '#' },
      { name: 'Fondos de Capital Privado', link: '#' }
    ]
  },
  {
    label: 'CONTÁCTANOS',
    children: [
      { name: 'Cra 13 # 26A - 47 P. 9-10, Bogotá.', link: '#' },
      { name: 'Bogotá: +57 (601) 297 30 60', link: '#' },
      { name: 'Resto del País: 01 8000 521 144', link: '#' },
      { name: 'Red de Oficinas', link: '#' }
    ]
  }
]

const mediaSocial = [
  {
    label: 'SÍGUENOS EN',
    children: [
      { name: 'Facebook', link: '#', className: 'fid-facebook' },
      { name: 'Instagram', link: '#', className: 'fid-instagram' },
      { name: 'Twitter', link: '#', className: 'fid-x-twitter' },
      { name: 'Linkendin', link: '#', className: 'fid-linkendin' },
      { name: 'YouTube', link: '#', className: 'fid-youtube' }
    ]
  }
]

const subsidiary = [
  { imgUrl: '/img/01.png', url: '#', alt: 'FiduOccidente' },
  { imgUrl: '/img/02.png', url: '#', alt: 'FiduOccidente' },
  { imgUrl: '/img/03.png', url: '#', alt: 'FiduOccidente' },
  { imgUrl: '/img/04.png', url: '#', alt: 'FiduOccidente' },
  { imgUrl: '/img/05.png', url: '#', alt: 'FiduOccidente' }
]

export default {
  setup() {
    return {
      itemFooter,
      mediaSocial,
      subsidiary
    }
  }
}
</script>
<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="box_footer">
          <div class="logo_footer">
            <a href="/">
              <img src="@/assets/fiduoccidente_logo.png" alt="fiduoccidente_logo" />
            </a>
          </div>

          <div class="links_footer" v-for="group in itemFooter">
            <h5>{{ group.label }}</h5>
            <ul class="list_links">
              <li v-for="item in group.children">
                <a href="{{ item.link }}">{{ item.name }}</a>
              </li>
            </ul>
          </div>

          <div class="links_footer" v-for="group in mediaSocial">
            <h5>{{ group.label }}</h5>
            <ul class="social_links">
              <li v-for="items in group.children">
                <a :href="items.link">
                  <i :class="items.className"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="subsidiary">
          <div class="sub_logo" v-for="brand in subsidiary">
            <a href="/">
              <img :src="brand.imgUrl" alt="FiduOccidente" />
            </a>
          </div>
        </div>
        <div class="copyright">
          <p>
            FIDUOCCIDENTE © 2024 es una marca de Banco de Occidente S.A., que forma parte del Grupo
            Aval. – Colombia
          </p>
        </div>
      </div>
      <div class="logo_sb">
        <a href="/"
          ><img src="@/assets/superintendencia.png" alt="vigilado superintendencia bancaria"
        /></a>
      </div>
    </div>
  </footer>
</template>
